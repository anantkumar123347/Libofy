import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem('authToken');
  console.log("Is Authenticated:", isAuthenticated); // Debug log

  if (!isAuthenticated) {
    console.log("Redirecting to login...");
    return <Navigate to="/" />;
  }

  return <Outlet />;
};


export default PrivateRoute;
