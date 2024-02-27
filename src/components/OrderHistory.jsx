import React from 'react'
import { Table } from 'antd';
const { Column, ColumnGroup } = Table;
const data = [
  {
    key: '1',
    name: '5-speed R151 manual 6-speed AC60 automatic',
    createdDate: 'Dec-07-2023',
    deliveryDate: 'Jan-15-2024',
    code: '2TR-FE',
  },
  {
    key: '2',
    name: '5-speed R151 manual 6-speed RC60 manual',
    createdDate: 'Dec-20-2024',
    deliveryDate: 'Jan-10-2024',
    code: '2GD-FTV',
  },
  {
    key: '3',
    name: '6-speed AC60 automatic',
    createdDate: 'Jan-8-2024',
    deliveryDate: 'Jan-24-2024',
    code: '2GD-FTV',
  },
  {
    key: '4',
    name: '5-speed R151 manual 6-speed RC60 manual 6-speed AC60 automatic',
    createdDate: 'Jan-15-2024',
    deliveryDate: 'Feb-2-2024',
    code: '1GD-FTV',
  },
];

const OrderHistory = () => {
  return (
    <>
     <h2 style={{textAlign:'center'}}>User History</h2>
    
    <Table dataSource={data}>
      <Column title="Name" dataIndex="name" key="name" />
      <Column title="Engine Code" dataIndex="code" key="code" />
    <ColumnGroup title="Date">
      <Column title="Created Date" dataIndex="createdDate" key="createdDate" />
      <Column title="Delivery Date" dataIndex="deliveryDate" key="deliveryDate" />
    </ColumnGroup>
  </Table>
  </>
  )
}

export default OrderHistory