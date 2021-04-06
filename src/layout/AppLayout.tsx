import React from 'react';

import Header from './Header';

interface IGuestLayoutProps {
  children?: React.ReactNode;
}

const AppLayout: React.FC<IGuestLayoutProps> = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default AppLayout;
