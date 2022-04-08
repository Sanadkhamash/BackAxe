from rest_framework import viewsets
from . import models, serializers
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import generics



class CategoryViewSet(viewsets.ModelViewSet):
    
    serializer_class=serializers.CategorySerializer
    queryset=models.Category.objects.all()

class ProductViewSet(viewsets.ModelViewSet):
    serializer_class=serializers.ProductSerializer
    queryset=models.Product.objects.all()
    # permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        data=request.data
        product=models.Product.objects.create(name=data["name"],description=data["description"],price=data["price"],image=data["image"],quantity=data["quantity"], make_id=data['make']['id'], user_id=request.user.id)
        product.save()
        print(data['category'])
        cat = models.Category.objects.get(id = int(data['category']['id']))
        product.category.add(cat)
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

class ListSingleUserProduct(generics.RetrieveAPIView):
    serializer_class = serializers.ProductSerializer
    queryset= models.Product.objects.all()
    permission_classes = [permissions.AllowAny]
    lookup_field="id"
    def get(self, request, *args, **kwargs):
        user_id = kwargs['id']
        print(user_id)
        product = models.Product.objects.filter(user_id=user_id)
        print(product)
        serializer = serializers.ProductSerializer(product, many=True)
        return Response(serializer.data)


class ListAddSingleUserProduct(generics.ListCreateAPIView):

    def create(self, request, *args, **kwargs):
        data=request.data
        user=request.data['userId']
        product=models.Product.objects.create(
            name=data["name"],
            description=data["description"],
            price=data["price"],image=data["image"],
            quantity=data["quantity"],
            make_id=data['make']['id'],
            user_id=user
            )
        product.save()
        cat = models.Category.objects.get(id = int(data['category']['id']))
        product.category.add(cat)
        serializer = serializers.ProductSerializer(product)
        return Response(serializer.data, status=201)

class ListProductsByCategoryAndMake(generics.RetrieveAPIView):
    serializer_class = serializers.ProductSerializer
    queryset= models.Product.objects.all()
    permission_classes = [permissions.AllowAny]
    lookup_field=["id","cat_id"]
    def get(self, request, *args, **kwargs):
        make_id = kwargs['id']
        category_id = kwargs['cat_id']
        print(category_id)
        product = models.Product.objects.filter(category=category_id, make=make_id)
        print(product)
        serializer = serializers.ProductSerializer(product, many=True)
        return Response(serializer.data)


    
 


    

        