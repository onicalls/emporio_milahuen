from rest_framework import viewsets
from .serializer import ProductoSerializer
from .models import Producto
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

# Create your views here.
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
class ProductoView(viewsets.ModelViewSet):
    serializer_class = ProductoSerializer
    queryset = Producto.objects.all()