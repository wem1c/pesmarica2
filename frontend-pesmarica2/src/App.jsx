import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Artists from "./pages/Artists";
import Home from "./pages/Home";
import ViewArtist from "./pages/ViewArtist";
import Songs from "./pages/Songs";
import ViewSong from "./pages/ViewSong";
import About from "./pages/About";
import Missing from "./pages/Missing";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import AddSong from "./pages/AddSong";
import Profile from "./pages/Profile";

import { DataProvider } from "./context/DataContext";

const App = () => {
	return (
		<>
			<DataProvider>
				<Navbar />
				<div className="h-20"></div>
				<Routes>
					<Route index path="/" element={<Home />} />
					<Route path="/artists" element={<Artists />} />
					<Route path="/artists/:id" element={<ViewArtist />} />
					<Route path="/songs" element={<Songs />} />
					<Route path="/songs/:id" element={<ViewSong />} />
					<Route path="/about" element={<About />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/add-song" element={<AddSong />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="*" element={<Missing />} />
				</Routes>
				<Footer />
			</DataProvider>
		</>
	);
};

export default App;
