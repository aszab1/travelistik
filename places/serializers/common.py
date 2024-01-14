from rest_framework.serializers import ModelSerializer
from ..models import Place
from categories.serializers.common import CategorySerializer
from reviews.serializers.populated import ReviewListSerializer
from users.serializers.common import UserSerializer

class PlaceSerializer(ModelSerializer):
  categories = CategorySerializer(many=True, read_only=True)
  reviews = ReviewListSerializer(many=True, read_only=True)
  likes = UserSerializer(many=True, read_only=True)
  class Meta:
    model = Place
    fields = '__all__'