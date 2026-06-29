'use client';
import { useState, useEffect } from 'react';

export default function Countdown({ targetDate, onLive }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, isLive: false });

  useEffect(() => {
    const interval = setInterval(() => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true });
        if (onLive) onLive(true);
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          isLive: false
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate, onLive]);

  if (timeLeft.isLive) {
    return (
      <div className="text-center bg-red-600 text-white font-bold py-3 px-6 rounded-full animate-pulse text-lg max-w-xs mx-auto">
        ⚽ MATCH IS LIVE NOW!
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-4 text-center">
      {Object.entries({ Days: timeLeft.days, Hours: timeLeft.hours, Mins: timeLeft.minutes, Secs: timeLeft.seconds }).map(([label, value]) => (
        <div key={label} className="bg-slate-800 p-3 rounded-xl border border-slate-700 min-w-[75px]">
          <span className="block text-2xl font-black text-teal-400">{value}</span>
          <span className="text-[10px] uppercase font-bold text-slate-400">{label}</span>
        </div>
      ))}
    </div>
  );
}
