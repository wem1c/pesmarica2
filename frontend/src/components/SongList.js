import React, { useState, useEffect } from 'react';

const SongList = (props) => {
  const songs = props.songs 

  return (
    <div>
      <h2>{props.title} Songs</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;