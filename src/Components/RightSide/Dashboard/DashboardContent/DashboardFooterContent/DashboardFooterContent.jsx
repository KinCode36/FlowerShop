import React from 'react'
import { Link } from 'react-router-dom'
import DashboardFooterLeft from './DashboardFooterleft/DashboardFooterLeft'
import DashboardFooterRight from './DashboardFooterRight/DashboardFooterRight'
const DashboardFooterContent = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6'>
            <DashboardFooterLeft/>
          <DashboardFooterRight/>
        </div>
    )
}

export default DashboardFooterContent
