from rest_framework import viewsets
from rest_framework import permissions
from songs.models import Song, Artist
from songs.serializers import SongSerializer, ArtistSerializer
from songs.permissions import IsOwnerOrReadOnly
from rest_framework.decorators import  api_view, permission_classes
from rest_framework.response import Response
from rest_framework.request import Request


class SongViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows songs to be viewed or edited.
    """
    queryset = Song.objects.all()
    serializer_class = SongSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class ArtistViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows songs to be viewed or edited.
    """
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


@api_view(['GET'])
def filter_artists(request: Request, letter: str) -> Response:
    queryset = Artist.objects.filter(name__istartswith=letter)
    serializer = ArtistSerializer(queryset, many=True, context={'request': request})
    return Response(serializer.data)
