import React from 'react'

const DashFootRightBodyBottom = () => {
    const events = [
        {
            id: 1,
            day: 14,
            month: "Jun",
            title: "Sharma Wedding",
            category: "Wedding Decor",
            package: "Gold Luxe",
            bg: "#EAF2EB",
            monthColor: "#6B8F71",
        },
        {
            id: 2,
            day: 18,
            month: "Jun",
            title: "Corporate Meetup",
            category: "Event Management",
            package: "Silver Plus",
            bg: "#EAF3FF",
            monthColor: "#4B7BEC",
        },
        {
            id: 3,
            day: 22,
            month: "Jun",
            title: "Birthday Celebration",
            category: "Party Decor",
            package: "Premium",
            bg: "#FFF4E8",
            monthColor: "#E67E22",
        },
        {
            id: 4,
            day: 29,
            month: "Jun",
            title: "Mehta Engagement",
            category: "Engagement Decor",
            package: "Diamond",
            bg: "#F6EFFF",
            monthColor: "#8E44AD",
        },
    ];
    return (
        <div className='flex flex-col gap-0'>
            {events.map((event) => (
                <div key={event.id} className='flex items-center gap-3 py-3 px-0 border-b border-solid border-[#E0DDD6]'>
                    <div className='size-10 rounded-[10px] flex flex-col items-center justify-center shrink-0' style={{ backgroundColor: event.bg }}>
                        <span className='text-[16px] font-bold text-[#2C2C2A] leading-none'>
                            {event.day}
                        </span>
                        <span className='text-[9px] font-semibold uppercase text-[#6B8F71] tracking-wider' style={{ color: event.monthColor }}>{event.month}</span>
                    </div>
                    <div className='flex-1'>
                        <div className='text-sm font-semibold text-[#2C2C2A]'>
                            {event.title}
                        </div>
                        <div className='text-[11px] text-[#7A7A76]'>
                            {event.category}
                        </div>
                    </div>
                    <div className='text-[11px] font-semibold py-[3px] px-2 rounded-[6px] bg-[#F4F3EF] text-[#4A4A47]'>
                        {event.package}
                    </div>
                </div>
            ))}

        </div>
    )
}

export default DashFootRightBodyBottom
