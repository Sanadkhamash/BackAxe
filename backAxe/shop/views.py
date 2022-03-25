from rest_framework import viewsets
from . import models, serializers
from rest_framework.response import Response


# Create your views here.

class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class=serializers.CategorySerializer
    queryset=models.Category.objects.all()

class ProductViewSet(viewsets.ModelViewSet):
    serializer_class=serializers.ProductSerializer
    queryset=models.Product.objects.all()

    def create(self, request, *args, **kwargs):
        data=request.data
        product=models.Product.objects.create(name=data["name"],description=data["description"],price=data["price"],image=data["image"],quantity=data["quantity"])
        for category in data["category"]:
            print(category)
        product.save(category = models.Category.objects.get(id = int(data["category"]["id"])))

        # product.category.add(category_obj)
        serializer = serializers.ProductSerializer(product)
        return Response(serializer.data)

class CountryViewSet(viewsets.ModelViewSet):
    serializer_class=serializers.CountrySerializer
    queryset=models.Country.objects.all()
    
class MakeViewSet(viewsets.ModelViewSet):
    serializer_class=serializers.MakeSerializer
    queryset=models.Make.objects.all()

class GetProdByCat(viewsets.ModelViewSet):
    serializer_class=serializers.ProductSerializer
    queryset=models.Product.objects.all()

    def retrieve(self, request, *args, **kwargs):
        products = models.Product.objects.filter(category=self.kwargs['pk'])
        serializer = serializers.ProductSerializer(instance=products, many=True)
        return Response(serializer.data)     



    
 


    

        