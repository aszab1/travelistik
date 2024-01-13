from django.urls import path
from .views import ReviewCreateView, ReviewDetailedView

urlpatterns = [
    path('', ReviewCreateView.as_view()),
    path('<int:pk>/', ReviewDetailedView.as_view())
]

