import React from 'react'
import { Link } from 'react-router-dom'

const Add_productTop = ({AddProduct}) => {


    return (
        <div className='flex items-center justify-between mb-6'>
            <h1 className='text-3xl font-normal text-[#2C2C2A] font-serif'>
                {AddProduct.titleFirst}
                <em className='italic text-[#6B8F71] font-cormorant'>{AddProduct.titleLast}</em>
            </h1>
            <div className='flex gap-2.5'>
                <Link
                    to="/products"
                    className='py-2 px-4 text-white border border-solid border-[#E0DDD6]  bg-[#4A7A52] hover:bg-[#2E5235] rounded-lg text-[13px] font-medium font-dm flex items-center gap-1.5 active:scale-95 transition-all duration-150'
                >
                    ← Back
                </Link>
            </div>
        </div>
    )
}

export default Add_productTop
