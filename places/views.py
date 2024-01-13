from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Place
from lib.views import OwnerListCreateView
from lib.permissions import IsOwnerOrReadOnly
from .serializers.common import PlaceSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly

# Path: /places/
# Methods: GET, POST

class PlaceListCreateView(ListCreateAPIView):
  queryset = Place.objects.all()
  serializer_class = PlaceSerializer
  permission_classes = [IsAuthenticatedOrReadOnly]
  

# Path: /places/id
# Method: GET, PUT, PATCH, DELETE

class PlaceDetailedView(RetrieveUpdateDestroyAPIView):
  queryset = Place.objects.all()
  serializer_class = PlaceSerializer
  permission_classes = [IsOwnerOrReadOnly]


