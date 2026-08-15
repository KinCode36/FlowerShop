import React from 'react';
import { Link } from 'react-router-dom';

const OrderTableBody = ({
  orders,
  statusStyles,
  selectedOrders,
  setSelectedOrders,
}) => {

  const handleCheckboxChange = (orderId) => {
    setSelectedOrders((prev) => {
      if (prev.includes(orderId)) {
        // Remove order if already selected
        return prev.filter((id) => id !== orderId);
      }

      // Add order
      return [...prev, orderId];
    });
  };

  return (
    <tbody>
      {orders.map((order) => (
        <tr key={order.id}>

          {/* Checkbox */}
          <td className="py-3 px-4 border-b border-[#E0DDD6]">
            <input
              type="checkbox"
              className="w-4 h-4 accent-[#4A7A52] cursor-pointer"
              checked={selectedOrders.includes(order.id)}
              onChange={() => handleCheckboxChange(order.id)}
            />
          </td>

          {/* Order ID */}
          <td className="font-mono font-semibold text-[#4a7a52] pl-[22px] py-3 px-4 border-b border-[#E0DDD6] text-sm">
            {order.id}
          </td>

          {/* Customer */}
          <td className="py-3 px-4 border-b border-[#E0DDD6] text-sm text-[#4A4A47]">
            <div className="flex items-center gap-2.5">

              <div
                className="size-[30px] rounded-lg flex items-center justify-center text-[12px] font-semibold text-white shrink-0"
                style={{ backgroundColor: order.avatarColor }}
              >
                {order.initials}
              </div>

              <div>
                <div className="font-semibold text-[#2C2C2A] text-sm">
                  {order.name}
                </div>

                <div className="text-[11px] text-[#7A7A76]">
                  {order.email}
                </div>
              </div>

            </div>
          </td>

          {/* Items */}
          <td className="py-3 px-4 border-b border-[#E0DDD6] text-sm">
            {order.product}
          </td>

          {/* Amount */}
          <td className="py-3 px-4 border-b border-[#E0DDD6] text-sm font-semibold">
            {order.amount}
          </td>

          {/* Status */}
          <td className="py-3 px-4 border-b border-[#E0DDD6] text-sm">
            <span
              className={`
                inline-flex items-center gap-1
                rounded-full px-[9px] py-[3px]
                text-[11px] font-semibold
                before:content-['•']
                before:text-[8px]
                ${statusStyles[order.status]}
              `}
            >
              {order.status}
            </span>
          </td>

          {/* Date */}
          <td className="py-3 px-4 border-b border-[#E0DDD6] text-sm text-[#7A7A76]">
            {order.date}
          </td>

          {/* Actions */}
          <td className="px-4 py-3 border-b border-[#E0DDD6]">
            <div className="flex items-center gap-2 whitespace-nowrap">

              {/* View */}
              <Link
                to={`/UserInformation/${order.id}`}
                className="rounded-lg border border-[#DDD9D0] px-4 py-2 text-[13px] font-medium hover:bg-[#F5F4F0] transition"
              >
                View
              </Link>

              {/* Update */}
              <Link
                to={`/UpdateOrder/${order.id}`}
                className="rounded-lg border border-[#DDD9D0] px-4 py-2 text-[13px] font-medium hover:bg-[#F5F4F0] transition"
              >
                Update
              </Link>

            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default OrderTableBody;