import React from 'react';
import { Grid } from 'semantic-ui-react';

import User from './User';
import { useSelector } from 'react-redux';
import {
  appStateType,
  userType 
} from '../../shared/types';

const UsersList: React.FC = () => {
  // const loading: boolean = useSelector(state => state.users.loading);
  const data: userType[] = useSelector<appStateType, userType[]>(state => state.users.data);
  // const error: boolean = useSelector(state => state.users.error);

  return (
    <Grid columns={1} stackable>
      <Grid.Column>
        {
          data.map(user => 
            <User 
              key={user.id} 
              user={user}
            />
          ) 
        }
      </Grid.Column>
    </Grid>
  );
};

export default UsersList;