from .common import InspirationSerializer
from users.serializers.common import UserSerializer
from places.serializers.common import PlaceSerializer

class InspirationListSerializer(InspirationSerializer):
  owner = UserSerializer()
  places = PlaceSerializer(many=True)
  likes = UserSerializer(many=True)


