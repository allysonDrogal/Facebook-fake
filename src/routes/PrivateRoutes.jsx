import { Route } from "react-router-dom";
import ProfileUsers from "../pages/ProfileFriends";
import ProfileUser from "../pages/ProfileUser";

export const privateRoutes = [ 
  <Route path="/profile" element={<ProfileUsers />} />,
  <Route path="/profile-user" element={<ProfileUser />} />,
  <Route key="home" path="*" element={<ProfileUsers />} />,
];