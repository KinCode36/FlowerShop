import React from 'react'
import { Link } from 'react-router-dom'
const BookingTop = () => {
    return (
        <div className='flex items-center justify-between mb-6'>
            <h1 className='text-3xl font-normal text-[#2C2C2A] font-serif'>
                Booking
                <em className='italic text-[#6B8F71] font-cormorant'> Management</em>
            </h1>
            <div className='flex gap-2.5 '>
                <button className='cursor-pointer'>📅 Calendar</button>
                <button className='cursor-pointer'>☰ List</button>
            </div>
        </div>
    )
}

export default BookingTop
