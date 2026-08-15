import React from 'react'

const RightNav = () => {
  return (
    

      <div className="ml-auto flex items-center gap-3">
        <button className="w-9 h-9 rounded-lg border border-[#E0DDD6] flex items-center justify-center hover:bg-[#F4F3EF] relative">
          🔔
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#C8897A] border border-white"></span>
        </button>

        <button className="w-9 h-9 rounded-lg border border-[#E0DDD6] flex items-center justify-center hover:bg-[#F4F3EF]">
          👤
        </button>
      </div>
    
  )
}

export default RightNav
