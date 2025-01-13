import { ProfileOrdersUI } from '@ui-pages';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/store';
import {
  getAllOrders,
  getListOrdersSelector
} from '../../slices/listOrdersSlice';

export const ProfileOrders: FC = () => {
  const orders = useSelector(getListOrdersSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  });

  return <ProfileOrdersUI orders={orders} />;
};
