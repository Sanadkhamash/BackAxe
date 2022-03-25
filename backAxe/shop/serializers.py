from rest_framework import serializers
from . import models

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Category
        fields='__all__'

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Country
        fields='__all__'

class MakeSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Make
        fields='__all__'
    
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Product
        fields='__all__'
        depth=1

