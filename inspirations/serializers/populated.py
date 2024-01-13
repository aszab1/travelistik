from .common import InspirationSerializer
from users.serializers.common import UserSerializer
from places.serializers.common import PlaceSerializer
from reviews.serializers.common import ReviewSerializer

class InspirationListSerializer(InspirationSerializer):
  owner = UserSerializer()
  places = PlaceSerializer(many=True)
  likes = UserSerializer(many=True)
  reviews = ReviewSerializer(many=True)


