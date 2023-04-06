import React from 'react';

interface HelloProps {
  name: string;
}

const Hello = (props: HelloProps): JSX.Element => {
  const greeting = `Hello ${props.name}`;
  return <h1>{greeting}</h1>;
}

export default Hello;