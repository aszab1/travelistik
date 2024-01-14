from .common import ReviewSerializer
from users.serializers.common import UserSerializer

class ReviewListSerializer(ReviewSerializer):
  owner = UserSerializer()