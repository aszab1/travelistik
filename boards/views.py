from rest_framework.generics import RetrieveUpdateDestroyAPIView
from .models import Board
from .serializers.common import BoardSerializer
from .serializers.populated import BoardListSerializer
from lib.views import OwnerListCreateView
from lib.permissions import IsOwnerOrReadOnly


# PATH /boards/
# Method: GET, POST
class BoardListCreateView(OwnerListCreateView):
  queryset = Board.objects.all()
  permission_classes = [IsOwnerOrReadOnly]

  def get_serializer_class(self):
    if self.request.method == 'GET':
      return BoardListSerializer
    return BoardSerializer

# PATH /boards/:pk/
# Method: GET, PUT, PATCH, DELETE  
  
class BoardDetailView(RetrieveUpdateDestroyAPIView):
  queryset = Board.objects.all()
  permission_classes = [IsOwnerOrReadOnly]

  def get_serializer_class(self):
    if self.request.method == 'GET':
      return BoardListSerializer
    else:
      return BoardSerializer
    
