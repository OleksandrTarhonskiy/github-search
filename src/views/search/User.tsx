import React from 'react';
import styled from 'styled-components';
import { userType } from '../../shared/types';
import { useHistory } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import Card from '../../components/Card';

type userPropsType = {
  user: userType
}

const User: React.FC<userPropsType> = ({ user }) => {
  const history = useHistory();

  return (
    <Card 
      className='flex'
      onClick={() => history.push(`/users/${user.login}`)}
    >
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
            {user.public_repos}
          </span>
        </ReposNum>
      </UserInfo>
    </Card>
  );
};

const UserInfo = styled.div`
  align-items: center;
  width: 100%;
  margin: 0 30px;

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