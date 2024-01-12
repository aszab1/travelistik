from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Inspiration
from .serializers.common import InspirationSerializer
from .serializers.populated import InspirationListSerializer

# Path: /inspirations/
# Methods: GET, POST

class InspirationListCreateView(ListCreateAPIView):
  queryset = Inspiration.objects.all()
  serializer_class = InspirationSerializer
  permission_classes = [IsAuthenticatedOrReadOnly]

  def get_serializer_class(self):
      if self.request.method == 'GET':
        return InspirationListSerializer
      return InspirationSerializer
      
