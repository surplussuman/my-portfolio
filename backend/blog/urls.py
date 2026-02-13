from django.urls import path
from . import views

urlpatterns = [
    # Public
    path('posts/', views.BlogPostListView.as_view(), name='blog-list'),
    path('posts/<slug:slug>/', views.BlogPostDetailView.as_view(), name='blog-detail'),
    # Admin
    path('admin/posts/', views.AdminBlogListView.as_view(), name='admin-blog-list'),
    path('admin/posts/create/', views.AdminBlogCreateView.as_view(), name='admin-blog-create'),
    path('admin/posts/<uuid:pk>/', views.AdminBlogDetailView.as_view(), name='admin-blog-detail'),
    path('admin/posts/<uuid:pk>/blocks/', views.AdminBlogBlockView.as_view(), name='admin-blog-blocks'),
    path('admin/posts/<uuid:pk>/blocks/<uuid:block_pk>/', views.AdminBlogBlockDeleteView.as_view(), name='admin-blog-block-delete'),
    path('admin/upload/', views.AdminUploadMediaView.as_view(), name='admin-upload'),
]
