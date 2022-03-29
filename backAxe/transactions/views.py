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
        transaction = request.data
        buyer = DjangoUser.objects.get(id=transaction["buyer"]) 
        seller=DjangoUser.objects.get(id=transaction["seller"]) 
        product=Product.objects.get(id=transaction["product"]) ,
        b=UserSerializer(buyer)
        s=UserSerializer(seller)
        p=ProductSerializer(product)
        pro = model_to_dict(product)
        print(pro)
        
        trans = models.Transaction(
            buyer=buyer,
            seller=seller,
            product=pro,
        )
        trans.save()
        serializer = serializers.TransactionsSerializer(trans)
        print(serializer.data)
        return(Response(serializer.data))

