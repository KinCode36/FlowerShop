import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import OrderTop from './OrderTop/OrderTop';
import OrderMid from './OrderMid/OrderMid';
import OrderTable from './OrderTable/OrderTable';
import OrderSelectionBar from './OrderSelectionBar/OrderSelectionBar';

const Orders = () => {
  const tableHeaders = [
    { id: 1, title: 'Order ID' },
    { id: 2, title: 'Customer' },
    { id: 3, title: 'Items' },
    { id: 4, title: 'Amount' },
    { id: 5, title: 'Status' },
    { id: 6, title: 'Date' },
    { id: 7, title: 'Actions' },
  ];

  // Get orders from Admin.jsx
  const { orders, setOrders } = useOutletContext();

  const [activeStatus, setActiveStatus] = useState('All');
  const [selectedOrders, setSelectedOrders] = useState([]);

  const filteredOrders =
    activeStatus === 'All'
      ? orders
      : orders.filter((order) => order.status === activeStatus);

  return (
    <div className="w-full min-w-0">
      <OrderTop />

      <OrderMid
        activeStatus={activeStatus}
        setActiveStatus={setActiveStatus}
      />

      {/* Selection Bar */}
      {selectedOrders.length > 0 && (
        <OrderSelectionBar
          selectedCount={selectedOrders.length}
        />
      )}

      {/* Orders Table */}
      <div className="w-full min-w-0 overflow-x-auto rounded-xl border border-[#E0DDD6] bg-white">
        <table className="w-full min-w-[900px] border-collapse">
          <OrderTable
            orders={filteredOrders}
            tableHeaders={tableHeaders}
            selectedOrders={selectedOrders}
            setSelectedOrders={setSelectedOrders}
          />
        </table>
      </div>
    </div>
  );
};

export default Orders;