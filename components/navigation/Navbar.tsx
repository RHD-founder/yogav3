"use client";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faHome, faUserGroup, faCalendarDays, faDumbbell, faEnvelope, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to get the icon based on the icon name
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'home': return faHome;
            case 'userGroup': return faUserGroup;
            case 'calendarDays': return faCalendarDays;
            case 'yoga': return faDumbbell; // Using dumbbell as yoga icon isn't available
            case 'envelope': return faEnvelope;
            default: return faHome;
        }
    };

    const navItems = [
        { name: "Home", href: "/", icon: "home" },
        { name: "Teachers", href: "/teachers", icon: "userGroup" },
        { name: "Timetable", href: "/timetable", icon: "calendarDays" },
        { name: "Types Of Yoga", href: "/types-of-yoga", icon: "yoga" },
        { name: "Contacts", href: "/contact", icon: "envelope" },
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
                        className="nav-button btn-primary text-black px-6 py-2 rounded-full hover:bg-secondary transition-all duration-200 shadow-sm hover:shadow-md flex items-center space-x-2"
                    >
                        <FontAwesomeIcon icon={faUserPlus} />
                        <span>Sign Up</span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 nav-button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <FontAwesomeIcon icon={faXmark} size="lg" /> : <FontAwesomeIcon icon={faBars} size="lg" />}
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
                            className="nav-mobile-link text-gray-700 hover:text-primary transition-colors duration-200 py-2 flex items-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <FontAwesomeIcon icon={getIcon(item.icon)} className="mr-3 w-4" />
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/booking"
                        className="nav-mobile-button btn-primary text-black px-6 py-3 rounded-full text-center hover:bg-secondary transition-all duration-200 mt-4 flex items-center justify-center space-x-2"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <FontAwesomeIcon icon={faUserPlus} />
                        <span>Sign Up</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;