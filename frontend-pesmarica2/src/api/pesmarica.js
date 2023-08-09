import axios from "axios";

const api = axios.create({
	baseURL: "https://backend-pesmarica2.vercel.app",
	// baseURL: "http://127.0.0.1:8000",
});

export const getSongs = async (page = 1) => {
	const response = await api.get(
		`/api/songs/?ordering=-created_at&page=${page}`,
	);
	return response.data;
};

export const searchSongs = async (search) => {
	const response = await api.get(`/api/songs/search-by-title/${search}/`);
	return response.data;
};

export const getArtists = async (page = 1) => {
	const response = await api.get(`/api/artists/?ordering=name&page=${page}`);
	return response.data;
};

export const searchArtists = async (search) => {
	const response = await api.get(`/api/artists/search-by-author/${search}/`);
	return response.data;
};

export const getSingleArtist = async (id) => {
	const response = await api.get(`/api/artists/${id}/songs/`);
	return response.data;
};

export const getUserToken = async (userCredentials) => {
	const response = await api.post("api/auth/token/login/", userCredentials);
	return response.data;
};

export const createUser = async (userCredentials) => {
	const response = await api.post("api/auth/users/", userCredentials);
	return response.data;
};

export default api;
