import { useMutation, useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";

import {
	getSongs,
	searchSongs,
	getArtists,
	searchArtists,
	getSingleArtist,
	getUserToken,
	createUser,
} from "../api/pesmarica";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [currentSongPage, setCurrentSongPage] = useState(1);
	const [songId, setSongId] = useState();

	const [currentArtistPage, setCurrentArtistPage] = useState(1);
	const [artistId, setArtistId] = useState("");

	const [search, setSearch] = useState("");
	const [hasUserSearched, setHasUserSearched] = useState(false);
	const [artistsOrSongs, setArtistsOrSongs] = useState("");

	const [user, setUser] = useState("");
	const [userToken, setUserToken] = useState("");

	const songs = useQuery({
		queryKey: ["/api/songs/?ordering=-created_at&page=", currentSongPage],
		queryFn: () => getSongs(currentSongPage),
		keepPreviousData: true,
	});

	const searchedSongs = useQuery({
		queryKey: ["api/artists/search-by-author/", search],
		queryFn: () => searchSongs(search),
		enabled: hasUserSearched === true && artistsOrSongs === "songs",
	});

	const artists = useQuery({
		queryKey: ["/api/artists/?ordering=name&page=", currentArtistPage],
		queryFn: () => getArtists(currentArtistPage),
		keepPreviousData: true,
	});

	const searchedArtists = useQuery({
		queryKey: ["api/artists/search-by-author/", search],
		queryFn: () => searchArtists(search),
		enabled: hasUserSearched === true && artistsOrSongs === "artists",
	});

	const singleArtist = useQuery({
		queryKey: ["/api/artists/", artistId, "/songs/"],
		queryFn: () => getSingleArtist(artistId),
		enabled: !!artistId, // This will prevent the query from running if artistId is null or undefined
	});

	const getUserTokenMutation = useMutation({ mutationFn: getUserToken });

	const createUserMutation = useMutation({ mutationFn: createUser });

	return (
		<DataContext.Provider
			value={{
				songs,
				currentSongPage,
				setCurrentSongPage,
				searchedSongs,
				songId,
				setSongId,

				artists,
				currentArtistPage,
				setCurrentArtistPage,
				searchedArtists,
				singleArtist,
				artistId,
				setArtistId,

				search,
				setSearch,
				hasUserSearched,
				setHasUserSearched,
				artistsOrSongs,
				setArtistsOrSongs,

				user,
				setUser,
				userToken,
				setUserToken,
				getUserTokenMutation,
				createUserMutation,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
