import axios from "axios";

const API = axios.create({
  baseURL: "https://api.rawg.io/api/",
});

export default API;
