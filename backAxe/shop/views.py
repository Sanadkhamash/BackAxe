from django.shortcuts import render
from rest_framework import viewsets

from . import models, serializers

# Create your views here.

class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class=serializers.CategorySerializer
    queryset=models.Category.objects.all()

class ProductViewSet(viewsets.ModelViewSet):
    serializer_class=serializers.ProductSerializer
    queryset=models.Product.objects.all()

class CountryViewSet(viewsets.ModelViewSet):
    serializer_class=serializers.CountrySerializer
    queryset=models.Country.objects.all()
    
class MakeViewSet(viewsets.ModelViewSet):
    serializer_class=serializers.MakeSerializer
    queryset=models.Make.objects.all()