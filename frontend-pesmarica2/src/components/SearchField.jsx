import { useContext } from "react";
import DataContext from "../context/DataContext";

const SearchField = ({ search, setSearch }) => {
	const { setHasUserSearched } = useContext(DataContext);
	return (
		<div className="mb-6 rounded-lg border border-gray-200">
			<div className="relative">
				<input
					type="text"
					className="w-full rounded-lg border-gray-500 p-4 pe-12 text-sm shadow-sm outline-none"
					placeholder="Search"
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
						setHasUserSearched(false);
					}}
				/>
				<button
					onClick={() => {
						setHasUserSearched(true);
					}}
					className="absolute inset-y-0 end-0 grid place-content-center rounded-lg bg-blue-700 px-4 "
				>
					<svg
						viewBox="0 0 24 24"
						className="h-4 w-4 text-white"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M15 15l6 6m-11-4a7 7 0 110-14 7 7 0 010 14z"
							stroke="#FFF"
							strokeWidth={2}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default SearchField;
