from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Category
from lib.views import OwnerListCreateView
from lib.permissions import IsOwnerOrReadOnly
from .serializers.common import CategorySerializer
from .serializers.populated import PopulateCategorySerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly

# Path: /places/
# Methods: GET, POST

class CategoryListCreateView(ListCreateAPIView):
  queryset = Category.objects.all()
  serializer_class = CategorySerializer
  permission_classes = [IsAuthenticatedOrReadOnly]
  

# Path: /places/id
# Method: GET, PUT, PATCH, DELETE

class CategoryDetailedView(RetrieveUpdateDestroyAPIView):
  queryset = Category.objects.all()
  permission_classes = [IsOwnerOrReadOnly]

  def get_serializer_class(self):
    if self.request.method == 'GET':
      return PopulateCategorySerializer
    return CategorySerializer
    