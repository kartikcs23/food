// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    // If the user isn't logged in, redirect them to the login page
    return <Navigate to="/" />;
  }

  // Otherwise, render the children (the protected component)
  return children;
};

export default PrivateRoute;
