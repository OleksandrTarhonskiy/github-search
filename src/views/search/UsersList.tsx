import React from 'react';

import User from './User';
import { useSelector } from 'react-redux';
import {
  appStateType,
  userType 
} from '../../shared/types';
import Loading from 'components/Loading';

const UsersList: React.FC = () => {
  const loading: boolean = useSelector<appStateType, boolean>(state => state.users.loading);
  const data: userType[] = useSelector<appStateType, userType[]>(state => state.users.data);
  // const error: boolean = useSelector(state => state.users.error);
  
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {
        data.map(user => 
          <User 
            key={user.id} 
            user={user}
          />
        ) 
      }
    </>
  );
};

export default UsersList;