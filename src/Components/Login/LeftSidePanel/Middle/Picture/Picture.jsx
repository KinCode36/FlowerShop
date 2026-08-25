import React from 'react'
import Back from './Back/back'
import FrontContent from './Front/FrontContent'

const Picture = () => {
    return (
        <div className='h-40 w-64 mb-7 sm:block sm:mb-9 lg:mb-12 relative hidden '>
            <Back/>
            <FrontContent/>
        </div>
    )
}

export default Picture
