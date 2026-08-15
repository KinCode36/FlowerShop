import React from 'react';
import { useLocation } from 'react-router-dom';

const LeftNav = () => {
  const location = useLocation();

  const getPageTitle = () => {
    if (location.pathname.includes('/orders')) {
      return 'Orders';
    }

    if (location.pathname.includes('/products')) {
      return 'Products';
    }

    if (location.pathname.includes('/bookings')) {
      return 'Bookings';
    }

    if (location.pathname.includes('/add_Products')) {
      return 'Add New Products';
    }

    if (location.pathname.includes('/settings')) {
      return 'Settings';
    }
    if (location.pathname.includes('/UserInformation')) {
      return 'User Information';
    }

    return 'Dashboard';
  };

  return (
    <div>
      <h1 className="font-cormorant text-2xl text-[#2C2C2A]">
        {getPageTitle()}
      </h1>
    </div>
  );
};

export default LeftNav;