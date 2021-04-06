import React from 'react';
import styled from 'styled-components';

type EmptyContentPropsType = {
  title: string
}

const EmptyContent: React.FC<EmptyContentPropsType> = ({ title }) => {
  return (
    <Message>
      there are no {title} to show...
    </Message>
  );
};

const Message = styled.h4`
  margin: 30px 0;
  color: #a8a8a8;
  font-size: 27px;
`;

export default EmptyContent;