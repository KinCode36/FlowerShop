import React from "react";
import DashboardTableHead from "./DashboardTableHead";
import DashboardTableBody from "./DashboardTableBody";



const DashboardTable = ({orders},) => {
  const tableHeaders = [
    { id: 1, title: "Order ID" },
    { id: 2, title: "Customer" },
    { id: 3, title: "Items" },
    { id: 4, title: "Amount" },
    { id: 5, title: "Status" },
    { id: 6, title: "Date" },
  ];
  return (
    <table className="w-full border-collapse bg-white">
      <DashboardTableHead tableHeaders = {tableHeaders}/>
      <DashboardTableBody orders={orders} />
    </table>
  );
};

export default DashboardTable;