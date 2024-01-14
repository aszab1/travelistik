from django.urls import path
from .views import BoardListCreateView, BoardDetailView

urlpatterns = [
  path('', BoardListCreateView.as_view()),
  path('<int:pk>/', BoardDetailView.as_view())
]