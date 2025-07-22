'use client'

import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const getNextThursday = () => {
      const now = new Date();
      const currentDay = now.getDay(); // 0 (Sun) to 6 (Sat)
      const daysUntilThursday = (4 - currentDay + 7) % 7 || 7;
      const nextThursday = new Date(now);
      nextThursday.setDate(now.getDate() + daysUntilThursday);
      nextThursday.setHours(0, 0, 0, 0); // Midnight CST

      // Adjust to CST (UTC-6 or UTC-5 with daylight saving)
      const offsetCST = -6 * 60;
      const localOffset = nextThursday.getTimezoneOffset();
      const diffMinutes = offsetCST - localOffset;
      nextThursday.setMinutes(nextThursday.getMinutes() + diffMinutes);

      return nextThursday;
    };

    const updateCountdown = () => {
      const now = new Date();
      const target = getNextThursday();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft('00:00:00');
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const format = (n: number) => n.toString().padStart(2, '0');
      setTimeLeft(`${format(hours)}:${format(minutes)}:${format(seconds)}`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <style>{`
          html, body, *, *::before, *::after {
            font-family: 'Times New Roman', serif;
            margin: 0;
            padding: 0;
            background-color: #000000;
            min-height: 100vh;

            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;

            -webkit-user-drag: none;
            -webkit-touch-callout: none;

            touch-action: none;
          }
        `}</style>
      </Head>
      <main className="bg-black text-white p-4 min-h-screen select-none">
        <h1 className="text-3xl mb-1">kimochi apparel</h1>
        <p className="text-xl mb-1">{timeLeft}</p>
        <footer className="text-sm mb-4">&copy; 2025 kimochi. all rights reserved.</footer>
      </main>
    </>
  );
}
