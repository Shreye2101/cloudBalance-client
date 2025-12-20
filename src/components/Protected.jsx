import { Navigate } from "react-router-dom";
import React from "react";

const Protected = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default Protected;
