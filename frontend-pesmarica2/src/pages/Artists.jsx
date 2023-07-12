import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";
import Pagination from "../components/Pagination";
import api from "../api/pesmarica";
import SearchField from "../components/SearchField";
const Artists = () => {
	const {
		artists,
		setArtists,
		numberOfArtistPage,
		setNumberOfArtistPage,
		currentArtistPage,
		setCurrentArtistPage,
	} = useContext(DataContext);

	const [search, setSearch] = useState("");
	const [hasUserSearched, setHasUserSearched] = useState(false);

	const searchArtists = async () => {
		try {
			const response = await api.get(
				`api/artists/search-by-author/${search}/`
			);

			setArtists(response.data);
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
	return (
		<div className="container mx-auto mt-8">
			<SearchField
				search={search}
				setSearch={setSearch}
				funToBeCalled={searchArtists}
			/>

			<ul>
				{artists.map((artist) => (
					<li
						key={artist.id}
						className="mb-5 rounded-lg bg-slate-100 p-4 text-lg capitalize"
					>
						<Link to={`${artist.id}`}>{artist.name}</Link>
					</li>
				))}
			</ul>

			{!hasUserSearched ? (
				<Pagination
					pages={numberOfArtistPage}
					setPages={setNumberOfArtistPage}
					currentPage={currentArtistPage}
					setCurrentPage={setCurrentArtistPage}
				/>
			) : (
				<button
					onClick={() => {
						fetchArtists();
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

export default Artists;
