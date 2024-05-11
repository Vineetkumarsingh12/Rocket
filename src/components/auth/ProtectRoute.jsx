import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = ({ children, user, redirect = "/login" }) => {
  console.log("user",user);
  if (!user) return <Navigate to={redirect} />;

  return children ? children : <Outlet />;
};

export default ProtectRoute;
