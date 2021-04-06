import React from 'react';
import Card from '../../components/Card';

import { repoType } from '../../shared/types';

const RepoItem: React.FC<repoType> = ({ repo }) => {
  return (
    <Card 
      className='flex flex-space-between' 
      onClick={() => window.location.href = repo.html_url}
    >
      <div className='flex flex-column flex-center'>
        <h4>{repo.full_name}</h4>
      </div>
      <div className='flex flex-column flex-center'>
        <p>{repo.forks_count} Forks</p>
        <p>{repo.stargazers_count} Stars</p>
      </div>
    </Card>
  );
};

export default RepoItem;