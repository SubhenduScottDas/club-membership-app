'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, LayoutDashboard, User, ShieldCheck, Trophy, Wallet, CalendarHeart, LogOut } from 'lucide-react';

export default function ABSCAppShell() {
  const router = useRouter();
  const pathname = usePathname();
  const [role, setRole] = useState<'Bronze' | 'Red' | 'Gold' | 'Admin'>('Admin');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isAdmin = role === 'Admin';

  const navItems = [
    { title: 'Home', href: '/dashboard', icon: LayoutDashboard },
    { title: 'Profile', href: '/dashboard/profile', icon: User },
    { title: 'Events & Screenings', href: '/dashboard/events', icon: CalendarHeart },
    { title: 'League Table', href: '/dashboard/league', icon: Trophy },
    { title: 'Donate', href: '/donate', icon: Wallet },
  ];

  const adminItems = [
    { title: 'View Members', href: '/dashboard/members', icon: User },
    { title: 'ABSC FinOps', href: '/dashboard/finops', icon: Wallet },
    { title: 'ABSC Insider', href: '/dashboard/insider', icon: ShieldCheck },
  ];

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar (responsive) */}
      <aside className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-gray-100 border-r p-4 flex flex-col justify-between transition-transform duration-200 ease-in-out md:relative md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div>
          <div className="text-2xl font-bold text-red-800 mb-4">ABSC Dashboard</div>

          <nav className="flex flex-col space-y-2">
            {navItems.map(({ title, href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center space-x-3 p-2 rounded hover:bg-gray-200 ${pathname === href ? 'bg-red-100 font-semibold text-red-900' : ''
                  }`}
              >
                <Icon className="w-5 h-5 text-red-700" />
                <span>{title}</span>
              </Link>
            ))}
          </nav>

          {isAdmin && (
            <>
              <hr className="my-4 border-gray-300" />
              <div className="font-semibold text-sm text-gray-600">Admin Panel</div>
              <nav className="flex flex-col space-y-2">
                {adminItems.map(({ title, href, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`flex items-center space-x-3 p-2 rounded hover:bg-gray-200 ${pathname === href ? 'bg-red-100 font-semibold text-red-900' : ''
                      }`}
                  >
                    <Icon className="w-5 h-5 text-red-700" />
                    <span>{title}</span>
                  </Link>
                ))}
              </nav>
            </>
          )}
        </div>

        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 p-2 mt-6 text-red-700 hover:bg-red-100 rounded"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-25 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between bg-gray-50 border-b px-4 py-2 shadow-sm md:hidden">
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="w-6 h-6 text-red-800" />
          </button>
          <div className="text-lg font-semibold text-red-800">ABSC</div>
          <button onClick={handleLogout}>
            <LogOut className="w-5 h-5 text-gray-500" />
          </button>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">
          <div className="text-xl font-semibold text-red-900">Welcome to ABSC, {role} member!</div>
          <p className="mt-2 text-gray-600">Select an option from the sidebar to get started.</p>
        </main>
      </div>
    </div>
  );
}