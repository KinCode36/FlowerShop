import React from 'react'

const DashFootLeftBodyTop = () => {
    const months = [
        { id: 1, name: "Jan", height: 82 },
        { id: 2, name: "Feb", height: 126 },
        { id: 3, name: "Mar", height: 95 },
        { id: 4, name: "Apr", height: 138 },
        { id: 5, name: "May", height: 110 },
        { id: 6, name: "Jun", height: 74 },
    ];
    return (
        <div className='h-40 flex items-end gap-2 pb-1'>
            {months.map((month) => (
                <div key={month.id} className='flex-1 flex items-center gap-1 flex-col'>
                    <div className='w-full bg-[#EAF2EB] rounded-t min-h-1 hover:bg-[#4A7A52] transition-all duration-150' style={{ height: `${month.height}px` }}></div>
                    <span className='text-2.5 text-[#7A7A76]'>
                        {month.name}
                    </span>
                </div>
            ))}

        </div>
    )
}

export default DashFootLeftBodyTop
