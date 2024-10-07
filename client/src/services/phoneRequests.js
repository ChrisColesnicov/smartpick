import myAxios from "./myAxios";

export async function getPhones() {
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

export async function getPhonesById(ids) {
  try {
    const requests = ids.map((id) =>
      myAxios.get(`${import.meta.env.VITE_API_URL}/api/phones/${id}`)
    );
    const responses = await Promise.all(requests);
    return responses.map((response) => response.data);
  } catch (error) {
    console.error(error);
    return [];
  }
}
