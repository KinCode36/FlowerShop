import React from 'react'

const Terms = () => {
    return (
        <div className='flex items-center cursor-pointer gap-2 my-4'>
            <input type="checkbox" id='rememberMe' className='size-4 accent-[#4d8258]' />
            <label className='text-xs text-gray-500' htmlFor='rememberMe' required>
                I agree to the Terms & Conditions and Privacy Policy</label>
        </div>
    )
}

export default Terms
