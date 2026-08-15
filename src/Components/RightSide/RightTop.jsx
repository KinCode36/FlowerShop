import React from 'react'
import { Link } from 'react-router-dom'

const ProductsTop = ({ rightTop }) => {
  return (

    <div className='page-toolbar flex items-center justify-between gap-4 mb-6'>
      <h1 className='page-title text-3xl font-normal text-[#2C2C2A] font-serif'>
        {rightTop.titleFirst}
        <em className='italic text-[#6B8F71] font-cormorant'> {rightTop.titleLast}</em>
      </h1>
      <div className='page-actions flex gap-2.5 items-center justify-center'>
        <button className='py-2 px-4 text-[#4A4A47] border border-solid border-[#E0DDD6] rounded-lg text-[13px] font-medium cursor-pointer font-dm flex items-center gap-1.5'>
          📤 Export CSV
        </button>
        <div className='py-2 px-4 text-white border border-solid border-[#E0DDD6]  bg-[#4A7A52] hover:bg-[#2E5235] rounded-lg text-[13px] font-medium font-dm flex items-center gap-1.5 transition-all duration-150 active:scale-95'>

          <Link to='/add_Products'>{rightTop.button}</Link>
        </div>
      </div>
    </div>
  )
}

export default ProductsTop
