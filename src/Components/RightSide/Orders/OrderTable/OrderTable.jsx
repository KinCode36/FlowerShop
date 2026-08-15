import React from 'react';
import OrdertableHead from './OrdertableHead';
import OrderTableBody from './OrderTableBody';

const OrderTable = ({
  orders,
  tableHeaders,
  selectedOrders,
  setSelectedOrders,
  onDeleteOrder,
}) => {

  const statusStyles = {
    Confirmed:
      'bg-green-100 text-green-700 before:text-green-500',

    Pending:
      'bg-yellow-100 text-yellow-700 before:text-yellow-500',

    Cancelled:
      'bg-red-100 text-red-700 before:text-red-500',

    Delivered:
      'bg-blue-100 text-blue-700 before:text-blue-500',

    Preparing:
      'bg-orange-100 text-orange-700 before:text-orange-500',

    'Out-for-delivery':
      'bg-purple-100 text-purple-700 before:text-purple-500',
  };

  return (
    <>
      <OrdertableHead
        tableHeaders={tableHeaders}
      />

      <OrderTableBody
        orders={orders}
        statusStyles={statusStyles}
        selectedOrders={selectedOrders}
        setSelectedOrders={setSelectedOrders}
       
      />
    </>
  );
};

export default OrderTable;