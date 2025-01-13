import React, { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
const ClockWidget = () => {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  const currentDate = dateTime.toLocaleDateString();
  const currentTime = dateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return (
    <div className="clock-widget">
      <FaClock className="icon" />
      <div className="time-date">
        <p className="current-time">{currentTime}</p>
        <p className="current-date">{currentDate}</p>
      </div>
    </div>
  );
};

export default ClockWidget;
