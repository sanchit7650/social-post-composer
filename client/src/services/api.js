import axios from "axios";

const API = axios.create({
 baseURL: "https://social-post-composer-69a4.onrender.com/api",
});

export default API;