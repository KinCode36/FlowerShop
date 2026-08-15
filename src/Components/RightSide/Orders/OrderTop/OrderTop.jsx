import React from 'react'

const OrderTop = () => {
  return (
    <div className='flex items-center justify-between mb-6'>
      <h1 className='text-3xl font-normal text-[#2C2C2A] font-serif'>
        Order 
        <em className='italic text-[#6B8F71] font-cormorant'> Management</em>
      </h1>
      <div className='flex gap-2.5'>
        <button className='py-2 px-4 text-[#4A4A47] border border-solid border-[#E0DDD6] rounded-lg text-[13px] font-medium cursor-pointer font-dm flex items-center gap-1.5'>
            📤 Export CSV
        </button>
      </div>
    </div>
  )
}

export default OrderTop
