from django.shortcuts import render
from . import serializers, models
from rest_framework import viewsets

# Create your views here.

class TransactionsViewSet(viewsets.ModelViewSet):
    serializer_class=serializers.TransactionsSerializer
    queryset=models.Transaction.objects.all()
