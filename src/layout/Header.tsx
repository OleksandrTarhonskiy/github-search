import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Header: React.FC = () => {
  const history = useHistory();

  return (
    <HeaderContainer>
      <LogoText 
        className="flex flex-column flex-center"
        onClick={() => history.push('/')}
      >
        <h3>
          Github searcher
        </h3>
      </LogoText>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  height: 65px;
  background-color: #24292E;
  margin-bottom: 35px;
`;

const LogoText = styled.div`
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  margin-left: 40px;
`;

export default Header;