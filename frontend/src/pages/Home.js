import "../styles/Home.css";
import {useState, useEffect} from 'react';
import Navbar from "../components/Navbar";
import SongList from "../components/SongList";
const Home = () => {
  const [songs, setSongs] = useState([
    { id: "54", title: "Tisina" },
    { id: "22", title: "Kotor" },
    { id: "12", title: "Hipnotiziran" },
    { id: "66", title: "Mornar" },
    { id: "03", title: "Samac" },
    { id: "64", title: "Zmaj od Nocaja" },
  ]);
  const [topSongs, setTopSongs] = useState([
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
        const response = await fetch("/api/songs/recent");
        const data = await response.json();
        setSongs(data);
      } catch (error) {
        console.error("Error fetching top songs:", error);
      }
    };
    const fetchTopSongs = async () => {
      try {
        const response = await fetch("/api/songs/top");
        const data = await response.json();
        setTopSongs(data);
      } catch (error) {
        console.error("Error fetching top songs:", error);
      }
    };
    fetchSongs();
    fetchTopSongs();
  }, []);

  return (
    <div>
      <div id="first">
        <Navbar />
        <main>
          <section id="hero">
            <h1>Welcome</h1>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              vel molestias doloremque?
            </p>
          </section>
          <SongList title="Top" songs={songs} />
          <SongList title="Recent" songs={topSongs} />
        </main>
      </div>
    </div>
  );
};

export default Home;
