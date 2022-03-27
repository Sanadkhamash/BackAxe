from django.urls import path,include,re_path
from rest_framework.routers import DefaultRouter
from . import views


router=DefaultRouter()
router.register(r'root', views.UserInfoViewSet, basename='users')
router.register(r'reports', views.ReportsViewSet, basename='reports')
router.register(r'get', views.UserViewSet, basename='get')

urlpatterns=[
    path('', include(router.urls))
]