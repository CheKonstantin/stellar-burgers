import { ProfileOrdersUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/store';
import { getAllOrders, getListOrdersSelector } from '../../slices/listOrdersSlice';

export const ProfileOrders: FC = () => {
  const orders: TOrder[] = useSelector(getListOrdersSelector);
  console.log(orders)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  });

  return <ProfileOrdersUI orders={orders} />;
};
