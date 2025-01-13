import { Navigate, useLocation } from 'react-router-dom';
import React from 'react';
import { Preloader } from '@ui';
import { useSelector } from '../../services/store';
import { getUserSelect, isAuthCheckedSelector } from '../../slices/userSlice';

type TProtectedRouteType = {
  isAuthenticated?: boolean;
  children: React.ReactElement;
};

const ProtectedRoute = ({ children, isAuthenticated }: TProtectedRouteType) => {
  const location = useLocation();
  const isAuthChecked = useSelector(isAuthCheckedSelector);
  const user = useSelector(getUserSelect);
  if (!isAuthChecked) {
    return <Preloader />;
  }

  if (!isAuthenticated && user) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  if (isAuthenticated && user) {
    const { from } = location.state ?? { from: { pathname: '/' } };
    return <Navigate to={from} />;
  }

  console.log('isAuthChecked:', isAuthenticated);

  return children;
};

export default ProtectedRoute;
