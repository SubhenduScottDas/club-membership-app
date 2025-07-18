'use client';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: replace with real auth later
    router.push('/dashboard');
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-center">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="text"
          placeholder="Membership ID or Email"
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password or OTP"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full p-2 bg-red-800 text-white rounded hover:bg-gray-500"
        >
          Login
        </button>
      </form>
      <p className="text-center text-sm">
        New here? <a href="/register" className="text-amber-600 underline">Register</a>
      </p>
    </>
  );
}
