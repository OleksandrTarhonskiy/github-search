import React from 'react';
import { Form, Input } from 'semantic-ui-react';

const SearchForm: React.FC = () => {
  return (
    <Form>
      <Form.Field>
        <Input loading={false} placeholder='Search...' />
      </Form.Field>
    </Form>
  );
};

export default SearchForm;