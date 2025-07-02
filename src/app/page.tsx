import AuthBackgroundLayout from '@/components/layouts/AuthBackgroundLayout';

export default function Home() {
  return (
    <AuthBackgroundLayout showContainer={false}>
      <h1 className="text-3xl text-red-700 text-shadow-2xs text-shadow-black font-bold">Welcome to Arsenal Bengal</h1>
    </AuthBackgroundLayout>
  );
}