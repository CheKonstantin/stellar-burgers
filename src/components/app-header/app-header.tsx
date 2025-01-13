import { FC } from 'react';
import { AppHeaderUI } from '@ui';

import { getUserSelect } from '../../slices/userSlice';
import { useSelector } from '../../services/store';

export const AppHeader: FC = () => {
  const user = useSelector(getUserSelect);
  const userName = user?.name || '';
  return <AppHeaderUI userName={userName} />;
};
