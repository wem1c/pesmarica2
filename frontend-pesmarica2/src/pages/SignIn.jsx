import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";

const SignIn = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const { createUserMutation } = useContext(DataContext);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const userCredentials = {
			email: email,
			username: username,
			password: password,
		};
		createUserMutation.mutateAsync(userCredentials, {
			onSuccess: () => {
				navigate("/login");
			},
		});
	};

	return (
		<section className="container mx-auto">
			<div className="flex flex-col justify-center flex-1 px-4 py-12 overflow-hidden sm:px-6 xl:px-24">
				<div className="w-full max-w-xl mx-auto ">
					<div>
						<Link to="/" className="text-blue-600 text-medium">
							guitarists
						</Link>
						<h2 className="mt-6 text-3xl font-extrabold text-neutral-600">
							Sign in.
						</h2>
					</div>
					<div className="mt-8">
						<div className="mt-6">
							<form className="space-y-6" onSubmit={handleSubmit}>
								<div className="grid grid-cols-1 gap-2 md:grid-cols-2">
									<div>
										<label
											htmlFor="username"
											className="block text-sm font-medium text-neutral-600"
										>
											Username
										</label>

										<div className="mt-1">
											<input
												id="username"
												name="username"
												type="text"
												required
												placeholder="Your Username"
												className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 text-neutral-600 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
												value={username}
												onChange={(e) => {
													setUsername(e.target.value);
												}}
											/>
										</div>
									</div>
									<div className="space-y-1">
										<label
											htmlFor="password"
											className="block text-sm font-medium text-neutral-600"
										>
											Password
										</label>
										<div className="mt-1">
											<input
												id="password"
												name="password"
												type="password"
												required
												placeholder="Your Password"
												className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 text-neutral-600 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
												value={password}
												onChange={(e) => {
													setPassword(e.target.value);
												}}
											/>
										</div>
									</div>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-neutral-600"
									>
										Email address
									</label>
									<div className="mt-1">
										<input
											id="email"
											name="email"
											type="email"
											required
											placeholder="Your Email"
											className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 text-neutral-600 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
											value={email}
											onChange={(e) => {
												setEmail(e.target.value);
											}}
										/>
									</div>
								</div>

								<div>
									<button
										type="submit"
										className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
									>
										Sign in
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignIn;
