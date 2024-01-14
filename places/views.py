from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, UpdateAPIView
from .models import Place
from lib.views import OwnerListCreateView
from lib.permissions import IsOwnerOrReadOnly
from .serializers.common import PlaceSerializer
from .serializers.populated import PlaceListSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from rest_framework.response import Response

# Path: /places/
# Methods: GET, POST

class PlaceListCreateView(ListCreateAPIView):
  queryset = Place.objects.all()
  serializer_class = PlaceSerializer
  permission_classes = [IsAuthenticatedOrReadOnly]
  

# Path: /places/:pk/
# Method: GET, PUT, PATCH, DELETE

class PlaceDetailedView(RetrieveUpdateDestroyAPIView):
  queryset = Place.objects.all()
  serializer_class = PlaceSerializer
  permission_classes = [IsOwnerOrReadOnly]

  def get_serializer_class(self):
    if self.request.method == 'GET':
      return PlaceListSerializer
    else:
      return PlaceSerializer

# Path: /places/:pk/like/
# Methods: PUT, PATCH (only use patch)      
class PlaceLikeView(UpdateAPIView):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer
    permission_classes = [IsAuthenticated]

# Overriding the patch method of a generic view class
    def patch(self, request, *args, **kwargs):
      place = self.get_object()

      if request.user in place.likes.all():
          # user has liked inspiration
          place.likes.remove(request.user)
          place.save()
          return Response(status=204)
      else:
          # user has not liked inspiration
          place.likes.add(request.user)
          place.save()
          return Response(status=201)   

