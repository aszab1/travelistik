from django.urls import path
from .views import PlaceListCreateView, PlaceDetailedView

urlpatterns = [
  path('', PlaceListCreateView.as_view()),
  path('<int:pk>/', PlaceDetailedView.as_view())
]