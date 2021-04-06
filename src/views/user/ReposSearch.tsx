import React from 'react';
import { Form } from 'semantic-ui-react';

import Input from '../../components/Input';

type ReposSearchPropsType = {
  query: string,
  onSetQuery: (value: string) => void
}

const ReposSearch: React.FC<ReposSearchPropsType> = ({ query, onSetQuery }) => {
  return (
    <Form>
      <Form.Field>
        <Input 
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSetQuery(e.target.value)}
          placeholder='Search...' 
        />
      </Form.Field>
    </Form>
  );
};

export default ReposSearch;