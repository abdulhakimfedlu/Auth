import { useEffect, useState } from "react";
import { useUser, useAuth, SignOutButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const { user, isLoaded: isUserLoaded, isSignedIn } = useUser();
    const { getToken } = useAuth();
    const navigate = useNavigate();
    const [backendData, setBackendData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (isUserLoaded && !isSignedIn) {
            navigate("/");
        }
    }, [isUserLoaded, isSignedIn, navigate]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await getToken();
                const response = await fetch('http://localhost:5000/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                setBackendData(data);
            } catch (error) {
                console.error("Error fetching backend data:", error);
            } finally {
                setLoading(false);
            }
        };

        if (isSignedIn) {
            fetchData();
        }
    }, [isSignedIn, getToken]);

    if (!isUserLoaded || loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
                <div className="flex flex-col items-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
                    <p className="mt-4 text-green-600 font-medium">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-green-100">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-green-600 mb-1">Qedami</h1>
                            <p className="text-gray-600">Welcome back, {user?.firstName || user?.username || "User"}!</p>
                        </div>
                        <SignOutButton>
                            <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-lg transition-colors shadow-md">
                                Sign Out
                            </button>
                        </SignOutButton>
                    </div>
                </div>

                {/* User Info Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Profile</h2>

                    <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <h3 className="text-sm font-medium text-green-800 mb-2">Email Address</h3>
                            <p className="text-gray-700">{user?.primaryEmailAddress?.emailAddress}</p>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <h3 className="text-sm font-medium text-green-800 mb-2">Backend Response</h3>
                            <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono overflow-x-auto">
                                {JSON.stringify(backendData, null, 2)}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
