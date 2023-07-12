import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";
const LatestSongsList = () => {
	const { latestSongs } = useContext(DataContext);

	return (
		<>
			<ul className="divide-y divide-slate-100">
				<li className="flex items-start gap-4 rounded-t-2xl bg-slate-300 px-4 py-3">
					<div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
						<h4 className="text-lg font-bold uppercase text-slate-700 ">
							Latest
						</h4>
					</div>
				</li>
				{latestSongs.map((song) => (
					<li
						key={song.id}
						className="flex items-start gap-4 px-4 py-3"
					>
						<div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
							<h4 className="text-base text-slate-700 ">
								<Link to={`songs/${song.id}`}>
									{song.title} - {song.artist.name}
								</Link>
							</h4>
						</div>
					</li>
				))}

				<li className="flex items-start gap-4 px-4 py-3">
					<div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
						<h4 className="text-base text-slate-700 ">
							<Link
								to="songs/"
								className="mx-auto mt-8 text-sm font-semibold text-blue-600 hover:text-neutral-600"
								title="view more"
							>
								View more songs »
							</Link>
						</h4>
					</div>
				</li>
			</ul>
		</>
	);
};

export default LatestSongsList;
