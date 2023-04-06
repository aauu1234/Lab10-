import React from 'react';

interface HeaderProps {
  // Define any props that the component needs here
}

const Header = (props: HeaderProps): JSX.Element => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Hello Manmoud</h1>
    </>
  );
}

export default Header;