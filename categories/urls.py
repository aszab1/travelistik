from django.urls import path
from .views import CategoryListCreateView, CategoryDetailedView

urlpatterns = [
  path('', CategoryListCreateView.as_view()),
  path('<int:pk>/', CategoryDetailedView.as_view())
]