import './globals.css';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Membership App',
  description: 'Self-onboarding and member portal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md text-red-700 px-6 py-4 flex justify-between items-center shadow-sm">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/ABSCRedLogo.png" alt="Logo" width={80} height={40} />
          </Link>
          <div className="space-x-2">
            <Link href="/login">
              <button className="px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-gray-700 transition">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="px-4 py-2 text-sm bg-amber-600 text-white rounded hover:bg-gray-700 transition">
                Register
              </button>
            </Link>
          </div>
        </nav> */}
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
