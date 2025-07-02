'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthBackgroundLayout from '@/components/layouts/AuthBackgroundLayout';

export default function Home() {
  const router = useRouter();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start animation immediately
    const animationTimeout = setTimeout(() => {
      setAnimate(true);
    }, 500); // delay before animation starts

    // Redirect after animation completes
    const redirectTimeout = setTimeout(() => {
      router.push('/login');
    }, 3000); // adjust for total animation duration

    return () => {
      clearTimeout(animationTimeout);
      clearTimeout(redirectTimeout);
    };
  }, [router]);

  return (
    <AuthBackgroundLayout showContainer={false}>
      <div className="relative flex h-screen w-full items-center justify-center">
        <img
          src="/ABSCRedLogo.png"
          alt="Logo"
          className={`transition-all duration-1000 ease-in-out 
            absolute z-30 object-contain
            ${animate ? 'top-6 left-1/2 w-48 h-24 -translate-x-1/2' : 'w-72 h-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}
          `}
        />
      </div>
    </AuthBackgroundLayout>
  );
}
