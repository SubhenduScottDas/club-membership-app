import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Membership App',
  description: 'Self-onboarding and member portal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md text-red-700 px-6 py-4 flex justify-between items-center shadow-sm">
          <Link href="/" className="font-bold text-lg hover:underline">Gooner Adda</Link>
          <div className="space-x-4 text-sm">
            <Link href="/login" className="hover:underline">Login</Link>
            <Link href="/register" className="hover:underline">Register</Link>
          </div>
        </nav>
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
