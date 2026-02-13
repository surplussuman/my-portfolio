from rest_framework import status, generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate, get_user_model
from django.db.models import Count
from django.db.models.functions import TruncDate
from django.utils import timezone
from datetime import timedelta
from google.oauth2 import id_token
from google.auth.transport import requests as google_requests
from django.conf import settings
import uuid

from .serializers import (
    RegisterSerializer, LoginSerializer, GoogleAuthSerializer,
    UserSerializer, UserListSerializer
)
from .models import PageView

User = get_user_model()


class RegisterView(APIView):
    """Register new user with email and password."""
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            return Response({
                'user': UserSerializer(user).data,
                'tokens': {
                    'access': str(refresh.access_token),
                    'refresh': str(refresh),
                }
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    """Login with email and password."""
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = authenticate(
                email=serializer.validated_data['email'],
                password=serializer.validated_data['password']
            )
            if user:
                refresh = RefreshToken.for_user(user)
                return Response({
                    'user': UserSerializer(user).data,
                    'tokens': {
                        'access': str(refresh.access_token),
                        'refresh': str(refresh),
                    }
                })
            return Response(
                {'error': 'Invalid email or password.'},
                status=status.HTTP_401_UNAUTHORIZED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GoogleAuthView(APIView):
    """Authenticate with Google OAuth credential."""
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = GoogleAuthSerializer(data=request.data)
        if serializer.is_valid():
            try:
                # The credential can be either a JWT from new API or ID token from old API
                token = serializer.validated_data['credential']

                # Try to decode as JWT (new Google Identity Services)
                try:
                    idinfo = id_token.verify_oauth2_token(
                        token,
                        google_requests.Request(),
                        settings.GOOGLE_CLIENT_ID
                    )
                except ValueError:
                    # If JWT verification fails, try to decode as raw JWT (older API)
                    import jwt
                    try:
                        # Decode without verification first to check structure
                        decoded = jwt.decode(token, options={"verify_signature": False})
                        # Then verify with Google's public keys
                        idinfo = id_token.verify_oauth2_token(
                            token,
                            google_requests.Request(),
                            settings.GOOGLE_CLIENT_ID
                        )
                    except Exception as e:
                        print(f"Token decode error: {e}")
                        return Response(
                            {'error': 'Invalid Google token format.'},
                            status=status.HTTP_400_BAD_REQUEST
                        )

                email = idinfo.get('email')
                google_id = idinfo.get('sub')
                first_name = idinfo.get('given_name', '')
                last_name = idinfo.get('family_name', '')

                if not email:
                    return Response(
                        {'error': 'Email not provided by Google.'},
                        status=status.HTTP_400_BAD_REQUEST
                    )

                # Try to find existing user
                user = User.objects.filter(email=email).first()
                if not user:
                    user = User.objects.create_user(
                        email=email,
                        username=email.split('@')[0] + '_' + str(uuid.uuid4())[:6],
                        first_name=first_name,
                        last_name=last_name,
                        google_id=google_id,
                    )
                    user.set_unusable_password()
                    user.save()
                elif not user.google_id:
                    user.google_id = google_id
                    user.save()

                refresh = RefreshToken.for_user(user)
                return Response({
                    'user': UserSerializer(user).data,
                    'tokens': {
                        'access': str(refresh.access_token),
                        'refresh': str(refresh),
                    }
                })
            except ValueError as e:
                print(f"Google token verification error: {e}")
                return Response(
                    {'error': 'Invalid Google token.'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            except Exception as e:
                print(f"Unexpected Google auth error: {e}")
                return Response(
                    {'error': 'Google authentication failed.'},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MeView(APIView):
    """Get current user profile."""
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        return Response(UserSerializer(request.user).data)

    def patch(self, request):
        serializer = UserSerializer(request.user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TrackPageView(APIView):
    """Track a page view for analytics."""
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        PageView.objects.create(
            user=request.user if request.user.is_authenticated else None,
            page=request.data.get('page', '/'),
            ip_address=request.META.get('REMOTE_ADDR'),
        )
        return Response({'status': 'ok'})


class AdminInsightsView(APIView):
    """Admin-only endpoint for user & analytics insights."""
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        if not request.user.is_superadmin:
            return Response({'error': 'Forbidden'}, status=status.HTTP_403_FORBIDDEN)

        now = timezone.now()
        thirty_days_ago = now - timedelta(days=30)
        seven_days_ago = now - timedelta(days=7)

        total_users = User.objects.count()
        active_last_7d = User.objects.filter(last_active__gte=seven_days_ago).count()
        active_last_30d = User.objects.filter(last_active__gte=thirty_days_ago).count()
        subscribed_users = User.objects.filter(subscribed=True).count()

        # Page views last 30 days
        total_views = PageView.objects.filter(created_at__gte=thirty_days_ago).count()

        # Daily views for chart
        daily_views = (
            PageView.objects
            .filter(created_at__gte=thirty_days_ago)
            .annotate(date=TruncDate('created_at'))
            .values('date')
            .annotate(count=Count('id'))
            .order_by('date')
        )

        # Top pages
        top_pages = (
            PageView.objects
            .filter(created_at__gte=thirty_days_ago)
            .values('page')
            .annotate(count=Count('id'))
            .order_by('-count')[:10]
        )

        # New users per day
        new_users_daily = (
            User.objects
            .filter(date_joined__gte=thirty_days_ago)
            .annotate(date=TruncDate('date_joined'))
            .values('date')
            .annotate(count=Count('id'))
            .order_by('date')
        )

        return Response({
            'total_users': total_users,
            'active_last_7d': active_last_7d,
            'active_last_30d': active_last_30d,
            'subscribed_users': subscribed_users,
            'total_views_30d': total_views,
            'daily_views': list(daily_views),
            'top_pages': list(top_pages),
            'new_users_daily': list(new_users_daily),
        })


class AdminUserListView(generics.ListAPIView):
    """Admin-only user list."""
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserListSerializer

    def get_queryset(self):
        if not self.request.user.is_superadmin:
            return User.objects.none()
        return User.objects.all().order_by('-date_joined')
