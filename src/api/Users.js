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

export { RegisterUser };