from django.db import models
from django.conf import settings
import uuid


class BlogPost(models.Model):
    STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('published', 'Published'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=300)
    slug = models.SlugField(max_length=300, unique=True)
    excerpt = models.TextField(max_length=500, blank=True)
    cover_image = models.ImageField(upload_to='blog/covers/', blank=True, null=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='blog_posts')
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='draft')
    tags = models.CharField(max_length=500, blank=True, help_text='Comma-separated tags')
    views_count = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title


class BlogBlock(models.Model):
    """Rich content block within a blog post. Supports text, images, video, audio, URLs."""
    BLOCK_TYPES = [
        ('text', 'Text / Paragraph'),
        ('heading', 'Heading'),
        ('image', 'Image'),
        ('video', 'Video'),
        ('audio', 'Audio'),
        ('url', 'URL / Embed'),
        ('code', 'Code Block'),
        ('quote', 'Blockquote'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    post = models.ForeignKey(BlogPost, on_delete=models.CASCADE, related_name='blocks')
    block_type = models.CharField(max_length=10, choices=BLOCK_TYPES)
    content = models.TextField(blank=True, help_text='Text content, caption, or embed URL')
    media_file = models.FileField(upload_to='blog/media/', blank=True, null=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.post.title} - Block {self.order} ({self.block_type})"
