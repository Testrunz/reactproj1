import axios from "axios";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { TOKEN } from "./localStorageConstants";

const useAuth = () => {
  const user = localStorage.getItem(TOKEN) !== null ? true : false;
  return user && user;
};
axios.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
  localStorage.getItem(TOKEN)
)}`;

const ProtectedRoutes = () => {
  const location = useLocation();
  const isAuth = useAuth();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={"/signin"} state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;
