from .common import CategorySerializer
from places.serializers.common import PlaceSerializer

class PopulateCategorySerializer(CategorySerializer):
  places = PlaceSerializer(many=True)