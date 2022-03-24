from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions
from . import serializers, models
from rest_framework.response import Response
from  django.contrib.auth.models import User as DjangoUser
from rest_framework import status
from rest_framework.response import Response
from rest_framework.settings import api_settings
from django.shortcuts import get_object_or_404

# Create your views here.

class UserInfoViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.UserInfoSerializer
    queryset=models.UserInfo.objects.all()

    def get_permissions(self):
        if self.action == 'create':
            self.permission_classes = [permissions.AllowAny]
        elif self.action in ['list', 'delete']:
            self.permission_classes = [permissions.IsAdminUser]
        elif self.action in ['update','retrieve']:
            self.permission_classes = [permissions.IsAuthenticated]
        return super(self.__class__, self).get_permissions()

class ReportsViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ReportsSerializer
    queryset=models.Report.objects.all()


class RegisterUser(viewsets.ModelViewSet):
    serializer_class = serializers.RegisterSerializer
    queryset=DjangoUser.objects.all()

    def get_permissions(self):
        if self.action == 'create':
            self.permission_classes = [permissions.AllowAny]
        elif self.action in ['list', 'delete']:
            self.permission_classes = [permissions.IsAdminUser]
        elif self.action in ['update','retrieve']:
            self.permission_classes = [permissions.IsAuthenticated]
        return super(self.__class__, self).get_permissions()

