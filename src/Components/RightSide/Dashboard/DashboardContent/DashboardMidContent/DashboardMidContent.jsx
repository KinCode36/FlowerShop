import React from 'react'
import DashboardTable from './DashboardTable/DashboardTable'
import DashboardMidNav from './DashboardMidNav'

const DashboardMidContent = ({orders}) => {
    return (
        <div className="bg-white rounded-xl border border-[#E0DDD6] overflow-hidden">
            <DashboardMidNav />

            <div className="overflow-x-auto">
                <DashboardTable orders={orders}/>
            </div>

        </div>
    )
}

export default DashboardMidContent
