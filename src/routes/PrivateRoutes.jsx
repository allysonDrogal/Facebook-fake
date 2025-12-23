import { Route } from "react-router-dom";
import ProfileUsers from "../pages/ProfileUsers";

export const privateRoutes = [ 
  <Route path="/profile" element={<ProfileUsers />} />,
  <Route key="home" path="*" element={<ProfileUsers />} />
];