import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  AppDispatch,
  appStateType,
  ErrorType,
  repoType 
} from 'shared/types';
import { fetchRepos } from 'store/repos/actions';
import RepoItem from './RepoItem';
import ReposSearch from './ReposSearch';
import Loading from 'components/Loading';
import Error from 'components/Error';
import EmptyContent from 'components/EmptyContent';

type ReposSearchPropsType = {
  name: string;
}

const ReposList: React.FC<ReposSearchPropsType> = ({ name }) => {
  const [query, setQuery] = useState<string>('');
  const dispatch: AppDispatch = useDispatch();
  const loading: boolean = useSelector<appStateType, boolean>(state => state.repos.loading);
  const data: repoType[] = useSelector<appStateType, repoType[]>(state => state.repos.data);
  const error: ErrorType = useSelector<appStateType, ErrorType>(state => state.repos.error);

  useEffect(() => {
    dispatch(fetchRepos(name));
  }, [dispatch, name]);

  const getFilteredRepos = (): repoType[] => data.filter((repo: repoType) => repo.name.includes(query));

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <ReposSearch  
        query={query}
        onSetQuery={setQuery}
      />
      {
        getFilteredRepos().length ?
          getFilteredRepos().map((repo: repoType) => 
            <RepoItem 
              key={repo.id}
              repo={repo}
            />
          ) 
          :
          <EmptyContent title="repos" />
      }
    </>
  );
};

export default ReposList;