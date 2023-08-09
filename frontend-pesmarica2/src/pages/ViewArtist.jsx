import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api/pesmarica.js";
import DataContext from "../context/DataContext.jsx";

const ViewArtist = () => {
	const { singleArtist, setArtistId } = useContext(DataContext);
	const { id } = useParams();
	useEffect(() => {
		setArtistId(id);
	}, []);

	return (
		<>
			<div className="min-h- container mx-auto ">
				{singleArtist.isLoading || singleArtist.isRefetching ? (
					<div>
						<ul className="divide-y divide-slate-100">
							<li className="flex items-start gap-4 rounded-t-2xl bg-slate-300 px-4 py-3">
								<div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
									<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse max-w-[360px] " />
								</div>
							</li>
							{Array.from({ length: 5 }, (_, index) => (
								<div
									key={index}
									className="mb-5 rounded-lg bg-slate-100 px-4 py-6"
								>
									<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse max-w-[360px] " />
								</div>
							))}
						</ul>
					</div>
				) : null}

				{singleArtist.isError && (
					<p className="pt-5 display-3 text-danger">
						{singleArtist.error.message}
					</p>
				)}

				{singleArtist.isSuccess &&
					!singleArtist.isRefetching &&
					singleArtist.data.length === 0 && (
						<h2 className="display-2 text-secondary pt-5">
							No items to display
						</h2>
					)}

				{singleArtist.isSuccess &&
					!singleArtist.isRefetching &&
					singleArtist.data.length > 0 && (
						<ul className="divide-y divide-slate-100">
							<li className="flex items-start gap-4 rounded-t-2xl bg-slate-300 px-4 py-3">
								<div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
									<h4 className="text-lg font-bold uppercase text-slate-700 ">
										{singleArtist.data[0].artist.name}
									</h4>
								</div>
							</li>
							{singleArtist.data.map((song) => (
								<li key={song.id} className="flex items-start gap-4 px-4 py-3">
									<div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
										<h4 className="text-base text-slate-700 ">
											<Link to={`/songs/${song.id}`}>{song.title}</Link>
										</h4>
									</div>
								</li>
							))}
						</ul>
					)}
			</div>
		</>
	);
};

export default ViewArtist;
