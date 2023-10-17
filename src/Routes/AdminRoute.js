import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { isAdmin } = useContext(AuthContext);
  const location = useLocation();

  const accessToken = localStorage.getItem("accessToken");
  // console.log("at:", accessToken);

  if (accessToken && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
