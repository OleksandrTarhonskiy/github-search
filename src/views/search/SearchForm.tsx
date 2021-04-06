import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'use-debounce';

import { AppDispatch } from 'shared/types';
import { fetchUsers } from 'store/users/actions';
import Input from 'components/Input';

const SearchForm: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [query] = useDebounce(value, 1000);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (query) dispatch(fetchUsers(query));
  }, [dispatch, query]);

  return (
    <form>
      <Input 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        placeholder='Search...' 
      />
    </form>
  );
};

export default SearchForm;