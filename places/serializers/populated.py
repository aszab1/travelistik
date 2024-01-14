from .common import PlaceSerializer
from users.serializers.common import UserSerializer
from reviews.serializers.populated import ReviewListSerializer
from users.serializers.common import UserSerializer


class PlaceListSerializer(PlaceSerializer):
  owner = UserSerializer()
  reviews = ReviewListSerializer(many=True)
  likes = UserSerializer(many=True)