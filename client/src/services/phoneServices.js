import myAxios from "./myAxios";

export async function addPhone(phone) {
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

export async function editPhone(phone) {
  try {
    const response = await myAxios.put("/api/phones", phone);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
  return null;
}

export async function deletePhone(id) {
  try {
    const response = await myAxios.delete(`/api/phones/${id}`);
    if (response.status === 204) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
  return null;
}
