import { Navigate, Route } from 'react-router-dom';
import React from 'react';

type TProtectedRouteType = {
  isAuthenticated?: boolean;
  children: React.ReactElement;
};

const ProtectedRoute = ({ isAuthenticated, children }: TProtectedRouteType) => {
  if (!isAuthenticated) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
