import React from 'react';
import { ErrorType } from 'shared/types';
import styled from 'styled-components';

type ErrorPropTypes = {
  error: ErrorType
}

const Error: React.FC<ErrorPropTypes> = ({ error }) => {
  return (
    <ErrorMessage>
      {error}
    </ErrorMessage>
  );
};

const ErrorMessage = styled.p`
  text-align: center;
  margin: 30px 0;
  font-size: 20px;
  color: red;
`;


export default Error;