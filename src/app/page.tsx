'use client'

import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const getMidnightTonightCST = () => {
      const now = new Date();

      // Get tomorrow's date
      const midnightCST = new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate() + 1, // tomorrow
        6, 0, 0, 0 // 12:00 AM CST is 6:00 AM UTC (CST = UTC-6)
      ));

      return midnightCST;
    };

    const updateCountdown = () => {
      const now = new Date();
      const target = getMidnightTonightCST();
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
