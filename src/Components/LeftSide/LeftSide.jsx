import React from 'react'
import LeftSideTop from './LeftSideTop/LeftSideTop'
import MiddleTop from './Middle/MiddleTop/MiddleTop'
import Middle from './Middle/Middle'
import LeftSideFooter from './LeftsideFooter/LeftSideFooter'

const LeftSide = ({ isOpen = false, onClose }) => {
  return (
    <div className={`admin-sidebar bg-[#2C2C2A] w-[240px] flex flex-col shrink-0 fixed top-0 left-0 h-[100vh] overflow-y-auto z-[60] transition-transform duration-200 ${isOpen ? 'translate-x-0' : ''}`}>
      <button type='button' onClick={onClose} aria-label='Close menu' className='mobile-sidebar-close absolute top-4 right-4 text-white/80 text-2xl leading-none'>×</button>
      <LeftSideTop/>
      <Middle/>
      <LeftSideFooter/>
    </div>
  )
}

export default LeftSide
