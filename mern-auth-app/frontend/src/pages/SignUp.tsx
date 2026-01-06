import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-lg">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-green-600">Qedami</h1>
                    <div className="h-1 w-20 bg-green-500 mx-auto rounded-full mt-2"></div>
                </div>
                <SignUp
                    path="/sign-up"
                    routing="path"
                    signInUrl="/sign-in"
                    forceRedirectUrl="/dashboard"
                    appearance={{
                        elements: {
                            rootBox: "mx-auto",
                            card: "bg-transparent shadow-none",
                            headerTitle: "text-gray-800 font-semibold",
                            headerSubtitle: "text-gray-600",
                            socialButtonsBlockButton: "bg-white border-green-200 hover:bg-green-50 text-gray-700 shadow-sm",
                            formButtonPrimary: "bg-green-600 hover:bg-green-700 text-white shadow-md",
                            formFieldInput: "bg-white border-gray-300 focus:border-green-500 focus:ring-green-500 shadow-sm",
                            footerActionLink: "text-green-600 hover:text-green-700",
                            identityPreviewEditButton: "text-green-600 hover:text-green-700",
                            formFieldLabel: "text-gray-700",
                            dividerLine: "bg-gray-200",
                            dividerText: "text-gray-500",
                            footer: "hidden",
                        },
                    }}
                />

                {/* Navigation to Sign In */}
                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Already have an account?{" "}
                        <a href="/sign-in" className="text-green-600 hover:text-green-700 font-semibold transition-colors">
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
