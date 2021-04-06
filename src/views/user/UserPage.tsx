/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

import { AppDispatch } from '../../shared/types';
import { fetchUser } from '../../store/user/actions';
import Avatar from '../../components/Avatar';
import {
  appStateType,
  userType 
} from '../../shared/types';
import ReposList from './ReposList';

interface RouterProps {
  name: string;
}

interface UserPageProps extends RouteComponentProps<RouterProps> {}

const UserPage: React.FC<UserPageProps> = ({ match }) => {
  const dispatch: AppDispatch = useDispatch();
  // const loading: boolean = useSelector(state => state.users.loading);
  const data: userType = useSelector<appStateType, userType>(state => state.user.data);
  // const error: boolean = useSelector(state => state.users.error);

  useEffect(() => {
    dispatch(fetchUser(match.params.name));
  }, [dispatch, match.params.name]);

  return (
    <>
      <div className='flex'>
        <Avatar 
          src={data.avatar_url}
          alt='avatar'
          className='xl'
        />
        <UserDetails className='flex flex-column flex-center'>
          {data.name && <h2>{data.name}</h2>}
          <p>{data.login}</p>
          {data.email && <p>{data.email}</p>}
          {data.location && <p>{data.location}</p>}
          <p>{data.created_at}</p>
          <p>{data.followers} Followers</p>
          <p>{data.following} Folowing</p>
        </UserDetails>
      </div>
      <hr />
      <div>
        {data.bio}
      </div>
      <ReposList name={match.params.name} />
    </>
  );
};


const UserDetails = styled.div`
  margin-left: 35px;
`;

export default UserPage;