export const BASE_URL = "https://mini-mart-api.herokuapp.com/";

export const getAllCategories = async () => {
  try {
    const request = await fetch(`${BASE_URL}/api/category`);
    const response = await request.json();
    return response;
  } catch (e) {
    return { error: e.message };
  }
};
