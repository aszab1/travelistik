from rest_framework.serializers import ModelSerializer
from ..models import Inspiration

class InspirationSerializer(ModelSerializer):
  class Meta:
    model = Inspiration
    fields = '__all__'