from .common import PlaceSerializer
from reviews.serializers.common import ReviewSerializer

class PlaceListSerializer(PlaceSerializer):
  reviews = ReviewSerializer(many=True)