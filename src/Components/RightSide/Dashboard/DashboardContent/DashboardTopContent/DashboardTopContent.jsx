import React from 'react'
import DashboardTopElement from './DashboardTopElement'

const DashboardTopContent = ({mid}) => {
 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      {mid.map((item, index) => (
        <DashboardTopElement
          key={index}
          {...item}
        />
      ))}
    </div>
  );
};

export default DashboardTopContent;