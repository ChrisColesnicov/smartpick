import axios from "axios";

export default function getPhones() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/phones`)
    .then((response) => console.info(response))
    .catch((error) => {
      console.error(error);
    });
}

/* export function getMovies() {
    return axios
      .get(`${import.meta.env.VITE_API_URL}/api/movies`, {
        withCredentials: true,
      })
      .then((response) => response.data)
      .catch((error) => {
        console.error(error);
        return [];
      });
  } */
