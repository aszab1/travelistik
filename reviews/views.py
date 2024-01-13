from rest_framework.generics import RetrieveUpdateDestroyAPIView
from .serializers.common import ReviewSerializer
from .models import Review
from lib.views import OwnerListCreateView
from lib.permissions import IsOwnerOrReadOnly

# Path: /reviews/
# Methods: GET, POST
class ReviewCreateView(OwnerListCreateView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

# Path: /reviews/:pk/
# Method: GET, PUT, PATCH, DELETE
class ReviewDetailedView(RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [IsOwnerOrReadOnly]