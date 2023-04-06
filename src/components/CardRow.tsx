import React from 'react';
import { Card,Row,Col } from 'antd';
import 'antd/dist/reset.css';
import Item from './Item';

const { Meta } = Card;

interface CardRowProps {
  // Define any props that the component needs here
}

const CardRow = (props: CardRowProps): JSX.Element => {
  return (
    <main>   
      <Row gutter={16}>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Item/>
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Item/>
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Item/>
        </Col>
      </Row>
    </main>
  )
}

export default CardRow;