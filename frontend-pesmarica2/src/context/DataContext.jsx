import { createContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import api from "../api/pesmarica.js";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [latestSongs, setLatestSongs] = useState([]);
	const [numberOfSongPages, setNumberOfSongPages] = useState([]);
	const [currentSongPage, setCurrentSongPage] = useState(1);

	const [artists, setArtists] = useState([]);
	const [numberOfArtistPage, setNumberOfArtistPage] = useState([]);
	const [currentArtistPage, setCurrentArtistPage] = useState(1);

	const [user, setUser] = useState("");
	const [userToken, setUserToken] = useState("");

	useEffect(() => {
		const fetchLatestSongs = async () => {
			try {
				const response = await api.get(
					`/api/songs/?ordering=-created_at&page=${currentSongPage}`
				);

				const responseData = response.data;
				setNumberOfSongPages(Math.floor(responseData.count / 10) + 1);
				setLatestSongs(responseData.results);
			} catch (err) {
				if (err.response) {
					console.log(err.response.data);
					console.log(err.response.status);
					console.log(err.response.headers);
				} else {
					console.log(`Error: ${err.message}`);
				}
			}
		};
		fetchLatestSongs();
	}, [currentSongPage]);

	useEffect(() => {
		const fetchArtists = async () => {
			try {
				const response = await api.get(
					`/api/artists/?ordering=name&page=${currentArtistPage}`
				);

				const responseData = response.data;
				setNumberOfArtistPage(Math.floor(responseData.count / 10) + 1);
				setArtists(responseData.results);
			} catch (err) {
				if (err.response) {
					console.log(err.response.data);
					console.log(err.response.status);
					console.log(err.response.headers);
				} else {
					console.log(`Error: ${err.message}`);
				}
			}
		};
		fetchArtists();
	}, [currentArtistPage]);

	return (
		<DataContext.Provider
			value={{
				latestSongs,
				setLatestSongs,
				artists,
				setArtists,
				numberOfSongPages,
				setNumberOfSongPages,
				currentSongPage,
				setCurrentSongPage,
				numberOfArtistPage,
				setNumberOfArtistPage,
				currentArtistPage,
				setCurrentArtistPage,
				user,
				setUser,
				userToken,
				setUserToken,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
