import axios from "axios";

const base_url = "https://gateway.marvel.com/v1/public/"; //developer.marvel.com

const api = axios.create({
  baseURL: `${base_url}`,
});

export default api;
