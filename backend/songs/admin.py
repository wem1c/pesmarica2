from django.contrib import admin

from songs.models import Song, Artist


class SongAdmin(admin.ModelAdmin):
    list_display = ('title', 'artist')
    search_fields = ('title','artist__name')

class ArtistAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

admin.site.register(Song, SongAdmin)
admin.site.register(Artist, ArtistAdmin)
