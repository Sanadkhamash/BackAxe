from django.shortcuts import render
from . import serializers, models
from rest_framework import viewsets
from rest_framework.response import Response
from  django.contrib.auth.models import User as DjangoUser
from shop.models import Product
from shop.serializers import ProductSerializer
from users.serializers import UserSerializer
from django.forms.models import model_to_dict

# Create your views here.

class TransactionsViewSet(viewsets.ModelViewSet):
    serializer_class=serializers.TransactionsSerializer
    queryset=models.Transaction.objects.all()

    def create(self,request,*args,**kwargs):
        data=request.data
        print(data)

        buyer=request.data['buyer']
        product=request.data['product']
        print(buyer)
        trans=models.Transaction.objects.create(
            buyer_id= buyer, product_id=product
            )
        trans.save()
        serializer = serializers.TransactionsSerializer(trans)
        return Response(serializer.data, status=201)

