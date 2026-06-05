"use client";

import { useRouter } from "next/navigation";

export default function Error({ error, reset }) {
  const router = useRouter();

  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-red-600 mb-4">
        Something went wrong!
      </h1>
      <p className="text-gray-700 mb-6">
        {error?.message || "Unexpected error occurred"}
      </p>

      {/* Sign in button */}
      <button
        onClick={() => router.push("/signin")}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go to Sign in or Register
      </button>

    
    </div>
  );
}
