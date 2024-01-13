from rest_framework.serializers import ModelSerializer
from ..models import Inspiration
from places.serializers.common import PlaceSerializer

class InspirationSerializer(ModelSerializer):
  places = PlaceSerializer(many=True, read_only=True)
  class Meta:
    model = Inspiration
    fields = '__all__'