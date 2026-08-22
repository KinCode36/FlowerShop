import React from 'react'

const BrandName = () => {
  return (
    <section className='w-[42%] bg-[#292927] p-10 '>
      <div>
        <h1 className='text-[#e6ac8f] font-serif font-medium italic text-2xl sm:text-3xl'>Nitin</h1>
        <p className='uppercase mt-1 text-[12px] text-[#999994] tracking-[2px] '>Admin Portal</p>
      </div>
      <div className='my-0 max-w-md py-8 sm:py-10 lg:my-auto lg:py-12 '>
        <div className='h-40 w-64 mb-7 sm:block sm:mb-9 lg:mb-12 relative hidden '>
          <div className='absolute left-8 top-5 h-32 w-48 overflow-hidden bg-white rounded-lg'>
            <div className='flex bg-[#4d8258] h-5 items-center gap-1.5 px-2'>
              <span className='size-1.5 rounded-full bg-white'></span>
              <span className='size-1.5 rounded-full bg-white'></span>
              <span className='size-1.5 rounded-full bg-white'></span>
            </div>
            <div className='flex h-27 items-end gap-2 p-5 '>
              <div className='h-8 w-7 rounded-t bg-[#dceade]'></div>
              <div className='h-12 w-7 rounded-t bg-[#dceade]'></div>
              <div className='h-10 w-7 rounded-t bg-[#dceade]'></div>
              <div className='h-16 w-7 rounded-t bg-[#dceade]'></div>
            </div>
          </div>
          <div className='absolute bottom-0 right-1 h-16 w-14 flex justify-center items-center text-2xl border-4 border-white rounded-3xl bg-[#4d8258]'>
            🔒
          </div>
        </div>
        <h1 className='font-serif font-normal text-white text-3xl '>Welcome Back!</h1>
        <p className='font-normal text-[rgb(184,184,179)] text-sm leading-6'>Sign in to continue managing your dashboard.</p>
        <div className='mt-7 hidden space-y-5 md:block lg:mt-9'>
          <Feature icon="📊" tittle="Manage Orders" description="Track & manage all orders" />
          <Feature icon="📦" tittle="Manage Products" description="Add, update and organize prodcuts" />
          <Feature icon="👥" tittle="Manage Bookings" description="View and handle all bookings" />
        </div>
      </div>
      <div className='text-xs text-[#888884] leading-6 lg:block hidden'>
        © 2026 Nitin Admin Portal <br /> All rights reserved
      </div>

    </section>
  )
};

const Feature = ({ icon, tittle, description }) => (
  <div className='flex items-center gap-4'>
    <div className='bg-white/[0.08] shrink-0 size-11 flex items-center justify-center text-lg rounded-lg'>
      {icon}
    </div>
    <div>
      <p className='font-medium text-white text-sm'>{tittle}</p>
      <p className='mt-1 text-xs text-[#a4a4a0]'>{description}</p>
    </div>
  </div>
)
export default BrandName
