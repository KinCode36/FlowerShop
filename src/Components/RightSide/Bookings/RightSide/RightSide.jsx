import React from "react";

const RightSide = ({ events, selectedEvent, setSelectedEvent }) => {
  const upcomingEvents = Object.entries(events)
    .map(([date, event]) => {
      const eventDate = new Date(`${date}T00:00:00`);

      return {
        ...event,
        date: eventDate.getDate(),
        month: eventDate
          .toLocaleString("en-US", { month: "short" })
          .toUpperCase(),
        fullDate: date,
      };
    })
    .sort((a, b) => new Date(a.fullDate) - new Date(b.fullDate));

  return (
    <div className="bg-white border border-[#E0DDD6] rounded-2xl overflow-hidden h-fit">
      {selectedEvent ? (
        <>
          {/* Header */}
          <div className="flex items-center justify-between px-7 py-6 border-b border-[#E0DDD6]">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#7A817D]">
                Event Details
              </p>

              <h2 className="text-xl font-semibold text-[#202020] mt-1">
                {selectedEvent.fullName}
              </h2>
            </div>

            <button
              onClick={() => setSelectedEvent(null)}
              className="w-8 h-8 rounded-full border border-[#E0DDD6] hover:bg-[#F5F3EF] cursor-pointer"
            >
              ×
            </button>
          </div>

          {/* Details */}
          <div className="p-7 space-y-6">

            <div>
              <p className="text-xs uppercase tracking-wider text-[#7A817D]">
                Customer
              </p>

              <p className="mt-1 text-base text-[#202020]">
                {selectedEvent.name}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-[#7A817D]">
                Event Type
              </p>

              <p className="mt-1 text-base text-[#202020]">
                {selectedEvent.type}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-[#7A817D]">
                Package
              </p>

              <p className="mt-1 text-base text-[#202020]">
                {selectedEvent.package}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-[#7A817D]">
                Status
              </p>

              <span
                className={`
                  inline-block mt-2 px-3 py-1.5 rounded-full
                  text-xs font-medium
                  ${
                    selectedEvent.status === "confirmed"
                      ? "bg-[#E5F0E7] text-[#55765D]"
                      : "bg-[#FFF0D8] text-[#A76D08]"
                  }
                `}
              >
                • {selectedEvent.status}
              </span>
            </div>

            <div className="flex gap-3 pt-2">
              <button className="flex-1 border border-[#E0DDD6] py-2.5 rounded-lg hover:bg-[#F5F3EF] cursor-pointer">
                Edit
              </button>

              <button className="flex-1 bg-[#6B8F71] text-white py-2.5 rounded-lg hover:opacity-90 cursor-pointer">
                View Booking
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Upcoming Events */}
          <div className="px-7 py-6 border-b border-[#E0DDD6]">
            <h2 className="text-lg font-semibold text-[#202020]">
              Upcoming Events
            </h2>
          </div>

          <div className="px-7">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.fullDate}
                onClick={() => setSelectedEvent(event)}
                className={`
                  flex items-center gap-4 py-5 cursor-pointer
                  hover:bg-[#FAF9F6]
                  transition
                  ${
                    index !== upcomingEvents.length - 1
                      ? "border-b border-[#E0DDD6]"
                      : ""
                  }
                `}
              >
                {/* Date */}
                <div
                  className={`
                    w-12 h-12 shrink-0 rounded-xl
                    flex flex-col items-center justify-center
                    ${
                      event.status === "pending"
                        ? "bg-[#FDF0EE]"
                        : "bg-[#EAF2EC]"
                    }
                  `}
                >
                  <span className="text-lg font-semibold leading-none">
                    {event.date}
                  </span>

                  <span className="text-[10px] tracking-wide text-[#6B8F71]">
                    {event.month}
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-[#202020]">
                    {event.fullName}
                  </h3>

                  <p className="text-sm text-[#70777D] mt-1">
                    {event.type} · {event.package}
                  </p>
                </div>

                {/* Status */}
                <span
                  className={`
                    shrink-0 px-3 py-1.5 rounded-full
                    text-xs font-medium
                    ${
                      event.status === "confirmed"
                        ? "bg-[#E5F0E7] text-[#55765D]"
                        : "bg-[#FFF0D8] text-[#A76D08]"
                    }
                  `}
                >
                  • {event.status}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RightSide;