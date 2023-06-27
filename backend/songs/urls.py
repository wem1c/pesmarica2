from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter
from rest_framework.schemas import get_schema_view
from . import views


router = DefaultRouter()
router.register(r'songs', views.SongViewSet)
router.register(r'artists', views.ArtistViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('artists/filter-by-letter/<str:letter>/', views.filter_artists, name='filtered-artists'),
]
