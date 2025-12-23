import { jwtDecode } from "jwt-decode";
import { environment } from "../shared/env";
import { useAuth } from "../shared/hooks/auth";
import { Routes } from "react-router-dom";
import HeaderMain from "../components/header-main-page";
import { privateRoutes } from "./PrivateRoutes";
import { openRoutes } from "./OpenRoutes";
import HeaderBase from "../shared/Layouts/header";

export default function AppRoutes() {
  const { user, token } = useAuth();

  const isAuthenticated = () => {
     if (token) {
      try {
        const decodedToken = jwtDecode(token);
        return user && decodedToken.exp * 1000 > Date.now();
      } catch (error) {
        localStorage.removeItem(environment.APP_NAME);
        return false;
      }
    }
    return false;
  };

  if (isAuthenticated()) {
    return (
      <>
        <HeaderMain />
        <Routes>
          {privateRoutes}
        </Routes>
      </>
    )
  }
  return (
    <>
     <HeaderBase />
     <Routes>
     {openRoutes}
     </Routes>
    </>
  )
} 