from rest_framework.serializers import ModelSerializer
from ..models import Place
from categories.serializers.common import CategorySerializer
from reviews.serializers.common import ReviewSerializer

class PlaceSerializer(ModelSerializer):
  categories = CategorySerializer(many=True, read_only=True)
  reviews = ReviewSerializer(many=True)
  class Meta:
    model = Place
    fields = '__all__'