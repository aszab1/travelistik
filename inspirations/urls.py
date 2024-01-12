from django.urls import path
from .views import InspirationListCreateView

urlpatterns = [
  path('', InspirationListCreateView.as_view())
]