import axios from "axios";
const BASE_URL = "https://ill-pear-dove-sari.cyclic.app/api";


export const IMAGE_URL =
  "https://api.cloudinary.com/v1_1/kalyanmitthu/image/upload";

let admin;
let TOKEN;
admin = JSON.parse(localStorage.getItem("persist:root"))?.admin;

if (admin) {
  const currentAdmin = JSON.parse(admin)?.currentAdmin;
  TOKEN = currentAdmin?.token;
}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const privateRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
