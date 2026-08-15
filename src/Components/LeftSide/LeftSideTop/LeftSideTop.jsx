import React from 'react'
import { Link } from 'react-router-dom'
const LeftSideTop = () => {
  return (
    <div className='pt-6 px-6 pb-5 border-b border-white/10'>
      <div className='font-cormorant text-[22px] from-neutral-400 text-white'>
        <div className='italic text-[#e8bdb5]'>
            <Link to='/'>Nitin</Link>
        </div>
        <div className='text-[10px] font-semibold uppercase tracking-[0.12em] text-white/30 mt-0.5'>Admin Portal</div>
      </div>
    </div>
  )
}

export default LeftSideTop
