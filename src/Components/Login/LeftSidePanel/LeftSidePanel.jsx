import React from 'react'
import BrandName from './BrandName/BrandName'
import Middle from './Middle/Middle'
import LeftSidePanelFooter from './LeftSidePanelFooter/LeftSidePanelFooter'

const LeftSidePanel = ({type}) => {
    
    return (
        <section className='relative flex w-full flex-col overflow-hidden bg-[#292927] px-5 py-6 text-white sm:px-7 sm:py-7 lg:min-h-screen lg:w-[40%] lg:px-10 lg:py-10 xl:w-[42%] xl:px-12'>

            <BrandName />
            <Middle type = {type} />
            <LeftSidePanelFooter/>

        </section>
    )
}

export default LeftSidePanel
