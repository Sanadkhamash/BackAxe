from email.policy import default
from django.db import models
from django.forms import IntegerField
from  django.contrib.auth.models import User as authUser
from shop import models as ShopModels

# Create your models here.


class Transaction(models.Model):
    buyer=models.ForeignKey(authUser, on_delete=models.CASCADE, default=1)
    product=models.ForeignKey(ShopModels.Product, on_delete=models.CASCADE, default=1)
    date=models.DateField(auto_now=True)
    time=models.TimeField(auto_now=True)
    status=models.IntegerField(default=0)
    def __str__(self):
        return self.product
