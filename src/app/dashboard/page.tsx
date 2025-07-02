'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  // This can come from your auth context later
  const [role, setRole] = useState<'Bronze' | 'Red' | 'Gold' | 'Admin'>('Gold');

  const isAdmin = role === 'Admin';

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-900 to-black text-white p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">ABSC Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {/* Profile */}
        <Card title="Profile" href="/dashboard/profile" />

        {/* Events / Screening */}
        <Card title="Events & Screenings" href="/dashboard/events" />

        {/* League Table */}
        <Card title="League Table" href="/dashboard/league" />

        {/* Admin-only: View Members */}
        {isAdmin && <Card title="View Members" href="/dashboard/members" />}

        {/* Admin-only: ABSC FinOps */}
        {isAdmin && <Card title="ABSC FinOps" href="/dashboard/finops" />}

        {/* Admin-only: ABSC Insider */}
        {isAdmin && <Card title="ABSC Insider Control Panel" href="/dashboard/insider" />}

        {/* Donate */}
        <Card title="Donate" href="/donate" highlight />
      </div>
    </div>
  );
}

function Card({ title, href, highlight = false }: { title: string; href: string; highlight?: boolean }) {
  return (
    <Link
      href={href}
      className={`rounded-lg p-4 text-center shadow-md transition hover:scale-[1.02] hover:shadow-lg border
        ${highlight ? 'bg-red-700 text-white border-red-500' : 'bg-white/10 border-white/10'}
      `}
    >
      <span className="block text-lg font-semibold">{title}</span>
    </Link>
  );
}
