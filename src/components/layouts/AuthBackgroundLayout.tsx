import { ReactNode } from "react";

export default function AuthBackgroundLayout({
    children,
    showContainer = true,
    showLogo = true,
}: {
    children: ReactNode;
    showContainer?: boolean;
    showLogo?: boolean;
}) {
    return (
        <div className="relative h-screen w-screen overflow-hidden">
            {/* Background layers */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/bg.jpg')" }}
            />
            <div className="absolute inset-0 z-10 bg-stone-800/80" />

            {/* Conditionally render logo */}
            {showLogo && (
                <img
                    src="/ABSCRedLogo.png"
                    alt="Logo"
                    className="absolute top-6 left-1/2 z-20 w50 h-24 -translate-x-1/2 object-contain drop-shadow-[0_0_15px_rgba(255,0,0,0.5)] brightness-110"
                />
            )}

            {/* Auth container centered */}
            <main className="relative z-20 flex h-full flex-col items-center justify-center">
                {showContainer ? (
                    <div className="w-full max-w-sm bg-white/80 backdrop-blur-md p-6 rounded shadow-md space-y-6">
                        {children}
                    </div>
                ) : (
                    children
                )}
            </main>
        </div>
    );
}
