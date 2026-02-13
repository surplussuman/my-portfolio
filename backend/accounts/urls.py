from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

urlpatterns = [
    path('register/', views.RegisterView.as_view(), name='register'),
    path('login/', views.LoginView.as_view(), name='login'),
    path('google/', views.GoogleAuthView.as_view(), name='google-auth'),
    path('me/', views.MeView.as_view(), name='me'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token-refresh'),
    path('track/', views.TrackPageView.as_view(), name='track-page'),
    path('admin/insights/', views.AdminInsightsView.as_view(), name='admin-insights'),
    path('admin/users/', views.AdminUserListView.as_view(), name='admin-users'),
]
