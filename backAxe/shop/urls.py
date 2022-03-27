from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter
from . import views

app_name='shop'

router=DefaultRouter()
router.register(r'category', views.CategoryViewSet, basename='category')
router.register(r'category/prod', views.GetProdByCat, basename='category')
router.register(r'products', views.ProductViewSet, basename='products')
router.register(r'countries', views.CountryViewSet, basename='countries')
router.register(r'makes', views.MakeViewSet, basename='makes')

urlpatterns = [
    path('',include(router.urls)),
    path(r'product/listsingleuser/<int:id>', views.ListSingleUserProduct.as_view(),name='singleuser'),
    path(r'product/Category/Make/<int:cat_id>/<int:id>', views.ListProductsByCategoryAndMake.as_view(),name='productbymake')
]
