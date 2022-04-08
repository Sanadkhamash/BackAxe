from django.db import models
from  django.contrib.auth.models import User

# Create your models here.

class Category(models.Model):
    name=models.CharField(max_length=50)
    description=models.TextField()
    image = models.CharField(max_length=255, default="https://renault.jo/CountriesData/Jordan_EN/images/conceptcars/renault-concept-car-014_ig_w800_h450.jpg")
    def __str__(self):
        return self.name

class Country(models.Model):
    name= models.CharField(max_length=50)
    def __str__(self):
        return self.name

class Make(models.Model):
    name=models.CharField(max_length=50)
    photo = models.CharField(max_length=255, default="https://images.unsplash.com/photo-1580836618305-605c32623ae0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80")
    country=models.ForeignKey(Country, on_delete=models.CASCADE)
    def __str__(self):
        return self.name

class Product(models.Model):
    name=models.CharField(max_length=50)
    description=models.TextField()
    status=models.IntegerField(default=0)
    price=models.FloatField()
    image=models.CharField(max_length=255)
    quantity=models.IntegerField()
    date=models.DateTimeField(auto_now=True)
    make=models.ForeignKey(Make, on_delete=models.CASCADE)
    category=models.ManyToManyField(Category, null= True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self):
        return self.name

