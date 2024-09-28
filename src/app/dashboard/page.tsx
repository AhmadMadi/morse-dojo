// src/app/dashboard/layout.tsx
import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Main Content */}
      <main className="flex-1 p-6">
        Hi
      </main>
    </div>
  );
}
