import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./Auth/useAuth";

const ProtectedRoute = (props) => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
  // return props.children
};

export default ProtectedRoute;
