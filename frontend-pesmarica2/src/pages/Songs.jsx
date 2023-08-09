import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";
import Pagination from "../components/Pagination";
import SearchField from "../components/SearchField";
import FetchingStates from "../components/FetchingStates";

const Artists = () => {
	const {
		songs,
		currentSongPage,
		setCurrentSongPage,
		searchedSongs,

		search,
		setSearch,
		hasUserSearched,
		setHasUserSearched,

		setArtistsOrSongs,
	} = useContext(DataContext);

	useEffect(() => {
		setArtistsOrSongs("songs");
		setSearch("");
	}, []);

	if (hasUserSearched) {
		return (
			<div className="container mx-auto mt-8 ">
				<SearchField search={search} setSearch={setSearch} />

				<FetchingStates
					queryResult={searchedSongs}
					queryData={searchedSongs.data}
					skeletonLength={10}
					variantLatest={false}
				/>

				{searchedSongs.isSuccess &&
					!searchedSongs.isRefetching &&
					searchedSongs.data.length > 0 && (
						<div>
							<ul>
								{searchedSongs.data.map((song) => (
									<li
										key={song.id}
										className="p-4 mb-5 text-lg capitalize rounded-lg bg-slate-100"
									>
										<Link to={`${song.id}`}>
											{song.title} - {song.artist.name}
										</Link>
									</li>
								))}
							</ul>

							<button
								onClick={() => {
									setHasUserSearched(false);
									setSearch("");
									setCurrentSongPage(1);
								}}
								className="mt-2 text-blue-700 underline"
							>
								Clear the search
							</button>
						</div>
					)}
			</div>
		);
	} else {
		return (
			<div className="container mx-auto mt-8">
				<SearchField search={search} setSearch={setSearch} />

				<FetchingStates
					queryResult={songs}
					queryData={songs?.data?.results}
					skeletonLength={10}
					variantLatest={false}
				/>

				{songs.isSuccess &&
					!songs.isRefetching &&
					songs.data.results.length > 0 && (
						<div>
							<ul>
								{songs.data.results.map((song) => (
									<li
										key={song.id}
										className="p-4 mb-5 text-lg capitalize rounded-lg bg-slate-100"
									>
										<Link to={`${song.id}`}>
											{song.title} - {song.artist.name}
										</Link>
									</li>
								))}
							</ul>

							<Pagination
								pages={Math.floor(songs.data.count / 10) + 1}
								currentPage={currentSongPage}
								setCurrentPage={setCurrentSongPage}
							/>
						</div>
					)}
			</div>
		);
	}
};

export default Artists;
