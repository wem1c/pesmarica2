import React, { useEffect, useState } from "react";
import SongList from "../components/SongList";

const BrowseSongs = () => {
  const [songs, setSongs] = useState([
    { id: "54", title: "Tisina" },
    { id: "22", title: "Kotor" },
    { id: "12", title: "Hipnotiziran" },
    { id: "66", title: "Mornar" },
    { id: "03", title: "Samac" },
    { id: "64", title: "Zmaj od Nocaja" },
  ]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch("/api/songs");
        const data = await response.json();
        setSongs(data);
      } catch (error) {
        console.error("Error fetching top songs:", error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <>
      <div>BrowseSongs</div>
      <SongList title="Browse All" songs = {songs}/>
    </>
  );
};

export default BrowseSongs;
