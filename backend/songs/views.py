from rest_framework import viewsets
from rest_framework import permissions
from songs.models import Song, Artist
from songs.serializers import SongSerializer, ArtistSerializer
from songs.permissions import IsOwnerOrReadOnly
from rest_framework.decorators import  api_view, permission_classes
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework import filters, status


class SongViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows songs to be viewed or edited.
    """
    queryset = Song.objects.all()
    serializer_class = SongSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['title', 'album', 'artist__name', 'genre', 'year' , 'lyrics',  'created_at']
    ordering = ['-title', 'album', 'artist__name', 'genre', 'year',  'lyrics', 'created_at']

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class ArtistViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows songs to be viewed or edited.
    """
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['name']
    ordering = ['-name']


@api_view(['GET'])
def filter_artists(request: Request, letter: str) -> Response:
    queryset = Artist.objects.filter(name__istartswith=letter)
    serializer = ArtistSerializer(queryset, many=True, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def search_by_genre(request: Request, genre: str) -> Response:
    queryset = Song.objects.filter(genre__icontains=genre)
    serializer = SongSerializer(queryset, many=True, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def search_by_author(request: Request, author_name: str) -> Response:
    queryset = Artist.objects.filter(name__icontains=author_name)
    serializer = ArtistSerializer(queryset, many=True, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def artist_songs(request: Request, artist_id: int) -> Response:
    try:
        artist = Artist.objects.get(pk=artist_id)
    except Artist.DoesNotExist:
        return Response({"message": "Artist not found"}, status=status.HTTP_404_NOT_FOUND)

    songs = artist.songs.all()
    serializer = SongSerializer(songs, many=True, context={'request': request})
    return Response(serializer.data)


@api_view(['GET'])
def search_by_title(request: Request, title: str) -> Response:
    queryset = Song.objects.filter(title__icontains=title)
    serializer = SongSerializer(queryset, many=True, context={'request': request})
    return Response(serializer.data)
