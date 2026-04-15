import { Navigate } from "react-router";
import { useAuthStore } from "../store/authStore";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default ProtectedRoute;
