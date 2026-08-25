import React from 'react'

const FeatureContent = () => {
    return (
        <div className='mt-7 hidden space-y-5 md:block lg:mt-9'>
            <Feature icon="📊" tittle="Manage Orders" description="Track & manage all orders" />
            <Feature icon="📦" tittle="Manage Products" description="Add, update and organize prodcuts" />
            <Feature icon="👥" tittle="Manage Bookings" description="View and handle all bookings" />
        </div>
    )
}

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

export default FeatureContent
