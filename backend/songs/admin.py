from django.contrib import admin

from songs.models import Song

class SongAdmin(admin.ModelAdmin):
    list_display = ('title',)
    search_fields = ('title',)

admin.site.register(Song, SongAdmin)
