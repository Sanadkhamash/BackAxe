from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.settings import api_settings
from django.contrib.auth.models import update_last_login
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.models import User
from users.serializers import UserSerializer


class LoginSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.user)

        data['user'] = UserSerializer(self.user).data
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        if api_settings.UPDATE_LAST_LOGIN:
            update_last_login(None, self.user)
        return data


class RegisterSerializer(UserSerializer):
    password = serializers.CharField(max_length=128, min_length=8, write_only=True, required=True)
    email = serializers.EmailField(required=True, write_only=True, max_length=128)

    class Meta:
        model = User
        fields = "__all__"

    # def create(self, validated_data):
    #     try:
    #         user = User.objects.get(email=validated_data['email'])

    #     except ObjectDoesNotExist:
    #         user = User(email=validated_data['email'], username=validated_data['username'])
    #         user.set_password(validated_data['password'])
    #         user.set_password(validated_data['password'])
    #     return user