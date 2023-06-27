from django.db import models
import datetime


class Artist(models.Model):
    name = models.CharField(max_length=100)
    #songs = models.ManyToManyField('Song', related_name='artists')

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('name',)

class Song(models.Model):
    created_at = models.DateField(default=datetime.date.today)
    title = models.CharField(max_length=100)
    album = models.CharField(max_length=100)
    artist = models.ForeignKey(Artist, related_name='songs', on_delete=models.CASCADE)
    genre = models.CharField(max_length=100)
    year = models.IntegerField()
    lyrics = models.TextField()
    owner = models.ForeignKey('auth.User', related_name='songs', on_delete=models.CASCADE)
    #duration

    class Meta:
        ordering = ('title',)
