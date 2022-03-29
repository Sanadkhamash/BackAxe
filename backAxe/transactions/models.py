from email.policy import default
from django.db import models
from django.forms import IntegerField
from users import models as UserModels
from shop import models as ShopModels

# Create your models here.


class Transaction(models.Model):
    buyer=models.ForeignKey(UserModels.DjangoUser, on_delete=models.CASCADE, related_name='buyer')
    seller=models.ForeignKey(UserModels.DjangoUser, on_delete=models.CASCADE, related_name='seller')
    product=models.OneToOneField(ShopModels.Product, on_delete=models.CASCADE, default=0)
    date=models.DateField(auto_now=True)
    time=models.TimeField(auto_now=True)
    status=models.IntegerField(default=0)
    def __str__(self):
        return self.product
