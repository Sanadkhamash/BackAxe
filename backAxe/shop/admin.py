from django.contrib import admin
from . import models

# Register your models here.

admin.site.register(models.Category)
admin.site.register(models.Country)
admin.site.register(models.Make)
admin.site.register(models.Product)


