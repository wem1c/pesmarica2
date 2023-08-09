import { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api/pesmarica.js";
import AChordImage from "../images/chords/A.png";
import A7ChordImage from "../images/chords/A7.png";
import AmChordImage from "../images/chords/Am.png";
import BChordImage from "../images/chords/B.png";
import CChordImage from "../images/chords/C.png";
import C7ChordImage from "../images/chords/C7.png";
import CmChordImage from "../images/chords/Cm.png";
import DChordImage from "../images/chords/D.png";
import D7ChordImage from "../images/chords/D7.png";
import DmChordImage from "../images/chords/Dm.png";
import EChordImage from "../images/chords/E.png";
import E7ChordImage from "../images/chords/E7.png";
import EbChordImage from "../images/chords/Eb.png";
import EmChordImage from "../images/chords/Em.png";
import FChordImage from "../images/chords/F.png";
import F7ChordImage from "../images/chords/F7.png";
import FmChordImage from "../images/chords/Fm.png";
import GChordImage from "../images/chords/G.png";
import G7ChordImage from "../images/chords/G7.png";
import GmChordImage from "../images/chords/Gm.png";
import BlankChordImage from "../images/chords/BlankChord.png";
import parse from "html-react-parser";

const ViewSong = () => {
	const chordImages = {
		A: AChordImage,
		A7: A7ChordImage,
		Am: AmChordImage,
		B: BChordImage,
		C: CChordImage,
		C7: C7ChordImage,
		Cm: CmChordImage,
		D: DChordImage,
		D7: D7ChordImage,
		Dm: DmChordImage,
		E: EChordImage,
		E7: E7ChordImage,
		Eb: EbChordImage,
		Em: EmChordImage,
		F: FChordImage,
		F7: F7ChordImage,
		Fm: FmChordImage,
		G: GChordImage,
		G7: G7ChordImage,
		Gm: GmChordImage,
	};

	const { id } = useParams();
	const [song, setSong] = useState("");
	const [artistName, setArtistName] = useState("");
	const [artistID, setArtistID] = useState("");
	const [lyrics, setLyrics] = useState("");

	const lyricsRef = useRef(null);
	const [hoveredChord, setHoveredChord] = useState(null);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const handleMouseEnter = (chord, event) => {
		setHoveredChord(chord);
		setMousePosition({ x: event.clientX, y: event.clientY });
	};

	const handleMouseLeave = () => {
		setHoveredChord(null);
	};

	useEffect(() => {
		const fetchSong = async () => {
			try {
				const response = await api.get(`/api/songs/${id}/`);
				setSong(response.data);
				setArtistName(response.data.artist.name);
				setArtistID(response.data.artist.id);

				const parsedLyrics = parse(response.data.lyrics, {
					replace: (domNode) => {
						if (domNode.type === "tag" && domNode.name === "span") {
							const chord = domNode.children[0].data;
							return (
								<span
									className="chords"
									onMouseEnter={(e) => handleMouseEnter(chord, e)}
									onMouseLeave={handleMouseLeave}
								>
									{domNode.children[0].data}
								</span>
							);
						}
					},
				});

				setLyrics(parsedLyrics);
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
		const chordSpans = lyricsRef.current.querySelectorAll(".chords");

		const onMouseEnterHandler = (chord) => {
			setHoveredChord(chord);
		};

		const onMouseLeaveHandler = () => {
			setHoveredChord(null);
		};

		chordSpans.forEach((span) => {
			const chord = span.textContent;
			span.addEventListener("mouseenter", () => onMouseEnterHandler(chord));
			span.addEventListener("mouseleave", onMouseLeaveHandler);
		});

		return () => {
			chordSpans.forEach((span) => {
				const chord = span.textContent;
				span.removeEventListener("mouseenter", () =>
					onMouseEnterHandler(chord)
				);
				span.removeEventListener("mouseleave", onMouseLeaveHandler);
			});
		};
	}, [lyrics]);

	return (
		<>
			<div className="container mx-auto  ">
				<div className="mb-4 grid grid-cols-4 items-center gap-4 rounded-lg bg-slate-100 p-5">
					<p className="col-span-2 text-lg font-bold md:col-span-1">Artist</p>
					<Link
						to={`/artists/${artistID}`}
						className="col-span-2 underline underline-offset-4 hover:text-indigo-600 md:col-span-3"
					>
						{artistName}
					</Link>
				</div>

				<div className="mb-4 grid grid-cols-4 items-center gap-4 rounded-lg bg-slate-100 p-5 ">
					<p className="col-span-2 text-lg font-bold md:col-span-1">
						Song name
					</p>
					<p className="col-span-2 md:col-span-3"> {song.title}</p>
				</div>

				<div className="mb-4 grid grid-cols-4 items-center gap-4 rounded-lg bg-slate-100 p-5 ">
					<p className="col-span-2 text-lg font-bold md:col-span-1">
						Year of release
					</p>
					<p className="col-span-2 md:col-span-3"> {song.year}</p>
				</div>

				<div className="mb-4 grid grid-cols-4 items-center gap-4 rounded-lg bg-slate-100 p-5 ">
					<p className="col-span-2 text-lg font-bold md:col-span-1">User</p>
					<p className="col-span-2 md:col-span-3"> {song.owner}</p>
				</div>

				<div className="mb-4 grid grid-cols-4 items-center gap-4 rounded-lg bg-slate-100 p-5 ">
					<p className="col-span-2 text-lg font-bold md:col-span-1">
						Date created
					</p>
					<p className="col-span-2 md:col-span-3"> {song.created_at}</p>
				</div>

				{/* {hoveredChord && (
					<div className="chord-image-card">
						<img
							src={chordImages[hoveredChord] || BlankChordImage}
							alt={hoveredChord}
						/>
					</div>
				)} */}

				{/* <div className="whitespace-pre-wrap font-mono [&>span]:text-blue-400">
					{lyrics}
				</div> */}

				<div className="rounded-lg bg-slate-100 p-5">
					<p className="text-lg font-bold mb-6">Lyrics</p>
					<div
						ref={lyricsRef}
						className="overflow-x-scroll whitespace-pre-wrap font-mono [&>span]:text-blue-400"
						onMouseMove={(e) =>
							setMousePosition({ x: e.clientX, y: e.clientY })
						}
					>
						{lyrics}
					</div>{" "}
				</div>

				{hoveredChord && (
					<div
						className="chord-image-card"
						style={{
							position: "fixed",
							top: mousePosition.y + "px",
							left: mousePosition.x + "px",
							width: "150px",
							height: "150px",
						}}
					>
						<img
							src={chordImages[hoveredChord] || BlankChordImage}
							alt={hoveredChord}
							style={{ width: "100%", height: "100%" }}
						/>
					</div>
				)}
			</div>
		</>
	);
};

export default ViewSong;
