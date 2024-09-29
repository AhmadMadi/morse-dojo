// src/app/dashboard/layout.tsx
import { ReactNode } from 'react';
import MorseSimulator from '../ui/global/dashboard/MorseSimulator';

export default function Dashboard() {
  return (
    <div className="flex h-screen place-content-center mt-10">
      <MorseSimulator />
    </div>
  );
}
