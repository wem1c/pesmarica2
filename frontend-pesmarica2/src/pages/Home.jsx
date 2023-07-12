import { useContext } from "react";
import Card from "../components/Card";

import bijelo_dugme from "../images/artists/bijelo-dugme.jpeg";
import aca_lukas from "../images/artists/aca-lukas.jpg";
import aco_pejovic from "../images/artists/aco-pejovic.jpg";
import dino_merlin from "../images/artists/dino-merlin.jpg";
import divlje_jagode from "../images/artists/divlje-jagode.jpg";
import halid_besic from "../images/artists/halid-besic.jpeg";
import parni_valjak from "../images/artists/parni-valjak.jpg";
import riblja_corba from "../images/artists/riblja-corba.jpg";
import sinan_sakic from "../images/artists/sinan-sakic.jpeg";
import Hero from "../components/Hero";
import List from "../components/LatestSongsList";

const Home = () => {
	const artists = [
		{ image: bijelo_dugme, title: "Bijelo Dugme", url: 5 },
		{ image: aca_lukas, title: "Aca Lukas", url: 49 },
		{ image: aco_pejovic, title: "Aco Pejović", url: 48 },
		{ image: dino_merlin, title: "Dino Merlin", url: 76 },
		{ image: divlje_jagode, title: "Divlje Jagode", url: 20 },
		{ image: halid_besic, title: "Halid Bešlić", url: 38 },
		{ image: parni_valjak, title: "Parni Valjak", url: 79 },
		{ image: riblja_corba, title: "Riblja Čorba", url: 230 },
		{ image: sinan_sakic, title: "Sinan Sakić", url: 9 },
	];

	return (
		<>
			<Hero />

			<div className="container mx-auto mb-16">
				<div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
					<main className="grid grid-cols-1  justify-center gap-6 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
						{artists.map((artist) => (
							<Card
								key={artist.title}
								image={artist.image}
								title={artist.title}
								url={artist.url}
							/>
						))}
					</main>
					<aside className="lg:col-span-1">
						<List />
					</aside>
				</div>
			</div>
		</>
	);
};

export default Home;
