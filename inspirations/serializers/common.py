from rest_framework.serializers import ModelSerializer
from ..models import Inspiration
from places.serializers.common import PlaceSerializer
from reviews.serializers.populated import ReviewListSerializer

class InspirationSerializer(ModelSerializer):
  places = PlaceSerializer(many=True, read_only=True)
  reviews = ReviewListSerializer(many=True, read_only=True)
  class Meta:
    model = Inspiration
    fields = '__all__'


class InspirationGetSerializer(ModelSerializer):
  class Meta:
    model = Inspiration
    fields = '__all__'    

