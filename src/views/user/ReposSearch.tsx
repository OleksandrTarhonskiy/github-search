import React from 'react';

import Input from '../../components/Input';

type ReposSearchPropsType = {
  query: string,
  onSetQuery: (value: string) => void
}

const ReposSearch: React.FC<ReposSearchPropsType> = ({ query, onSetQuery }) => {
  return (
    <form>
      <Input 
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSetQuery(e.target.value)}
        placeholder='Search...' 
      />
    </form>
  );
};

export default ReposSearch;