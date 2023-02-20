from django.urls import path
from . import views

urlpatterns = [
  path('next_stops/', views.get_suggestions),
  path('search/', views.search, name='search')
]