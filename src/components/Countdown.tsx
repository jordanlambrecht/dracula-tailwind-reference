import React, { useState, useEffect } from 'react';

const CircularCountdownTimer = ({ interval }) => {
  const [timeLeft, setTimeLeft] = useState(interval);
  const circumference = 100; // Full circumference of the circle

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : interval));
    }, 1000);

    return () => clearInterval(timer);
  }, [interval]);

  // To keep the circle moving clockwise, we need to ensure the strokeDashoffset decreases with time
  const percentage = (timeLeft / interval) * 100;
  const strokeDashoffset = (percentage / 100) * circumference;

  return (
    <div className="circular-timer text-green flex justify-center items-center relative">
      <svg viewBox="0 0 36 36" className="circular-chart absolute">
        <path
          className="circle-bg"
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle fill-dracula"
          strokeDasharray={`${circumference}`}
          strokeDashoffset={circumference - strokeDashoffset*-1}
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
       
      </svg>
       <p className=" text-dracula">
          {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
        </p>
    </div>
  );
};

export default CircularCountdownTimer;