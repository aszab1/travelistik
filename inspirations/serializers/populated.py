from .common import InspirationSerializer
from users.serializers.common import UserSerializer

class InspirationListSerializer(InspirationSerializer):
  owner = UserSerializer()
  likes = UserSerializer(many=True)
