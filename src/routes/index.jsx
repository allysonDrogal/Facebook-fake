import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import ProfileUsers from "../pages/ProfileUsers";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<ProfileUsers />} />
    </Routes>
  )
}