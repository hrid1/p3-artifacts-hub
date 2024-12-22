import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading)
    return (
      <div className="flex items-center justify-center h-[calc(100vh-288px)]">
        <div className="rounded-md h-12 w-12 border-4 border-t-4 border-amber-300 animate-spin absolute"></div>
      </div>
    );
  if (user) {
    return <div>{children}</div>;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
