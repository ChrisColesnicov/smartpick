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

export async function getPhoneById(id) {
  try {
    const response = await myAxios.get(
      `${import.meta.env.VITE_API_URL}/api/phones/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getAnnexTables() {
  const tables = [
    "connect",
    "screen",
    "cover",
    "os",
    "wifi",
    "bluetooth",
    "brands",
  ];
  try {
    const requests = tables.map((table) =>
      myAxios.get(`${import.meta.env.VITE_API_URL}/api/phones/specs/${table}`)
    );
    const responses = await Promise.all(requests);
    return responses.map((response) => response.data);
  } catch (error) {
    console.error(error);
    return [];
  }
}
