import React from 'react'
import LeftNav from './LeftNav'
import RightNav from './RightNav'

const Nav = ({ onMenuClick }) => {
  return (
    <nav className="admin-navbar fixed top-0 left-60 right-0 z-50 h-15 bg-white border-b border-solid border-[#E0DDD6] px-7 flex items-center">
      <button type="button" onClick={onMenuClick} aria-label="Open menu" className="mobile-menu-button mr-3 size-9 rounded-lg border border-[#E0DDD6] items-center justify-center hover:bg-[#F4F3EF]">☰</button>
      <LeftNav />
      <RightNav />
    </nav>
  );
};

export default Nav;