import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const Loading: React.FC = () => {
  return (
    <Wrapper className='flex flex-center'>
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={50}
        width={50}
        visible
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 300px;
  align-items: center;
`;

export default Loading;