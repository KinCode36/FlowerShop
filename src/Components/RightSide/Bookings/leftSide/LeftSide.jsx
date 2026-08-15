import React, { useState } from "react";


const LeftSide = ({ events, setSelectedEvent }) => {
    const [month, setMonth] = useState(5); // June
    const [year, setYear] = useState(2026);

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    // Convert Sunday-first to Monday-first
    const startingDay = firstDay === 0 ? 6 : firstDay - 1;

    const days = [];

    for (let i = 0; i < startingDay; i++) {
        days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        days.push(day);
    }

    const previousMonth = () => {
        if (month === 0) {
            setMonth(11);
            setYear((prev) => prev - 1);
        } else {
            setMonth((prev) => prev - 1);
        }
    };

    const nextMonth = () => {
        if (month === 11) {
            setMonth(0);
            setYear((prev) => prev + 1);
        } else {
            setMonth((prev) => prev + 1);
        }
    };

    return (
        <div className="bg-white border border-[#E0DDD6] rounded-2xl overflow-hidden">

            {/* Calendar */}
            <div className="bg-white border border-[#E0DDD6] rounded-2xl overflow-hidden">

                {/* Calendar Header */}
                <div className="flex items-center justify-between px-7 py-6 border-b border-[#E0DDD6]">
                    <h2 className="text-lg font-semibold text-[#202020]">
                        {monthNames[month]} {year}
                    </h2>

                    <div className="flex gap-3">
                        <button
                            onClick={previousMonth}
                            className="px-4 py-2 border border-[#E0DDD6] rounded-lg text-sm hover:bg-[#F5F3EF] transition cursor-pointer"
                        >
                            ← Prev
                        </button>

                        <button
                            onClick={nextMonth}
                            className="px-4 py-2 border border-[#E0DDD6] rounded-lg text-sm hover:bg-[#F5F3EF] transition cursor-pointer"
                        >
                            Next →
                        </button>
                    </div>
                </div>

                {/* Calendar Body */}
                <div className="p-7">

                    {/* Week Names */}
                    <div className="grid grid-cols-7 mb-4">
                        {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
                            (day) => (
                                <div
                                    key={day}
                                    className="text-center text-xs tracking-wider text-[#68717A]"
                                >
                                    {day}
                                </div>
                            )
                        )}
                    </div>

                    {/* Dates */}
                    <div className="grid grid-cols-7 gap-1.5">
                        {days.map((day, index) => {
                            const dateKey = day
                                ? `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
                                : null;

                            const event = dateKey ? events[dateKey] : null;

                            return (
                                <div
                                    key={index}
                                    onClick={() => event && setSelectedEvent(event)}
                                    className={` min-h-[88px] rounded-xl border p-2 relative transiti ${event
                                            ? "border-[#E9B5AE] bg-[#FDF0EE] cursor-pointer hover:bg-[#FBE8E5]"
                                            : "border-[#E0DDD6] bg-white"
                                        } ${day === 4 ? "border-[#6B8F71]" : ""} ${day === 8 ? "bg-[#EAF2EC] border-[#6B8F71]" : ""} `} >
                                    {day && (
                                        <>
                                            <span className="text-sm text-[#202020]">
                                                {day}
                                            </span>

                                            {event && (
                                                <p className="absolute bottom-4 left-0 right-0 text-center text-xs text-[#844141] overflow-hidden">
                                                    {event.name}
                                                </p>
                                            )}
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default LeftSide;