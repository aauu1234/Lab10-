import React from 'react';
import { Card, Space, DatePicker, Button,DatePickerProps,Row,Col } from 'antd';
const { Meta } = Card;
import 'antd/dist/reset.css';
import CardRow from './CardRow';
import Header from './Header';

interface CardContentProps {
  // Define any props that the component needs here
}

const CardContent = (props: CardContentProps): JSX.Element => {
  return (
    <>
      <Header/>
      <CardRow/>
      <CardRow/>
      <CardRow/>
    </>
  );
}