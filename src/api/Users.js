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

const forgotPassword = async ({ email}) => {
  try {
    const result = await api.post("/api/Users/forgot-password", { email });
    return result.data;
  } catch (error) {
    console.error("Error in forgot password:", error);
    throw error;
  }
}

const resetPassword = async ({ token, newPassword }) => {
  try {
    const result = await api.post("/api/Users/reset-password", { token, newPassword });
    return result.data;
  } catch (error) {
    console.error("Error in reset password:", error);
    throw error;
  }
}

export { RegisterUser, acesso, forgotPassword, resetPassword };