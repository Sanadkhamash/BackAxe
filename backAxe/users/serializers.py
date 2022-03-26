from rest_framework import serializers
from . import models
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password

class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.UserInfo
        fields='__all__'

class ReportsSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Report
        fields='__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields='__all__'


