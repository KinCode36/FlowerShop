import React, { useState } from "react";
import BookingTop from "./BookingTop";
import LeftSide from "./leftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

const events = {
  "2026-06-14": {
    name: "Sharma",
    fullName: "Sharma Wedding",
    type: "Wedding Decor",
    package: "Gold Luxe",
    status: "confirmed",
  },

  "2026-06-18": {
    name: "TechCorp",
    fullName: "TechCorp Gala",
    type: "Corporate Event",
    package: "Silver Opulent",
    status: "confirmed",
  },

  "2026-06-21": {
    name: "Neha's",
    fullName: "Neha's Birthday",
    type: "Birthday Party",
    package: "Bronze Elegant",
    status: "pending",
  },

  "2026-06-28": {
    name: "Kapoor",
    fullName: "Kapoor Engagement",
    type: "Engagement",
    package: "Gold Luxe",
    status: "confirmed",
  },
};

const Bookings = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div>
      <BookingTop />

      <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_1fr] gap-6">
        <LeftSide
          events={events}
          setSelectedEvent={setSelectedEvent}
        />

        <RightSide
          events={events}
          selectedEvent={selectedEvent}
          setSelectedEvent={setSelectedEvent}
        />
      </div>
    </div>
  );
};

export default Bookings;