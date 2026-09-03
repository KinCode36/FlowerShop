import {Link} from 'react-router-dom'

const LoginPageFooter = () => {
    return (
        <div className='mt-7 text-center text-xs sm:text-sm'>
            <span className='text-[#666661]'>Don't have an account? </span>
            <Link to='/create-account' type='button' className='text-[#397044] ml-1 font-semibold hover:underline'>Create Account</Link>
        </div>
    )
}

export default LoginPageFooter
