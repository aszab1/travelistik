from .common import BoardSerializer
from places.serializers.common import PlaceSerializer

class BoardListSerializer(BoardSerializer):
  places = PlaceSerializer(many=True, read_only=True)