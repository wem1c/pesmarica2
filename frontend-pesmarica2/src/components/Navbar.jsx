import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";
import UserDropdown from "./UserDropdown";
const Navbar = () => {
	const [state, setState] = useState(false);
	const { setCurrentSongPage, userToken, user } = useContext(DataContext);

	const navigation = [
		{ title: "Home", path: "/" },
		{ title: "Artists", path: "/artists" },
		{ title: "Songs", path: "/songs" },
		{ title: "About", path: "/about" },
	];

	const toggleNavbar = () => {
		setState(!state);
	};

	const closeNavbar = () => {
		setState(false);
	};

	const handleLinkClick = (item) => {
		if (state) {
			closeNavbar();
		}

		if (item.title === "Home") {
			setCurrentSongPage(1);
		}
	};

	return (
		<nav className=" fixed z-50  w-full border-b bg-white md:border-none md:text-sm">
			<div className="mx-auto max-w-screen-xl items-center px-4 md:flex md:px-8">
				<div className="flex items-center justify-between py-3 md:block md:py-5">
					<Link
						to="/"
						onClick={closeNavbar}
						className="text-lg uppercase"
					>
						Guitarists
					</Link>
					<div className="md:hidden">
						<button
							className="text-gray-500 hover:text-gray-800"
							onClick={toggleNavbar}
						>
							{state ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="h-6 w-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
				<div
					className={`mt-8 flex-1 pb-3 md:mt-0 md:block md:pb-0 ${
						state ? "block" : "hidden"
					}`}
				>
					<ul className="items-center justify-end space-y-6 md:flex md:space-x-6 md:space-y-0">
						{navigation.map((item, idx) => (
							<li
								key={idx}
								className="text-gray-700 hover:text-indigo-600"
							>
								<Link
									onClick={() => handleLinkClick(item)}
									to={item.path}
									className="block"
								>
									{item.title}
								</Link>
							</li>
						))}
						<span className="hidden h-6 w-px bg-gray-300 md:block"></span>

						{!userToken || !user ? (
							<div className="items-center gap-x-6 space-y-3 md:flex md:space-y-0">
								<li>
									<Link
										onClick={closeNavbar}
										to="/login"
										className="block rounded-lg border py-3 text-center text-gray-700 hover:text-indigo-600 md:border-none"
									>
										Log in
									</Link>
								</li>
								<li>
									<Link
										onClick={closeNavbar}
										to="/signin"
										className="block rounded-lg bg-indigo-600 px-4 py-3 text-center font-medium text-white shadow hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none md:inline"
									>
										Sign in
									</Link>
								</li>
							</div>
						) : (
							<UserDropdown />
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
