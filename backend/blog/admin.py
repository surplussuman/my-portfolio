from django.contrib import admin
from .models import BlogPost, BlogBlock


class BlogBlockInline(admin.TabularInline):
    model = BlogBlock
    extra = 0


@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'status', 'views_count', 'created_at')
    list_filter = ('status', 'created_at')
    prepopulated_fields = {'slug': ('title',)}
    inlines = [BlogBlockInline]


@admin.register(BlogBlock)
class BlogBlockAdmin(admin.ModelAdmin):
    list_display = ('post', 'block_type', 'order')
    list_filter = ('block_type',)
