from rest_framework import serializers

from songs.models import Song


class SongSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Song
        fields = ['title', 'lyrics']
