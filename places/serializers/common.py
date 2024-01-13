from rest_framework.serializers import ModelSerializer
from ..models import Place
from categories.serializers.common import CategorySerializer

class PlaceSerializer(ModelSerializer):
  categories = CategorySerializer(many=True, read_only=True)
  class Meta:
    model = Place
    fields = '__all__'