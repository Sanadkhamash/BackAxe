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

class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )

    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])

    class Meta:
        model = User
        fields = ('username', 'password','email')


    def validate(self, attrs):
        if not attrs['password']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs