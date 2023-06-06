from django.db import models


class Artist(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('name',)

class Song(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100)
    album = models.CharField(max_length=100)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    genre = models.CharField(max_length=100)
    year = models.IntegerField()
    lyrics = models.TextField()
    #duration
