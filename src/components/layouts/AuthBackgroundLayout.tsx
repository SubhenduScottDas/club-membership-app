import { ReactNode } from "react";

export default function AuthBackgroundLayout({
  children,
  showContainer = true,
}: {
  children: ReactNode;
  showContainer?: boolean;
}) {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-black/60">
      <div className="absolute inset-0 -z-20 bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }} />
      <div className="absolute inset-0 -z-10 bg-red-950/60" />

      {showContainer ? (
        <div className="w-full max-w-sm bg-white/80 backdrop-blur-md p-6 rounded shadow-md space-y-6">
          {children}
        </div>
      ) : (
        children
      )}
    </main>
  );
}
