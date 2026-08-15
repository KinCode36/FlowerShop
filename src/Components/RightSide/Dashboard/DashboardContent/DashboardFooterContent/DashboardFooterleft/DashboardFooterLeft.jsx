import React from 'react'
import DashboardFooterLeftNav from './DashboardFooterLeftNav'
import DashboardFooterleftBody from './DashboardFooterLeftBody/DashboardFooterleftBody'

const DashboardFooterLeft = () => {
    return (
        <div className='bg-white border border-[#E0DDD6] rounded-xl overflow-hidden'>
            <DashboardFooterLeftNav />
            <DashboardFooterleftBody />
        </div>
    )
}

export default DashboardFooterLeft
