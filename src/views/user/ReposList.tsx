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

type ReposSearchPropsType = {
  name: string;
}

const ReposList: React.FC<ReposSearchPropsType> = ({ name }) => {
  const [query, setQuery] = useState<string>('');
  const dispatch: AppDispatch = useDispatch();
  // const loading: boolean = useSelector(state => state.users.loading);
  const data: repoType[] = useSelector<appStateType, repoType[]>(state => state.repos.data);
  // const error: boolean = useSelector(state => state.users.error);

  useEffect(() => {
    dispatch(fetchRepos(name));
  }, [dispatch, name]);

  return (
    <div>
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
    </div>
  );
};

export default ReposList;