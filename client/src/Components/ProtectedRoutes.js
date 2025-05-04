import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// This function checks if the user is "logged in" by looking for a token in localStorage
const isAuthenticated = () => {
  const token = localStorage.getItem("accessToken");
  return !!token; // Returns true if token exists, false otherwise
};

const ProtectedRoute = () => {
  // Check if user is authenticated
  if (!isAuthenticated()) {
    // If not authenticated, redirect to signup page
    return <Navigate to="/signup" replace />;
  }

  // If authenticated, render the protected content
  return <Outlet />;
};

export default ProtectedRoute;