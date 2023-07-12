import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";

const AddSong = () => {
	const [songTitle, setSongTitle] = useState("");
	const [password, setPassword] = useState("");
	const { setUserToken, userToken, setUser } = useContext(DataContext);
	const navigate = useNavigate();

	const handleSubmit = () => {};
	// {
	// 	"url": "http://127.0.0.1:8000/api/songs/971/",
	// 	"id": 971,
	// 	"created_at": "2023-06-16",
	// 	"title": "Сношти сакав да ти дојдам",
	// 	"album": "",
	// 	"artist": {
	// 		"id": 661,
	// 		"name": "Makedonske Pesme"
	// 	},
	// 	"genre": "",
	// 	"year": 2023,
	// 	"lyrics": "",
	// 	"owner": "django"
	// }
	return (
		<div className="container mx-auto max-w-screen-md ">
			<h2 className="mt-6 text-3xl font-extrabold text-neutral-600">
				Add Song
			</h2>

			<form onSubmit={handleSubmit} className="mt-10 space-y-6">
				<div className="space-y-3">
					<label
						htmlFor="songTitle"
						className="block text-base font-medium text-neutral-600"
					>
						Song Title
					</label>
					<div className="mt-1">
						<input
							id="songTitle"
							name="songTitle"
							type="text"
							required
							placeholder="Song Title"
							className="block w-full transform rounded-lg border border-transparent bg-gray-50 px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
							value={songTitle}
							onChange={(e) => {
								setSongTitle(e.target.value);
							}}
						/>
					</div>
				</div>
				<div className="space-y-3">
					<label
						htmlFor="HeadlineAct"
						className="block text-sm font-medium text-gray-900"
					>
						Artist
					</label>

					<div className="relative mt-1.5">
						<input
							type="text"
							list="HeadlineActArtist"
							id="HeadlineAct"
							className="w-full rounded-lg border-gray-300 pe-10 text-gray-700 sm:text-sm [&::-webkit-calendar-picker-indicator]:opacity-0"
							placeholder="Please select"
						/>

						<span className="absolute inset-y-0 end-0 flex w-8 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="h-5 w-5 text-gray-500"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
								/>
							</svg>
						</span>
					</div>

					<datalist name="HeadlineAct" id="HeadlineActArtist">
						<option value="JM">John Mayer</option>
						<option value="SRV">Stevie Ray Vaughn</option>
						<option value="JH">Jimi Hendrix</option>
						<option value="BBK">B.B King</option>
						<option value="AK">Albert King</option>
						<option value="BG">Buddy Guy</option>
						<option value="EC">Eric Clapton</option>
					</datalist>
				</div>

				<div className="space-y-3">
					<label
						htmlFor="songTitle"
						className="block text-base font-medium text-neutral-600"
					>
						Year
					</label>
					<div className="mt-1">
						<input
							id="songTitle"
							name="songTitle"
							type="text"
							required
							placeholder="Song Title"
							className="block w-full transform rounded-lg border border-transparent bg-gray-50 px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
							value={songTitle}
							onChange={(e) => {
								setSongTitle(e.target.value);
							}}
						/>
					</div>
				</div>

				<div className="space-y-3">
					<label
						htmlFor="lyrics"
						className="block text-base font-medium text-neutral-600"
					>
						Lyrics
					</label>
					<textarea
						placeholder=""
						required
						className="block min-h-[75vh] w-full transform rounded-lg border border-transparent bg-gray-50 px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
						defaultValue={""}
					/>
				</div>

				<div>
					<button
						type="submit"
						className="flex w-60 transform items-center justify-center rounded-xl bg-blue-600 px-10 py-4 text-center text-base font-medium text-white transition duration-500 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddSong;
