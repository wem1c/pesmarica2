import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";
import api from "../api/pesmarica";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { setUserToken, userToken, setUser } = useContext(DataContext);
	const navigate = useNavigate();

	const getUserCredentials = async () => {
		try {
			const response = await api.post("api/auth/users/me/", null, {
				headers: {
					Authorization: `Token ${userToken.auth_token}`,
				},
			});
			setUser(response.data);
			navigate("/");
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

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await api.post("api/auth/token/login/", {
				username: username,
				password: password,
			});
			const token = response.data.auth_token;
			setUserToken(token);

			const response2 = await api.get("api/auth/users/me/", {
				headers: {
					Authorization: `Token ${token}`,
				},
			});
			setUser(response2.data);
			navigate("/");
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

	return (
		<section className="container mx-auto">
			<div className="flex flex-1 flex-col justify-center overflow-hidden px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
				<div className="mx-auto w-full max-w-xl lg:w-96">
					<div>
						<Link to="/" className="text-medium text-blue-600">
							guitarists
						</Link>
						<h2 className="mt-6 text-3xl font-extrabold text-neutral-600">
							Login.
						</h2>
					</div>
					<div className="mt-8">
						<div className="mt-6">
							<form onSubmit={handleSubmit} className="space-y-6">
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
											placeholder="Your username"
											className="block w-full transform rounded-lg border border-transparent bg-gray-50 px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
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
											autoComplete="current-password"
											required=""
											placeholder="Your Password"
											className="block w-full transform rounded-lg border border-transparent bg-gray-50 px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
											value={password}
											onChange={(e) => {
												setPassword(e.target.value);
											}}
										/>
									</div>
								</div>

								<div>
									<button
										type="submit"
										className="flex w-full transform items-center justify-center rounded-xl bg-blue-600 px-10 py-4 text-center text-base font-medium text-white transition duration-500 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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

export default Login;
