import React from 'react';
import Card from 'components/Card';

import { repoType } from 'shared/types';
import Icon from 'components/Icon';

const RepoItem: React.FC<repoType> = ({ repo }) => {
  return (
    <Card 
      className='flex flex-space-between' 
      onClick={() => window.location.href = repo.html_url}
    >
      <div className='flex flex-column flex-center'>
        <h4>
          <Icon className='fab fa-github' />{' '}
          {repo.full_name}
        </h4>
      </div>
      <div className='flex flex-column flex-center'>
        <p>
          {repo.forks_count}{' '}
          <Icon className='fas fa-code-branch' />
        </p>
        <p>
          {repo.stargazers_count}{' '}
          <Icon className='fas fa-star' />
        </p>
      </div>
    </Card>
  );
};

export default RepoItem;