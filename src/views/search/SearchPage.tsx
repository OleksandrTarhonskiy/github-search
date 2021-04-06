import React from 'react';

import SearchForm from './SearchForm';
import UsersList from './UsersList';

const SearchPage: React.FC = () => {
  return (
    <>
      <SearchForm />
      <UsersList />
    </>
  );
};

export default SearchPage;