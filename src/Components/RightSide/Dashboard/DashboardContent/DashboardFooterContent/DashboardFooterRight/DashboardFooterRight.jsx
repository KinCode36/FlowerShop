import React from 'react'
import DashFootRightNav from './DashFootRightBody/DashFootRightBodyTop/DashFootRightTop'
import DashFootRightBody from './DashFootRightBody/DashFootRightBody'

const DashboardFooterRight = () => {
    return (
        <div className='bg-white border border-[#E0DDD6] rounded-xl overflow-hidden'>
            <DashFootRightNav />
            <DashFootRightBody />
        </div>
    )
}

export default DashboardFooterRight
