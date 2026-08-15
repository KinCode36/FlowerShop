import React from 'react'
import LoginLogo from './LoginLogo'
import FooterLoginContent from './FooterLoginContent'

const LeftSideFooter = () => {
  return (
    <div className='flex items-center border-t-[1px] border-solid border-white/[0.08] gap-2.5 cursor-pointer mt-auto py-4 px-5'>
      <LoginLogo/>
      <FooterLoginContent/>
    </div>
  )
}

export default LeftSideFooter
