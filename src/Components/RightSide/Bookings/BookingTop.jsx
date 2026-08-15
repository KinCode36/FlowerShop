import React, { useState } from 'react';

const BookingTop = () => {
    const [view, setView] = useState("calendar");

    return (
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-normal text-[#2C2C2A] font-serif">
                Booking
                <em className="italic text-[#6B8F71] font-cormorant">
                    {" "}Management
                </em>
            </h1>

            <div className="flex gap-1 border border-[#E0DDD6] p-1 rounded-lg">
                <button
                    onClick={() => setView("calendar")}
                    className={`cursor-pointer px-3 py-1.5 rounded-md transition-colors ${view === "calendar"
                            ? "bg-[#E0DDD6]"
                            : "bg-transparent"
                        }`}
                >
                    📅 Calendar
                </button>

                <button
                    onClick={() => setView("list")}
                    className={`cursor-pointer px-3 py-1.5 rounded-md transition-colors ${view === "list"
                            ? "bg-[#E0DDD6]"
                            : "bg-transparent"
                        }`}
                >
                    ☰ List
                </button>
            </div>
        </div>
    );
};

export default BookingTop;