from django.db import models
from shop import models as ShopModels
from  django.contrib.auth.models import User as DjangoUser
from rest_framework.authtoken.models import Token

# Create your models here.

class UserInfo(models.Model):
    user_id=models.ForeignKey(DjangoUser, on_delete=models.CASCADE)
    mobile=models.CharField(max_length=12)
    address=models.CharField(max_length=50)
    is_merchant=models.BooleanField(default=False)
    is_banned=models.BooleanField(default=False)
    def __str__(self):
        return self.user_id

class Report(models.Model):
    user=models.ForeignKey(UserInfo, on_delete=models.CASCADE, related_name='user_reported', default=0)
    reported_by=models.ForeignKey(UserInfo,on_delete=models.CASCADE, related_name='reported_by', default=0)
    reports_count=models.IntegerField()
    product=models.ForeignKey(ShopModels.Product,on_delete=models.CASCADE)
    reason=models.TextField()
    def __str__(self):
        return self.user
