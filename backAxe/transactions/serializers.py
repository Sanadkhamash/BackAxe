from re import search
from rest_framework import serializers
from . import models

class TransactionsSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Transaction
        fields='__all__'