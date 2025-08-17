import Button from "@/components/ui/Button";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCalendarAlt, faUserFriends, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function BookingSuccessPage() {
    // Sample booking data - in a real app, this would come from a database or session
    const booking = {
        className: "Vinyasa Flow",
        instructor: "Arunima Dutta",
        date: "Monday, August 21, 2023",
        time: "7:00 AM - 8:15 AM",
        location: "U Turn, Chandmari Flyover, Guwahati",
        bookingId: "YS-2023-08-21-001"
    };

    return (
        <>
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-50 to-primary/5 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 text-4xl" />
                        </div>
                        <h1 className="font-serif text-4xl md:text-5xl font-normal text-dark mb-4">
                            Booking Confirmed!
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Thank you for booking with Arunima Dutta&apos;s The Yoga Studio.
                            We look forward to seeing you on the mat.
                        </p>
                    </div>
                </div>
            </div>

            {/* Booking Details */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 mb-10">
                        <h2 className="font-serif text-2xl font-normal text-dark mb-6 text-center">
                            Your Booking Details
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                        <FontAwesomeIcon icon={faCalendarAlt} className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500 mb-1">Class & Date</h3>
                                        <p className="text-dark">{booking.className}</p>
                                        <p className="text-dark">{booking.date}</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                        <FontAwesomeIcon icon={faUserFriends} className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500 mb-1">Instructor</h3>
                                        <p className="text-dark">{booking.instructor}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                        <FontAwesomeIcon icon={faClock} className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500 mb-1">Time</h3>
                                        <p className="text-dark">{booking.time}</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500 mb-1">Location</h3>
                                        <p className="text-dark">{booking.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                            <p className="text-sm text-gray-500 mb-2">Booking Reference: {booking.bookingId}</p>
                            <p className="text-gray-600 mb-4">
                                A confirmation email has been sent to your registered email address.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8">
                        <h2 className="font-serif text-2xl font-normal text-dark mb-6 text-center">
                            What&apos;s Next?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-medium text-dark mb-3">Before Your Class</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        Arrive 15 minutes before your class starts
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        Wear comfortable, stretchy clothing
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        Bring a water bottle and small towel
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        Yoga mats are provided, but you can bring your own
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-medium text-dark mb-3">Cancellation Policy</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        Cancel at least 4 hours before class for a full refund
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        Late cancellations may incur a fee
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        To cancel, call us or email with your booking reference
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/timetable">
                                <Button variant="minimal" withArrow>
                                    View Schedule
                                </Button>
                            </Link>
                            <Link href="/">
                                <Button variant="outline">
                                    Back to Home
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}