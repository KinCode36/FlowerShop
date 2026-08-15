import React from 'react'

const DashFootleftBodyBottom = () => {
    const stats = [
  {
    id: 1,
    title: "Total Revenue",
    value: "₹2,84,500",
  },
  {
    id: 2,
    title: "Avg Order",
    value: "₹1,240",
  },
  {
    id: 3,
    title: "Conversion",
    value: "3.8%",
  },
];
  return (
     <div className='mt-4 flex justify-evenly gap-5'>
              {stats.map((item)=>(
                 <div key={item.id}>
                    <div className='text-[11px] text-[#7a7a76] mb-0.5'>{item.title}</div>
                    <div className='text-[16px] font-bold text-[#2C2C2A]'>{item.value}</div>
                </div>
              ))}
               
            </div>
  )
}

export default DashFootleftBodyBottom
