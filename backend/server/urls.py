from django.urls import path
from . import views

urlpatterns = [
  path('server/next_stops', views.get_suggestions)
]