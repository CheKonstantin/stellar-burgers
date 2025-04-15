import { Navigate, useLocation } from 'react-router-dom';
import React from 'react';
import { Preloader } from '@ui';
import { useSelector } from '../../services/store';
import { getUserSelect, isAuthCheckedSelector } from '../../slices/userSlice';

type TProtectedRouteType = {
  isUserLoggedIn?: boolean;
  children: React.ReactElement;
};

const ProtectedRoute = ({ children, isUserLoggedIn }: TProtectedRouteType) => {
  const location = useLocation();
  const isAuthChecked = useSelector(isAuthCheckedSelector);
  const user = useSelector(getUserSelect);
  if (!isAuthChecked) {
    return <Preloader />;
  }

  if (!isUserLoggedIn && !user) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  if (isUserLoggedIn && user) {
    const { from } = location.state ?? { from: { pathname: '/' } };
    return <Navigate to={from} />;
  }

  return children;
};

export default ProtectedRoute;
