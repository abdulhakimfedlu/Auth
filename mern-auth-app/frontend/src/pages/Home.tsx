import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Navigate, Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-white">
            <SignedIn>
                <Navigate to="/dashboard" replace />
            </SignedIn>

            <SignedOut>
                <div className="max-w-md w-full px-6">
                    {/* Logo/Brand */}
                    <div className="text-center mb-8">
                        <h1 className="text-5xl font-bold text-green-600 mb-2">
                            Qedami
                        </h1>
                        <div className="h-1 w-20 bg-green-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Auth Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
                        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                            Welcome
                        </h2>

                        <div className="space-y-3">
                            <Link to="/sign-in" className="block">
                                <button className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                                    Sign In
                                </button>
                            </Link>

                            <Link to="/sign-up" className="block">
                                <button className="w-full py-3 px-4 bg-white hover:bg-green-50 text-green-600 font-medium rounded-lg border-2 border-green-600 transition-all duration-200 transform hover:-translate-y-0.5">
                                    Create Account
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Footer */}
                    <p className="text-center text-sm text-gray-500 mt-6">
                        Secure authentication powered by Clerk
                    </p>
                </div>
            </SignedOut>
        </div>
    );
}
