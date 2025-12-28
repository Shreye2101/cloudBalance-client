import React from 'react';
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Protected = ({ children, allowedRoles }) => {

  const token = localStorage.getItem("token");
  
  if (!token) {
    return <Navigate to="/" replace />;
  }
  
  try {
    const decoded = jwtDecode(token);

    console.log("Is Admin allowed?", allowedRoles?.includes(decoded.role));
    console.log("JWT Role Value:", decoded.role); 
    const currentTime = Date.now() / 1000;
    

    if (decoded.exp < currentTime) {
      localStorage.removeItem("token");
      return <Navigate to="/" replace />;
    }

    const userRole = decoded.role; 

    if (allowedRoles && !allowedRoles.includes(userRole)) {

    return <Navigate to="/dashboard/aws-services" replace />;
    }

  } catch (error) {
    localStorage.removeItem("token");
    return <Navigate to="/" replace />;
  }

  return children;
};

export default Protected;