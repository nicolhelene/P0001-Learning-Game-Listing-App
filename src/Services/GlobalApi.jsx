// GlobalApi.jsx
import axios from "axios";

const key = "3d8b987fb19745a993f0c05c20f38db3";
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = () => axiosCreate.get(`/genres?key=${key}`);
const getAllGames = () => axiosCreate.get(`/games?key=${key}`);
const getGameListByGenreId = (id) =>
  axiosCreate.get(`/games?key=${key}&genres=${id}`);

export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId,
};
