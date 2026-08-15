import React from 'react';

const OrderMid = ({ activeStatus, setActiveStatus }) => {
  const statuses = [
    'All',
    'Pending',
    'Confirmed',
    'Preparing',
    'Out-for-delivery',
    'Delivered',
    'Cancelled',
  ];

  return (
    <div className="flex gap-2 bg-[#F4F3EF] p-1 rounded-lg border border-solid border-[#E0DDD6] w-fit mb-5">
      {statuses.map((status) => (
        <button
          key={status}
          onClick={() => setActiveStatus(status)}
          className={`py-1.5 px-3.5 rounded-[6px] text-[12px] font-medium cursor-pointer font-dm whitespace-nowrap transition-all duration-150
            ${
              activeStatus === status
                ? 'bg-white text-[#2C2C2A] shadow-[0_1px_3px_rgba(0,0,0,0.08)]'
                : 'text-[#7A7A76]'
            }`}
        >
          {status}
        </button>
      ))}
    </div>
  );
};

export default OrderMid;