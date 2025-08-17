import Button from "@/components/ui/Button";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faCalendarCheck, faClock, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';

export default function BookingPage() {
    // Sample class data - in a real app, this would come from an API or database
    const upcomingClasses = [
        {
            id: 1,
            name: "Vinyasa Flow",
            instructor: "Arunima Dutta",
            time: "7:00 AM - 8:15 AM",
            day: "Monday",
            spots: 5,
        },
        {
            id: 2,
            name: "Hatha Yoga",
            instructor: "Priya Sharma",
            time: "9:30 AM - 10:45 AM",
            day: "Tuesday",
            spots: 8,
        },
        {
            id: 3,
            name: "Yin Yoga",
            instructor: "Rajiv Mehta",
            time: "6:00 PM - 7:15 PM",
            day: "Wednesday",
            spots: 3,
        },
        {
            id: 4,
            name: "Power Yoga",
            instructor: "Arunima Dutta",
            time: "5:30 PM - 6:45 PM",
            day: "Thursday",
            spots: 6,
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <div className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="font-serif text-4xl md:text-5xl font-normal text-dark mb-4">
                            Book Your Yoga Session
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Choose from our variety of yoga classes and book your perfect session.
                            Start your journey to wellness today.
                        </p>
                    </div>
                </div>
            </div>

            {/* Booking Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Column - Upcoming Classes */}
                        <div className="lg:col-span-8">
                            <h2 className="font-serif text-2xl font-normal text-dark mb-6 pb-2 border-b border-gray-200">
                                Upcoming Classes
                            </h2>

                            <div className="space-y-4">
                                {upcomingClasses.map((yogaClass) => (
                                    <div
                                        key={yogaClass.id}
                                        className="bg-white border border-gray-200 rounded-lg p-6"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                                            <div className="mb-4 md:mb-0">
                                                <h3 className="font-serif text-xl font-medium text-dark mb-2">
                                                    {yogaClass.name}
                                                </h3>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-gray-600 text-sm">
                                                    <div className="flex items-center">
                                                        <FontAwesomeIcon icon={faCalendarCheck} className="mr-2 text-primary w-4 h-4" />
                                                        <span>{yogaClass.day}</span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <FontAwesomeIcon icon={faClock} className="mr-2 text-primary w-4 h-4" />
                                                        <span>{yogaClass.time}</span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <FontAwesomeIcon icon={faUser} className="mr-2 text-primary w-4 h-4" />
                                                        <span>Instructor: {yogaClass.instructor}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-col items-end">
                                                <div className="text-sm text-gray-500 mb-2">
                                                    {yogaClass.spots} spots remaining
                                                </div>
                                                <Button variant="minimal" size="sm" withArrow>
                                                    Book Now
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 text-center">
                                <Link href="/timetable">
                                    <Button variant="outline">
                                        View Full Schedule
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Column - Booking Information */}
                        <div className="lg:col-span-4 mt-16">
                            {/* Booking Information Card */}
                            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                                <h2 className="font-serif text-xl font-medium text-dark mb-4 pb-2 border-b border-gray-200">
                                    Booking Information
                                </h2>

                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-medium text-dark mb-2">How to Book</h3>
                                        <p className="text-gray-600 text-sm">
                                            Our online booking system is coming soon. In the meantime, you can book classes by phone, email, or in person.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-medium text-dark mb-2">Cancellation Policy</h3>
                                        <p className="text-gray-600 text-sm">
                                            Please cancel at least 4 hours before class to receive a full refund or credit.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-medium text-dark mb-2">What to Bring</h3>
                                        <p className="text-gray-600 text-sm">
                                            Comfortable clothing, water bottle, and a towel. Yoga mats are provided, but you&apos;re welcome to bring your own.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Us Card */}
                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h2 className="font-serif text-xl font-medium text-dark mb-4 pb-2 border-b border-gray-200">
                                    Contact Us
                                </h2>

                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                                            <FontAwesomeIcon icon={faPhone} className="text-primary" size="sm" />
                                        </div>
                                        <div>
                                            <p className="text-gray-700">(555) 123-YOGA</p>
                                            <Link
                                                href="tel:+5551234962"
                                                className="text-primary hover:text-primary/80 inline-flex items-center group text-sm"
                                            >
                                                <span>Call Now</span>
                                                <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                                            <FontAwesomeIcon icon={faEnvelope} className="text-primary" size="sm" />
                                        </div>
                                        <div>
                                            <p className="text-gray-700">hello@theyogastudio.com</p>
                                            <Link
                                                href="mailto:hello@theyogastudio.com"
                                                className="text-primary hover:text-primary/80 inline-flex items-center group text-sm"
                                            >
                                                <span>Send Email</span>
                                                <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary" size="sm" />
                                        </div>
                                        <div>
                                            <p className="text-gray-700">
                                                U Turn, Chandmari Flyover<br />
                                                Guwahati, Assam 781003
                                            </p>
                                            <Link
                                                href="https://maps.app.goo.gl/zaxDdFVqwmBkWvLX7"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary hover:text-primary/80 inline-flex items-center group text-sm"
                                            >
                                                <span>Get Directions</span>
                                                <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}