"use client";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Teachers", href: "/teachers" },
        { name: "Timetable", href: "/timetable" },
        { name: "Types Of Yoga", href: "/types-of-yoga" },
        { name: "Contacts", href: "/contact" },
    ];

    return (
        <nav className="relative z-50 bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <span className="nav-logo text-dark">The Yoga Studio</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="nav-link text-gray-700 hover:text-primary transition-colors duration-200"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Sign Up Button */}
                <div className="hidden md:block">
                    <Link
                        href="/booking"
                        className="nav-button bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                        Sing Up
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 nav-button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                className={cn(
                    "md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
                    isMenuOpen ? "max-h-screen py-4" : "max-h-0"
                )}
            >
                <div className="flex flex-col space-y-4 px-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="nav-mobile-link text-gray-700 hover:text-primary transition-colors duration-200 py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/booking"
                        className="nav-mobile-button bg-primary text-white px-6 py-3 rounded-full text-center hover:bg-secondary transition-all duration-200 mt-4"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Sing Up
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;