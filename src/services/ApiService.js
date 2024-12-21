import ApiClient from "./ApiClient";

export const getTracks = async () => {
  try {
    const response = await ApiClient.get("tracks");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTrack = async (id) => {
  try {
    const response = await ApiClient.get(`track/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// request track data from the API
export const registerTrack = async (data) => {
  try {
    const response = await ApiClient.post("create_request", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
