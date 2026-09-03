import React from 'react'
import { Link } from 'react-router-dom'

const CreateAccountFooter = () => {
    return (
        <div className='mt-7 text-center text-sm sm:text-sm'>
            <span className='text-[#666661]'>Already have an account? </span>
            <Link to='/login' type='button' className='text-[#397044] ml-1 font-semibold hover:underline'>Login</Link>
        </div>
    )
}

export default CreateAccountFooter
