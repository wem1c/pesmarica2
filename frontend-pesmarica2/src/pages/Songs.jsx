import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";
import Pagination from "../components/Pagination";
import SearchField from "../components/SearchField";
import api from "../api/pesmarica";
const Songs = () => {
	const {
		latestSongs,
		setLatestSongs,
		numberOfSongPages,
		setNumberOfSongPages,
		currentSongPage,
		setCurrentSongPage,
	} = useContext(DataContext);

	const [search, setSearch] = useState("");
	const [hasUserSearched, setHasUserSearched] = useState(false);

	const searchSongs = async () => {
		try {
			const response = await api.get(
				`api/songs/search-by-title/${search}/`
			);

			setLatestSongs(response.data);
			setHasUserSearched(true);
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

	const fetchSongs = async () => {
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

	return (
		<div className="container mx-auto mt-8">
			<SearchField
				search={search}
				setSearch={setSearch}
				funToBeCalled={searchSongs}
			/>

			<ul>
				{latestSongs.map((song) => (
					<li
						key={song.id}
						className="mb-5 rounded-lg bg-slate-100 p-4 text-lg capitalize"
					>
						<Link to={`${song.id}`}>
							{song.title} - {song.artist.name}
						</Link>
					</li>
				))}
			</ul>

			{!hasUserSearched ? (
				<Pagination
					pages={numberOfSongPages}
					setPages={setNumberOfSongPages}
					currentPage={currentSongPage}
					setCurrentPage={setCurrentSongPage}
				/>
			) : (
				<button
					onClick={() => {
						fetchSongs();
						setHasUserSearched(false);
						setSearch("");
					}}
					className="mt-2 text-blue-700 underline"
				>
					Clear the search
				</button>
			)}
		</div>
	);
};

export default Songs;
