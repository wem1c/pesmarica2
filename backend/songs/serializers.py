from rest_framework import serializers
from django.contrib.auth.models import User
from songs.models import Song, Artist


class SongSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    artist = serializers.SerializerMethodField()

    class Meta:
        model = Song
        fields = ['url', 'id', 'created_at', 'title', 'album',
                  'artist', 'genre', 'year', 'lyrics', 'owner']

    def get_artist(self, obj):
        return {
            'id': obj.artist.id,
            'name': obj.artist.name
        }


class ArtistSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Artist
        fields = ['url', 'id', 'name', 'songs']
