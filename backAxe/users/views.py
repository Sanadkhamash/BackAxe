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
from rest_framework import generics


# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.UserSerializer
    queryset = DjangoUser.objects.all()


class UserInfoViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.UserInfoSerializer
    queryset=models.UserInfo.objects.all()

    # def get_object(self):
    #     print(self.action)
    #     if self.action == "partial_update":   
    #         print(self.request.data)


    #         return self.queryset.get(pk=self.request.data.user_id)
    #     return self.queryset.get(pk=self.kwargs["pk"])

    def partial_update(self, request, *args, **kwargs):
        print(request.user.id)
        partial = True # Here I change partial to True
        instance = self.queryset.get(user_id_id =self.request.user.id)
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

    def get_permissions(self):
        if self.action == 'create':
            self.permission_classes = [permissions.AllowAny]
        elif self.action in ['list', 'delete']:
            self.permission_classes = [permissions.IsAdminUser]
        elif self.action in ['update','retrieve']:
            self.permission_classes = [permissions.AllowAny]
        return super(self.__class__, self).get_permissions()

class ReportsViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ReportsSerializer
    queryset=models.Report.objects.all()

class UpdateUserInfo(generics.UpdateAPIView):

    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = [serializers.UserInfoSerializer, serializers.UserSerializer]
    queryset = models.UserInfo.objects.all()

    # def update(self, request, *args, **kwargs):
    #     if request.method == 'PATCH':
            
    #         userInfoserializer = serializers.UserInfoSerializer(request.data["mobile"],request.data["address"], partial=True)
    #         authUserserializer= serializers.UserSerializer( request.data["first_name"],request.data["last_name"], partial=True)
    #         if userInfoserializer.is_valid() and authUserserializer.is_valid():
    #             userInfoentry = userInfoserializer.save()
    #             authUserEntry = authUserserializer.save()
    #             return Response(status=status.HTTP_201_CREATED) 
    #         return Response(status=status.HTTP_400_BAD_REQUEST) 

        


