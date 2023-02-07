import axios from "axios";
const BASE_URL = "http://localhost:5000/api";


export const IMAGE_URL = "https://api.cloudinary.com/v1_1/kalyanmitthu/image/upload";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const privateRequest = axios.create({
  baseURL: BASE_URL,
  headers: "token",
});
