from rest_framework import status, permissions, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from django.shortcuts import get_object_or_404

from .models import BlogPost, BlogBlock
from .serializers import (
    BlogPostListSerializer, BlogPostDetailSerializer,
    BlogPostCreateSerializer, BlogBlockCreateSerializer, BlogBlockSerializer,
)


class IsSuperAdmin(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.is_superadmin


# ── Public Endpoints ──

class BlogPostListView(generics.ListAPIView):
    """Public: list published blog posts."""
    serializer_class = BlogPostListSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return BlogPost.objects.filter(status='published')


class BlogPostDetailView(APIView):
    """Public: view a single published blog post and increment views."""
    permission_classes = [permissions.AllowAny]

    def get(self, request, slug):
        post = get_object_or_404(BlogPost, slug=slug, status='published')
        post.views_count += 1
        post.save(update_fields=['views_count'])
        serializer = BlogPostDetailSerializer(post, context={'request': request})
        return Response(serializer.data)


# ── Admin Endpoints ──

class AdminBlogListView(generics.ListAPIView):
    """Admin: list all posts (drafts + published)."""
    serializer_class = BlogPostListSerializer
    permission_classes = [IsSuperAdmin]

    def get_queryset(self):
        return BlogPost.objects.all()


class AdminBlogCreateView(APIView):
    """Admin: create a new blog post."""
    permission_classes = [IsSuperAdmin]
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    def post(self, request):
        serializer = BlogPostCreateSerializer(data=request.data)
        if serializer.is_valid():
            post = serializer.save(author=request.user)
            return Response(
                BlogPostDetailSerializer(post, context={'request': request}).data,
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AdminBlogDetailView(APIView):
    """Admin: get / update / delete a blog post."""
    permission_classes = [IsSuperAdmin]
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    def get(self, request, pk):
        post = get_object_or_404(BlogPost, pk=pk)
        return Response(BlogPostDetailSerializer(post, context={'request': request}).data)

    def patch(self, request, pk):
        post = get_object_or_404(BlogPost, pk=pk)
        serializer = BlogPostCreateSerializer(post, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(BlogPostDetailSerializer(post, context={'request': request}).data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        post = get_object_or_404(BlogPost, pk=pk)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class AdminBlogBlockView(APIView):
    """Admin: add / update / delete content blocks in a post."""
    permission_classes = [IsSuperAdmin]
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    def post(self, request, pk):
        """Add a block to the post."""
        post = get_object_or_404(BlogPost, pk=pk)
        serializer = BlogBlockCreateSerializer(data=request.data)
        if serializer.is_valid():
            block = serializer.save(post=post)
            return Response(
                BlogBlockSerializer(block, context={'request': request}).data,
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        """Bulk replace all blocks for a post (used by the editor)."""
        post = get_object_or_404(BlogPost, pk=pk)
        # Delete old blocks
        post.blocks.all().delete()
        # Create new blocks
        blocks_data = request.data if isinstance(request.data, list) else request.data.get('blocks', [])
        created = []
        for idx, block_data in enumerate(blocks_data):
            block_data['order'] = idx
            serializer = BlogBlockCreateSerializer(data=block_data)
            if serializer.is_valid():
                block = serializer.save(post=post)
                created.append(block)
        return Response(
            BlogBlockSerializer(created, many=True, context={'request': request}).data,
        )


class AdminBlogBlockDeleteView(APIView):
    """Admin: delete a single block."""
    permission_classes = [IsSuperAdmin]

    def delete(self, request, pk, block_pk):
        block = get_object_or_404(BlogBlock, pk=block_pk, post__pk=pk)
        block.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class AdminUploadMediaView(APIView):
    """Admin: upload a media file and return its URL (for inline image/video/audio in editor)."""
    permission_classes = [IsSuperAdmin]
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request):
        file = request.FILES.get('file')
        if not file:
            return Response({'error': 'No file provided.'}, status=status.HTTP_400_BAD_REQUEST)
        # Create a temp BlogBlock just to store the file
        from django.core.files.storage import default_storage
        path = default_storage.save(f'blog/uploads/{file.name}', file)
        url = request.build_absolute_uri(f'/media/{path}')
        return Response({'url': url})
