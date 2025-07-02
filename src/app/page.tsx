// export default function Home() {
//   return (
//     <main className="relative flex min-h-screen items-center justify-center bg-black/60">
//       <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }}></div>
//       <div className="absolute inset-0 -z-10 bg-red-950/60"></div>

//       <h1 className="text-3xl text-red-700 text-shadow-2xs text-shadow-black font-bold">Welcome to Arsenal Bengal</h1>
//     </main>
//   );
// }

import AuthBackgroundLayout from '@/components/layouts/AuthBackgroundLayout';

export default function Home() {
  return (
    <AuthBackgroundLayout showContainer={false}>
      <h1 className="text-3xl text-red-700 text-shadow-2xs text-shadow-black font-bold">Welcome to Arsenal Bengal</h1>
    </AuthBackgroundLayout>
  );
}