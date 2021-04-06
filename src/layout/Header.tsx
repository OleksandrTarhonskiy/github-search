import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoText className="flex flex-column flex-center">
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
  color: #fff;
  font-size: 18px;
  margin-left: 40px;
`;

export default Header;