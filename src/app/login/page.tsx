export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-black/60">
      <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }}></div>
      <div className="absolute inset-0 -z-10 bg-black/60"></div>

      <div className="w-full max-w-sm bg-white/80 backdrop-blur-md p-6 rounded shadow-md space-y-6">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form className="space-y-4">
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
          <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Login
          </button>
        </form>
        <p className="text-center text-sm">
          New here? <a href="/register" className="text-blue-600 underline">Register</a>
        </p>
      </div>
    </main>
  );
}
