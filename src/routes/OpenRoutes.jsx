import { Route } from "react-router-dom";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";

export const openRoutes = [
  <Route key="login" path="/" element={<Login />} />,
  <Route key="forgot-password" path="/forgot-password" element={<ForgotPassword />} />,
  <Route key="catch-all" path="*" element={<Login />} />
];