import { Navigate } from "react-router-dom";

export default function ProtectedAdminRoute({ user, children }) {
    if (!user || user.role !== "admin") {
      return <Navigate to="/" />;
    }
    return children;
  }