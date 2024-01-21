from rest_framework.generics import RetrieveUpdateDestroyAPIView, UpdateAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from .models import Inspiration
from .serializers.common import InspirationSerializer, InspirationGetSerializer
from .serializers.populated import InspirationListSerializer
from lib.views import OwnerListCreateView
from lib.permissions import IsOwnerOrReadOnly
from rest_framework.response import Response

# Path: /inspirations/
# Methods: GET, POST

class InspirationListCreateView(OwnerListCreateView):
  queryset = Inspiration.objects.all()
  permission_classes = [IsAuthenticatedOrReadOnly]

  def get_serializer_class(self):
      if self.request.method == 'GET':
        return InspirationGetSerializer
      return InspirationSerializer
  

# Path: /inspirations/:pk/
# Methods: GET, PUT, PATCH, DELETE
class InspirationDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Inspiration.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_serializer_class(self):
      if self.request.method == 'PUT':
        return InspirationSerializer
      else:
        return InspirationListSerializer 

# Path: /inspirations/:pk/like/
# Methods: PUT, PATCH (only use patch)      
class InspirationLikeView(UpdateAPIView):
    queryset = Inspiration.objects.all()
    serializer_class = InspirationSerializer
    permission_classes = [IsAuthenticated]

# Overriding the patch method of a generic view class
    def patch(self, request, *args, **kwargs):
      inspiration = self.get_object()

      if request.user in inspiration.likes.all():
          # user has liked inspiration
          inspiration.likes.remove(request.user)
          inspiration.save()
          return Response(status=204)
      else:
          # user has not liked inspiration
          inspiration.likes.add(request.user)
          inspiration.save()
          return Response(status=201)   

