// src/app/dashboard/layout.tsx
import React, { ReactNode } from 'react';
import TopNav from '@/app/ui/global/topNav';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-5xl md:w-11/12 md:p-6"> {/* Adjusts for mobile and larger screens */}
        <TopNav />
        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
