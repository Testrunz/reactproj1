import { Navigate, Outlet, useLocation } from "react-router-dom";
import { USER_DATA } from "./localStorageConstants";

const useAuth = () => {
  const user = localStorage.getItem(USER_DATA)!== null ? true : false;
  return user && user;
};

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
