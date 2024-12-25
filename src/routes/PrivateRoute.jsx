import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Spiner from "../components/common/Spiner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <Spiner />;
  if (user) {
    return <div>{children}</div>;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
