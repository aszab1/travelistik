from django.urls import path
from .views import InspirationListCreateView, InspirationDetailView, InspirationLikeView

urlpatterns = [
  path('', InspirationListCreateView.as_view()),
  path('<int:pk>/', InspirationDetailView.as_view()),
  path('<int:pk>/like/', InspirationLikeView.as_view())
]
