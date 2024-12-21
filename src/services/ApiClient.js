import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

console.log("baseURL", baseURL);
const ApiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default ApiClient;
