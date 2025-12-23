import api from "../shared/serviceApi/axios-config";

const RegisterUser = async (userData) => {
  try {
    const response = await api.post("/api/Users", userData);
    return response;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
}

const acesso = async ({ email, password }) => {
  try {
    const result = await api.post("/api/Users/login", { email, password });
    return result.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
}

export { RegisterUser, acesso };