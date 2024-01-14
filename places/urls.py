from django.urls import path
from .views import PlaceListCreateView, PlaceDetailedView, PlaceLikeView
urlpatterns = [
  path('', PlaceListCreateView.as_view()),
  path('<int:pk>/', PlaceDetailedView.as_view()),
  path('<int:pk>/like/', PlaceLikeView.as_view())
]