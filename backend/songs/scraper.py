"""
This script scrapes the songs and artist from the website http://www.pesmarica.rs/ and
saves the data in the database. To run this python file, you have to first install
the dependencies. After that, go to the root folder of the project(backend) in the terminal and then run:

        python3 manage.py shell < songs/scraper.py

Based on how many songs you want to scrape from the website, change the number of pages
you want to scrape in the range() method in line 28 to the number of pages. Beware that it might take a while.

Some things to consider:

Songs from http://www.pesmarica.rs/ do not have information about the song's album, genre and year created,
so the songs in the database will be saved with album and genre as '', and year as 2023. The songs will also
all be owned by the same user with the username and email provided in the line 26.

"""


from bs4 import BeautifulSoup
import requests
from songs.models import Song, Artist
from django.contrib.auth.models import User
import datetime

# default user that creates all the songs. Put the username and email that you created
user = User.objects.get(username='django', email='django@example.com')

for i in range(4):
    if i == 0:
        html_text = requests.get("http://www.pesmarica.rs/").text
    else:
        html_text = requests.get(
            f"http://www.pesmarica.rs/PoslednjePesme/{i}").text
    soup = BeautifulSoup(html_text, 'lxml')

#  all the songs listed in the "Pocetak" page
    elements = soup.select(
        'div[style*="width:720px; padding:0 0.5em 0 0.5em; height: 1.6em; line-height: 1.6em; border-bottom: 1px dashed #ddd;"]')
# for each song
    for element in elements:
        title_element = element.find('a')
        date_element = element.find(
            'span', style='float:right; padding-left:0.5em;font-size:1em; color:#BBBBBB;')

        title = title_element.get_text(strip=True)
        title = title.split(" - ")
        artist_name = title[0]
        song_title = title[1]

        title_link = title_element['href']

        date = date_element.get_text(strip=True)
        date_format = "%d.%m.%Y"
        date_obj = datetime.datetime.strptime(date, date_format).date()

        html_text2 = requests.get(f"http://www.pesmarica.rs{title_link}").text
        soup2 = BeautifulSoup(html_text2, 'lxml')

        if soup2.find("pre") == None:
            continue
        song = soup2.find("pre").text

        artist_exists = Artist.objects.filter(name=artist_name).first()

        if artist_exists:
            artist1 = artist_exists

            song_exitsts = Song.objects.filter(
                title=song_title, artist=artist1).exists()

            if song_exitsts:
                continue

        else:
            artist1 = Artist.objects.create(name=artist_name)

        song = Song.objects.create(
            created_at=date_obj,
            title=song_title,
            album='',
            artist=artist1,
            genre='',
            year=2023,
            lyrics=song,
            owner=user
        )


print('Script finished')
