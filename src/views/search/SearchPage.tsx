import React from 'react';
import { Container } from 'semantic-ui-react';

import SearchForm from './SearchForm';
import UsersList from './UsersList';

const SearchPage: React.FC = () => {
  return (
    <Container>
      <SearchForm />
      <UsersList />
    </Container>
  );
};

export default SearchPage;