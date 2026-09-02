import React from 'react'
import Picture from './Picture/Picture'
import WelcomeText from './WelcomeText/WelcomeText'
import FeatureContent from './Feature/FeatureContent'

const Middle = ({type}) => {
    return (
        <div className='my-0 max-w-md py-8 sm:py-10 lg:my-auto lg:py-12 '>
            <Picture />
            <WelcomeText type = {type}/>
            <FeatureContent />
        </div>
    )
}


export default Middle
