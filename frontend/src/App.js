import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BrowseSongs from './pages/BrowseSongs';
import AddNewSong from './pages/AddNewSong';
import Author from './pages/Author';
import Song from './pages/Song';
import Favorites from './pages/Favorites';
import SignUp from './pages/SingUp';
import LogIn from './pages/LogIn';
import PageNotFound from './pages/PageNotFound';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowseSongs />}/>
          <Route path="/addNewSong" element={<AddNewSong />}/>
          <Route path="/author/:authorId" element={<Author />}/>
          <Route path="/song/:songId" element={<Song />}/>
          <Route path="/favorites/:userId" element={<Favorites />}/>
          <Route path="/singUp" element={<SignUp />}/>
          <Route path="/logIn" element={<LogIn />}/>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
