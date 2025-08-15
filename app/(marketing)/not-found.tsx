"use client";

import React from "react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            <h1 className="text-6xl font-bold text-blue-600">404</h1>
            <h2 className="mt-2 text-2xl font-semibold text-gray-800">
                Page Not Found
            </h2>
            <p className="mt-2 text-gray-600 text-center">
                Oops! The page you’re looking for doesn’t exist or has been moved.
            </p>
            <Link
                href="/"
                className="mt-6 px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
                Go Back Home
            </Link>
        </div>
    );
}
