import axios from "axios";

const serverConfig = axios.create({
  baseURL: "https://loft-taxi.glitch.me",
  headers: {"Content-Type": "application/json"}
});

export default serverConfig;