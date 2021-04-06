import React from 'react';
import { Container } from 'semantic-ui-react';

import SearchForm from './SearchForm';

const SearchPage: React.FC = () => {
  return (
    <Container>
      <SearchForm />
    </Container>
  );
};

export default SearchPage;