import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  if (loading)
    return (
      <div className="rounded-md h-12 w-12 border-4 border-t-4 border-amber-300 animate-spin absolute"></div>
    );
  if (!user) {
    navigate("/login");
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
