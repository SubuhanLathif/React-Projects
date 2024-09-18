import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const PrivateRoutes = ({ children }) => {
    const { currentUser } = useAuth();

    // If user is not logged in, redirect to the sign-in page
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    // If user is logged in, render the children (protected component)
    return children;
}
