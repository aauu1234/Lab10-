import React from 'react';
import { Card, Space, DatePicker, Button,DatePickerProps,Row,Col } from 'antd';
const { Meta } = Card;

interface ItemProps {
  // Define any props that the component needs here
}

const Item = (props: ItemProps): JSX.Element => {
  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </>
  );
}

export default Item;