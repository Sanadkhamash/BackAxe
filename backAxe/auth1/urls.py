from rest_framework.routers import DefaultRouter
from .views import LoginViewSet, RegistrationViewSet, RefreshViewSet

app_name:"auth1"

routes = DefaultRouter()

# AUTHENTICATION
routes.register(r'login', LoginViewSet, basename='auth-login')
routes.register(r'register', RegistrationViewSet, basename='auth-register')
routes.register(r'refresh', RefreshViewSet, basename='auth-refresh')



urlpatterns = [
    *routes.urls
]