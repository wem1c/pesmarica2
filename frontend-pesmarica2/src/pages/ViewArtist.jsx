import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api/pesmarica.js";

const ViewArtist = () => {
	const { id } = useParams();
	const [artist, setArtist] = useState("");
	const [artistSongs, setArtistSongs] = useState([]);

	useEffect(() => {
		const fetchSong = async () => {
			try {
				const response = await api.get(`/api/artists/${id}/songs/`);
				setArtistSongs(response.data);
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

		fetchSong();
	}, [id]);

	useEffect(() => {
		if (artistSongs.length > 0) {
			const firstSong = artistSongs[0];
			setArtist(firstSong.artist.name);
		}
	}, [artistSongs]);
	return (
		<>
			<div className="min-h- container mx-auto ">
				<ul className="divide-y divide-slate-100">
					<li className="flex items-start gap-4 rounded-t-2xl bg-slate-300 px-4 py-3">
						<div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
							<h4 className="text-lg font-bold uppercase text-slate-700 ">
								{artist}
							</h4>
						</div>
					</li>
					{artistSongs.map((song) => (
						<li
							key={song.id}
							className="flex items-start gap-4 px-4 py-3"
						>
							<div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
								<h4 className="text-base text-slate-700 ">
									<Link to={`/songs/${song.id}`}>
										{song.title}
									</Link>
								</h4>
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default ViewArtist;
