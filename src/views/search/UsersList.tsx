import React from 'react';
import { Grid } from 'semantic-ui-react';

import User from './User';

const UsersList: React.FC = () => {
  return (
    <Grid columns={1} stackable>
      <Grid.Column>
        <User />
        <User />
      </Grid.Column>
    </Grid>
  );
};

export default UsersList;