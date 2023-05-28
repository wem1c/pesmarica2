from django.db import models

class Song(models.Model):
    title = models.CharField(max_length=100)
    # artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    # album = models.ForeignKey(Album, on_delete=models.CASCADE)
    # genre = models.ForeignKey(Genre, on_delete=models.CASCADE)
    lyrics = models.TextField()

    def __str__(self):
        return self.title
