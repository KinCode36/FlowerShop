
import LeftSidePanel from '../LeftSidePanel/LeftSidePanel'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginPageTop from './LoginPageTop/LoginPageTop'
import LoginForm from './LoginForm/LoginForm'
import LoginPageFooter from './LoginPageFooter/LoginPageFooter'

const LoginPages = () => {


  return (
    <div className='bg-[#f5f4f0] min-h-screen w-full overflow-x-hidden'>
      <div className='flex min-h-screen flex-col lg:flex-row'>
        <LeftSidePanel type="login" />

        <main className='flex flex-1 w-full justify-center items-center px-4 py-8 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20'>
          <div className='bg-white w-full max-w-[480px] rounded-2xl border border-[#dfded9] p-5 shadow-[0_12px_35px_rbga(0,0,0,0,0.86)] sm:p-7 md:p-8 lg:p-9'>
            <LoginPageTop />
            <LoginForm />

            <div className='flex items-center gap-3 my-6'>
              <div className='h-px flex flex-1 bg-[#e2e1dc]'></div>
              <div className='text-xs text-[#999994]'>OR</div>
              <div className='h-px flex flex-1 bg-[#e2e1dc]'></div>
            </div>
            <LoginPageFooter/>
          </div>
        </main>
      </div>
    </div>
  )
}

export default LoginPages
