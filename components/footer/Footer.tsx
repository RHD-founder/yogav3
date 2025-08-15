import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white">
            {/* Main Footer Content */}
            <div className="section-padding">
                <div className="container mx-auto container-padding">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {/* Studio Info */}
                        <div className="lg:col-span-2">
                            <Link href="/" className="inline-block mb-6">
                                <span className="font-serif text-3xl font-bold text-primary">YOGA</span>
                            </Link>
                            <p className="text-text-light text-sm leading-relaxed max-w-md mb-6">
                                Discover inner peace and physical strength through our expertly guided yoga sessions.
                                Join our community and transform your mind, body, and spirit.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="https://facebook.com/theyogastudio"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                    <Facebook size={20} />
                                </a>
                                <a
                                    href="https://instagram.com/theyogastudio"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                    <Instagram size={20} />
                                </a>
                                <a
                                    href="https://twitter.com/theyogastudio"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                    <Twitter size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/types-of-yoga" className="text-text-light hover:text-primary transition-colors duration-200 text-sm">
                                        Types Of Yoga
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/timetable" className="text-text-light hover:text-primary transition-colors duration-200 text-sm">
                                        Timetable
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/teachers" className="text-text-light hover:text-primary transition-colors duration-200 text-sm">
                                        Teachers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/pricing" className="text-text-light hover:text-primary transition-colors duration-200 text-sm">
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-text-light hover:text-primary transition-colors duration-200 text-sm">
                                        Contacts
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-text-light hover:text-primary transition-colors duration-200 text-sm">
                                        Home
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                                    <span className="text-text-light text-sm">
                                        123 Yoga Lane, Serenity City, YS 90210
                                    </span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Mail size={18} className="text-primary mt-1 flex-shrink-0" />
                                    <a
                                        href="mailto:info@theyogastudio.com"
                                        className="text-text-light hover:text-primary transition-colors duration-200 text-sm"
                                    >
                                        info@theyogastudio.com
                                    </a>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Phone size={18} className="text-primary mt-1 flex-shrink-0" />
                                    <a
                                        href="tel:+1234567890"
                                        className="text-text-light hover:text-primary transition-colors duration-200 text-sm"
                                    >
                                        (123) 456-7890
                                    </a>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Clock size={18} className="text-primary mt-1 flex-shrink-0" />
                                    <div className="text-text-light text-sm">
                                        <div>Mon - Fri: 6 AM - 9 PM</div>
                                        <div>Sat - Sun: 7 AM - 6 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700 py-6">
                <div className="container mx-auto container-padding">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-text-light text-sm">
                            &copy; {currentYear} The Yoga Studio. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <Link href="/privacy" className="text-text-light hover:text-primary transition-colors duration-200">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-text-light hover:text-primary transition-colors duration-200">
                                Terms of Service
                            </Link>
                            <Link href="/sitemap" className="text-text-light hover:text-primary transition-colors duration-200">
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
