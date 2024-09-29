'use client';

import Link from 'next/link';
import Logo from './ui/global/Logo';
import { useEffect, useState } from 'react';

export default function HomePage() {

  const [theme, setTheme] = useState('winter');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'winter';
      setTheme(storedTheme);
    }
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="text-4xl font-bold text-foreground">
        <Logo theme={theme}/>
        MorseDojo
      </h1>
      <p className="text-lg text-gray-400 max-w-lg mt-4">
        Master Morse code with interactive lessons and practice sessions. 
        Get started now and track your progress as you become a Morse code expert.
      </p>
      <Link href="/dashboard">
        <button className="btn btn-primary mt-6">
          Get Started
        </button>
      </Link>
    </main>
  );
}
