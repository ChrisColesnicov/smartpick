import myAxios from "./myAxios";

export default async function getPhones() {
  try {
    const response = await myAxios.get(
      `${import.meta.env.VITE_API_URL}/api/phones`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
