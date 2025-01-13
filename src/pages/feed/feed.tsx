import { Preloader } from '@ui';
import { FeedUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC } from 'react';
import { getFeed, getFeedSelect } from '../../slices/feedSlice';
import { useDispatch, useSelector } from '../../services/store';
import {useEffect} from "react";

export const Feed: FC = () => {
  const orders: TOrder[] = useSelector(getFeedSelect);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeed());
  }, [dispatch]);

  const handleGetFeeds = () => {
    dispatch(getFeed());
  };

  if (!orders.length) {
    return <Preloader />;
  }


  return <FeedUI orders={orders} handleGetFeeds={handleGetFeeds} />;
};
