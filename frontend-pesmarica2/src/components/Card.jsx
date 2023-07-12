import { Link } from "react-router-dom";

const Card = ({ image, title, url }) => {
	return (
		<Link
			to={`/artists/${url}`}
			className="mx-auto flex w-full max-w-sm flex-col items-center justify-center"
		>
			<div className=" flex w-full max-w-sm flex-col items-center justify-center">
				<div
					className="h-64 w-full rounded-lg bg-gray-300 bg-cover bg-center shadow-md"
					style={{
						backgroundImage: `url(${image})`,
					}}
				/>
				<div className="-mt-10 w-56 overflow-hidden rounded-lg bg-white shadow-lg ">
					<h3 className="py-2 text-center font-bold uppercase tracking-wide text-gray-800 hover:text-orange-300 ">
						{title}
					</h3>
				</div>
			</div>
		</Link>
	);
};

export default Card;
