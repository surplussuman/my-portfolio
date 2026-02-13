from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, PageView


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    list_display = ('email', 'username', 'is_superadmin', 'is_active', 'subscribed', 'date_joined')
    list_filter = ('is_superadmin', 'is_active', 'subscribed')
    fieldsets = BaseUserAdmin.fieldsets + (
        ('Extra', {'fields': ('is_superadmin', 'avatar', 'google_id', 'subscribed')}),
    )


@admin.register(PageView)
class PageViewAdmin(admin.ModelAdmin):
    list_display = ('page', 'user', 'ip_address', 'created_at')
    list_filter = ('page', 'created_at')
