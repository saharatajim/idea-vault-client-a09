"use client";

import { Divide } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
   <div className="container mx-auto">
     <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <h2 className="text-2xl dark:text-blue-500 font-semibold mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-2">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
   </div>
  );
}
