"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/20">
      <Card className="w-[400px] shadow-md">
        <CardHeader>
          <CardTitle className="text-center">Create Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <input
                id="imageUrl"
                type="text"
                placeholder="https://example.com/avatar.png"
                className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Register
            </button>
          </form>

          {/* Google Register Button */}
          <div className="mt-6">
            <button
              className="w-full flex items-center justify-center gap-2 px-4 py-2 border rounded-md bg-white text-gray-700 hover:bg-gray-50 transition"
            >
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.94 0 7.46 1.36 10.25 3.61l7.19-7.19C37.64 2.38 31.17 0 24 0 14.62 0 6.4 5.38 2.54 13.22l8.39 6.52C12.73 13.07 17.95 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.1 24.5c0-1.63-.15-3.19-.43-4.69H24v9.1h12.5c-.54 2.9-2.16 5.36-4.6 7.01l7.19 5.59C43.64 37.62 46.1 31.5 46.1 24.5z"/>
                <path fill="#FBBC05" d="M10.93 28.7c-.63-1.86-.98-3.85-.98-5.9s.35-4.04.98-5.9l-8.39-6.52C1.05 13.07 0 18.36 0 24s1.05 10.93 2.54 15.62l8.39-6.52z"/>
                <path fill="#34A853" d="M24 48c6.17 0 11.64-2.03 15.92-5.5l-7.19-5.59c-2.02 1.38-4.6 2.19-7.73 2.19-6.05 0-11.27-3.57-13.07-8.72l-8.39 6.52C6.4 42.62 14.62 48 24 48z"/>
              </svg>
              <span>Register with Google</span>
            </button>
          </div>

          {/* Redirect to Sign In */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/signin" className="text-blue-600 hover:underline">
              Sign in here
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
