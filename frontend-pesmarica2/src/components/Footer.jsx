import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="container mt-10 max-w-screen-xl bg-white py-5 text-gray-500">
			<div className="max-w-lg sm:mx-auto sm:text-center">
				<h2 className="mx-auto w-32 bg-transparent text-2xl font-bold uppercase text-black">
					Guitarists
				</h2>
				<p className="mt-2 text-center text-[15px] leading-relaxed">
					Discover and learn guitar with our comprehensive collection
					of songs, chords, and tutorials. Whether you&apos;re a
					beginner or an experienced guitarist, we&apos;ve got you
					covered. Join our community of guitar enthusiasts today!
				</p>
			</div>
			<ul className="mt-8 flex items-center justify-center space-x-4  ">
				<li key={1} className=" hover:text-gray-800">
					<Link to="/">Home</Link>
				</li>
				<li key={2} className=" hover:text-gray-800">
					<Link to="/artists">Artists</Link>
				</li>
				<li key={3} className=" hover:text-gray-800">
					<Link to="/songs">Songs</Link>
				</li>
				<li key={4} className=" hover:text-gray-800">
					<Link to="/about">About</Link>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
