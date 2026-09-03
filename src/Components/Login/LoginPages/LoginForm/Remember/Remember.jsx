import React from 'react'

const Remember = () => {
  return (
    <div className='flex items-center cursor-pointer gap-2'>
      <input type="checkbox" id='rememberMe' className='size-4 accent-[#4d8258]' />
      <label className='text-sm text-gray-700' htmlFor='rememberMe'>Remember Me</label>
    </div>
  )
}

export default Remember
