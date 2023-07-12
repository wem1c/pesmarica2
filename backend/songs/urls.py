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
    path('artists/search-by-author/<str:author_name>/', views.search_by_author, name='search-by-author'),
    path('artists/<int:artist_id>/songs/', views.artist_songs, name='artist-songs'),

    path('songs/search-by-genre/<str:genre>/', views.search_by_genre, name='search-by-genre'),
    path('songs/search-by-title/<str:title>/', views.search_by_title, name='search-by-title'),
]
