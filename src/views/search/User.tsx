import React from 'react';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components';
import { userType } from '../../shared/types';
import { useHistory } from 'react-router-dom';
import Avatar from '../../components/Avatar';

type userPropsType = {
  user: userType
}

const User: React.FC<userPropsType> = ({ user }) => {
  const history = useHistory();

  return (
    <CardWrapper onClick={() => history.push(`/users/${user.login}`)}>
      <Card fluid>
        <Card.Content className='flex flex-space-between'>
          <Avatar 
            src={user.avatar_url}
            alt='avatar'
            className='md'
          />
          <UserInfo className='flex flex-space-between'>
            <h3>{user.login}</h3>
            <ReposNum>
              Repos:{' '}
              <span>
                2
              </span>
            </ReposNum>
          </UserInfo>
        </Card.Content>
      </Card>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  margin: 10px 0;
  cursor: pointer;
`;

const UserInfo = styled.div`
  align-items: center;
  width: 80%;

  h3 {
    margin: 0;
  }
`;

const ReposNum = styled.p`
  font-size: 16px;

  span {
    color: #a8a8a8;
  }
`;

export default User;