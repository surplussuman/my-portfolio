from rest_framework import serializers
from .models import BlogPost, BlogBlock


class BlogBlockSerializer(serializers.ModelSerializer):
    media_url = serializers.SerializerMethodField()

    class Meta:
        model = BlogBlock
        fields = ('id', 'block_type', 'content', 'media_file', 'media_url', 'order')

    def get_media_url(self, obj):
        if obj.media_file:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.media_file.url)
            return obj.media_file.url
        return None


class BlogPostListSerializer(serializers.ModelSerializer):
    author_name = serializers.SerializerMethodField()
    cover_image_url = serializers.SerializerMethodField()

    class Meta:
        model = BlogPost
        fields = ('id', 'title', 'slug', 'excerpt', 'cover_image', 'cover_image_url',
                  'author_name', 'status', 'tags', 'views_count', 'created_at', 'updated_at')

    def get_author_name(self, obj):
        return obj.author.get_full_name() or obj.author.username

    def get_cover_image_url(self, obj):
        if obj.cover_image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.cover_image.url)
            return obj.cover_image.url
        return None


class BlogPostDetailSerializer(serializers.ModelSerializer):
    blocks = BlogBlockSerializer(many=True, read_only=True)
    author_name = serializers.SerializerMethodField()
    cover_image_url = serializers.SerializerMethodField()

    class Meta:
        model = BlogPost
        fields = ('id', 'title', 'slug', 'excerpt', 'cover_image', 'cover_image_url',
                  'author_name', 'status', 'tags', 'views_count', 'blocks',
                  'created_at', 'updated_at')

    def get_author_name(self, obj):
        return obj.author.get_full_name() or obj.author.username

    def get_cover_image_url(self, obj):
        if obj.cover_image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.cover_image.url)
            return obj.cover_image.url
        return None


class BlogPostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ('title', 'slug', 'excerpt', 'cover_image', 'status', 'tags')


class BlogBlockCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogBlock
        fields = ('block_type', 'content', 'media_file', 'order')
