import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";
import Pagination from "../components/Pagination";
import SearchField from "../components/SearchField";
import FetchingStates from "../components/FetchingStates";

const Artists = () => {
	const {
		artists,
		currentArtistPage,
		setCurrentArtistPage,
		search,
		setSearch,
		hasUserSearched,
		setHasUserSearched,
		searchedArtists,
		setArtistsOrSongs,
	} = useContext(DataContext);

	useEffect(() => {
		setArtistsOrSongs("artists");
		setSearch("");
	}, []);

	if (hasUserSearched) {
		return (
			<div className="container mx-auto mt-8">
				<SearchField search={search} setSearch={setSearch} />

				<FetchingStates
					queryResult={searchedArtists}
					queryData={searchedArtists.data}
					skeletonLength={10}
					variantLatest={false}
				/>

				{searchedArtists.isSuccess &&
					!searchedArtists.isRefetching &&
					searchedArtists.data.length > 0 && (
						<div>
							<ul>
								{searchedArtists.data.map((artist) => (
									<li
										key={artist.id}
										className="p-4 mb-5 text-lg capitalize rounded-lg bg-slate-100"
									>
										<Link to={`${artist.id}`}>{artist.name}</Link>
									</li>
								))}
							</ul>

							<button
								onClick={() => {
									setHasUserSearched(false);
									setSearch("");
									setCurrentArtistPage(1);
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
					queryResult={artists}
					queryData={artists?.data?.results}
					skeletonLength={10}
					variantLatest={false}
				/>

				{artists.isSuccess &&
				!artists.isRefetching &&
				artists.data.results.length > 0 ? (
					<div>
						<ul>
							{artists.data.results.map((artist) => (
								<li
									key={artist.id}
									className="p-4 mb-5 text-lg capitalize rounded-lg bg-slate-100"
								>
									<Link to={`${artist.id}`}>{artist.name}</Link>
								</li>
							))}
						</ul>

						<Pagination
							artists={artists}
							pages={Math.floor(artists.data.count / 10) + 1}
							currentPage={currentArtistPage}
							setCurrentPage={setCurrentArtistPage}
						/>
					</div>
				) : null}
			</div>
		);
	}
};

export default Artists;
