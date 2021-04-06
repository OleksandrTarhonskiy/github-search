import React from 'react';

import User from './User';
import { useSelector } from 'react-redux';
import {
  appStateType,
  ErrorType,
  userType 
} from 'shared/types';
import Loading from 'components/Loading';
import Error from 'components/Error';
import EmptyContent from 'components/EmptyContent';

const UsersList: React.FC = () => {
  const loading: boolean = useSelector<appStateType, boolean>(state => state.users.loading);
  const data: userType[] = useSelector<appStateType, userType[]>(state => state.users.data);
  const error: ErrorType = useSelector<appStateType, ErrorType>(state => state.users.error);
  
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      {
        data.length ?
          data.map(user => 
            <User 
              key={user.id} 
              user={user}
            />
          ) 
          :
          <EmptyContent title="users" />
      }
    </>
  );
};

export default UsersList;