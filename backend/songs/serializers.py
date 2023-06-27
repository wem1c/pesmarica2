from rest_framework import serializers
from django.contrib.auth.models import User
from songs.models import Song, Artist


class SongSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Song
        fields = ['url', 'id', 'created_at' ,'title', 'album', 'artist', 'genre', 'year', 'lyrics', 'owner']

class ArtistSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Artist
        fields = ['url', 'id', 'name', 'songs']
