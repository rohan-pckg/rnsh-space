"use client";

import { useEffect, useState } from "react";

interface UTC8ClockProps {
  className?: string;
}

const UTC8Clock = ({ className }: UTC8ClockProps) => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (time === null) {
    return (
      <div className={className}>
        <p className="text-xs">Loading...</p>
      </div>
    );
  }

  const formattedTime = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(time);

  return (
    <div className={className}>
      <div>
        <p className="font-semibold">UTC+8</p>
        <p>{formattedTime}</p>
      </div>
    </div>
  );
};

export default UTC8Clock;
