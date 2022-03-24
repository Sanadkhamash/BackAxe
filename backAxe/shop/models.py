from django.db import models
from django.forms import CharField

# Create your models here.

class Category(models.Model):
    name=models.CharField(max_length=50)
    description=models.TextField()
    def __str__(self):
        return self.name

class Country(models.Model):
    name= models.CharField(max_length=50)
    def __str__(self):
        return self.name

class Make(models.Model):
    name=models.CharField(max_length=50)
    country=models.ForeignKey(Country, on_delete=models.CASCADE)
    def __str__(self):
        return self.name

class Product(models.Model):
    name=models.CharField(max_length=50)
    description=models.TextField()
    status=models.IntegerField()
    price=models.FloatField()
    image=models.CharField(max_length=255)
    quantity=models.IntegerField()
    date=models.DateTimeField(auto_now=True)
    make=models.ForeignKey(Make, on_delete=models.CASCADE)
    category=models.ManyToManyField(Category)
    def __str__(self):
        return self.name

