import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";
import Alert from "../components/Alert";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { getUserTokenMutation, setUserToken, setUser } =
		useContext(DataContext);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const userCredentials = {
			username: username,
			password: password,
		};
		getUserTokenMutation.mutateAsync(userCredentials, {
			onSuccess: (data) => {
				const token = data.auth_token;
				setUserToken(token);

				// Store the token in local storage or a cookie
				localStorage.setItem("authToken", token);

				setUser({ ...userCredentials });
				navigate("/");
			},
		});
	};

	return (
		<section className="container mx-auto">
			<div className="flex flex-col justify-center flex-1 px-4 py-12 overflow-hidden sm:px-6 lg:flex-none lg:px-20 xl:px-24">
				<div className="w-full max-w-xl mx-auto lg:w-96">
					<div>
						<Link to="/" className="text-blue-600 text-medium">
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
											autoComplete="current-password"
											required=""
											placeholder="Your Password"
											className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 text-neutral-600 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
											value={password}
											onChange={(e) => {
												setPassword(e.target.value);
											}}
										/>
									</div>
								</div>

								{getUserTokenMutation.isError ? (
									<div className="my-6">
										<Alert
											variant="error"
											message="Unable to log in with provided credentials."
										/>
									</div>
								) : null}

								<div>
									<button
										disabled={getUserTokenMutation.isLoading}
										type="submit"
										className="inline-flex items-center justify-center w-full px-10 py-4 mr-2 text-lg font-bold text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
									>
										{getUserTokenMutation.isLoading ? (
											<div>
												<svg
													aria-hidden="true"
													role="status"
													className="inline w-4 h-4 mr-3 text-white animate-spin"
													viewBox="0 0 100 101"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
														fill="#E5E7EB"
													/>
													<path
														d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
														fill="currentColor"
													/>
												</svg>{" "}
												<span>Loading...</span>
											</div>
										) : (
											<span>Log In</span>
										)}
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
