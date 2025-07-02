export default function RegisterPage() {
    return (
        <>
            <h2 className="text-2xl font-bold text-center">Register</h2>
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-2 border rounded"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded"
                />
                <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full p-2 border rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border rounded"
                />
                <button type="submit" className="w-full p-2 bg-red-800 text-white rounded hover:bg-gray-500">
                    Register
                </button>
            </form>
            <p className="text-center text-sm">
                Already have an account? <a href="/login" className="text-amber-600 underline">Login</a>
            </p>
        </>
    );
}
