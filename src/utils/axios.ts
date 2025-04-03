import axios from "axios";

export let API: string

if (import.meta.env.DEV) {
  API = import.meta.env.VITE_API_TEST;
} else {
  API = import.meta.env.VITE_API_URL;
}
console.log(API);

export const makeRequest = axios.create({
  baseURL: API,
  withCredentials: true,
});
