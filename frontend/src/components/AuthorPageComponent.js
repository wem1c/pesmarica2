//import React, { useState, useEffect } from 'react';

/*const AuthorPageComponent = ({ author }) => {
  //const [songs, setSongs] = useState([]);
  //const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [songs, setSongs] = useState([{"id": "54", "author": "Bajaga", "title":"Tisina"},{"id": "22","author": "Galija", "title":"Kotor"},{"id": "12","author": "Van Gogh", "title":"Hipnotiziran"},{"id": "66","author": "YU Grupa", "title":"Mornar"},{"id": "03", "author": "Brkovi", "title":"Samac"},{"id": "64", "author": "Bajaga", "title":"Zmaj od Nocaja"}]);  
  const [selectedAuthor, setSelectedAuthor] = useState[{"name": "Bajaga", "songs": ["Tisina","Zmaj od Nocaja"]}];

  /*useEffect(() => {
    const fetchSongsByAuthor = async () => {
      try {
        const response = await fetch(`/api/songs?author=${author}`);
        const data = await response.json();
        setSongs(data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongsByAuthor();
  }, [author]);

  const handleAuthorClick = (author) => {
    setSelectedAuthor(author);
  };

  const renderAuthorPage = () => {
    if (selectedAuthor) {
      return (
        <div>
          <h2>{selectedAuthor.name}</h2>
          <img src={selectedAuthor.image} alt={selectedAuthor.name} />
          <ul>
            {selectedAuthor.songs.map((song) => (
              <li key={song.id}>{song.title}</li>
            ))}
          </ul>
          <button onClick={() => setSelectedAuthor(null)}>Go Back</button>
        </div>
      );
    } else {
      return (
        <div>
          <h2>All Authors</h2>
          <ul>
            {songs.map((song) => (
              <li
                key={song.author.id}
                onClick={() => handleAuthorClick(song.author)}
              >
                {song.author.name}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return <div>{renderAuthorPage()}</div>;
};

export default AuthorPageComponent;*/

import React, { useState } from 'react';

const AuthorPageComponent = () => {
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const authors = [
    { id: 1, name: 'Bajaga', image: 'author1.jpg' },
    { id: 2, name: 'Van Gogh', image: 'author2.jpg' },
    { id: 3, name: 'Galija', image: 'author3.jpg' },
  ];

  const songs = [
    { id: 1, title: 'Tisina', authorId: 1 },
    { id: 2, title: 'Zmaj od Nocaja', authorId: 1 },
    { id: 3, title: 'Hipnotiziran', authorId: 2 },
    { id: 4, title: 'Mama', authorId: 2 },
    { id: 5, title: 'Kotor', authorId: 3 },
  ];

  const handleAuthorClick = (author) => {
    setSelectedAuthor(author);
  };

  const renderAuthorPage = () => {
    if (selectedAuthor) {
      const authorSongs = songs.filter(
        (song) => song.authorId === selectedAuthor.id
      );

      return (
        <div>
          <h2>{selectedAuthor.name}</h2>
          <img src={selectedAuthor.image} alt={selectedAuthor.name} />
          <h3>Songs:</h3>
          <ul>
            {authorSongs.map((song) => (
              <li key={song.id}>{song.title}</li>
            ))}
          </ul>
          <button onClick={() => setSelectedAuthor(null)}>Go Back</button>
        </div>
      );
    } else {
      return (
        <div>
          <h2>All Authors</h2>
          <ul>
            {authors.map((author) => (
              <li
                key={author.id}
                onClick={() => handleAuthorClick(author)}
              >
                {author.name}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return <div>{renderAuthorPage()}</div>;
};

export default AuthorPageComponent;