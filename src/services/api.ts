import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const getUser = async (login: string | undefined) => api.get(`/users/${login}`);

export const getRepos = async (login: string | undefined) => api.get(`/users/${login}/repos`);

export default api;
