import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  AppDispatch,
  appStateType,
  repoType 
} from '../../shared/types';
import { fetchRepos } from '../../store/repos/actions';
import RepoItem from './RepoItem';
import ReposSearch from './ReposSearch';
import Loading from 'components/Loading';

type ReposSearchPropsType = {
  name: string;
}

const ReposList: React.FC<ReposSearchPropsType> = ({ name }) => {
  const [query, setQuery] = useState<string>('');
  const dispatch: AppDispatch = useDispatch();
  const loading: boolean = useSelector<appStateType, boolean>(state => state.repos.loading);
  const data: repoType[] = useSelector<appStateType, repoType[]>(state => state.repos.data);
  // const error: boolean = useSelector(state => state.users.error);

  useEffect(() => {
    dispatch(fetchRepos(name));
  }, [dispatch, name]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <ReposSearch  
        query={query}
        onSetQuery={setQuery}
      />
      {
        data.filter(repo => repo.name.includes(query)).map(repo => 
          <RepoItem 
            key={repo.id}
            repo={repo}
          />
        )
      }
    </>
  );
};

export default ReposList;