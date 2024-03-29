from rest_framework import serializers
from ..models import Board
from places.models import Place
from places.serializers.common import PlaceSerializer

class BoardSerializer(serializers.ModelSerializer):
  class Meta:
    model = Board
    fields = '__all__'

    