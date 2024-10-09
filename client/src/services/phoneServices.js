import myAxios from "./myAxios";

export default async function addPhone(phone) {
  try {
    const response = await myAxios.post("/api/phones", phone);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
  return null;
}
