// src/app/dashboard/layout.tsx
import { ReactNode } from 'react';
import TopNav from '@/app/ui/global/topNav';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <TopNav />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
