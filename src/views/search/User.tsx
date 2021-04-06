import React from 'react';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components';
import { userType } from '../../shared/types';

type userProps = {
  user: userType
}

const User: React.FC<userProps> = ({ user }) => {
  return (
    <CardWrapper>
      <Card fluid>
        <Card.Content className='flex flex-space-between'>
          <Avatar 
            src={user.avatar_url}
            alt='avatar'
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

const Avatar = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
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