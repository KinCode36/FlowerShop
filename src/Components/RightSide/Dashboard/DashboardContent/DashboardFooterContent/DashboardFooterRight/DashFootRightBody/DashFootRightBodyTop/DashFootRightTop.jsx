import React from 'react'
import { Link } from 'react-router-dom'
const DashFootRightNav = () => {
    return (
        <div className='py-[18px] px-[22px] border-b border-[#E0DDD6] flex items-center justify-between'>
            <span className='text-sm font-semibold text-[#2C2C2A]'>
                Bookings
            </span>
            <Link to='/bookings' className='text-[12px] font-medium text-[#4A7A52] font-dm'>View all</Link>
        </div>
    )
}

export default DashFootRightNav
