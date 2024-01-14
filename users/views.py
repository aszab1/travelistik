from rest_framework.generics import CreateAPIView
from django.contrib.auth.views import LogoutView
from .serializers.common import RegistrationSerializer
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your views here.
class RegisterView(CreateAPIView):
  queryset = User.objects.all()
  serializer_class = RegistrationSerializer

class CustomLogoutView(LogoutView):
  pass  