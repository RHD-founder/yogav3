import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser, faCalendarAlt, faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const scheduleData = [
    {
        day: "Monday",
        classes: [
            { time: "06:00 - 07:00", name: "Morning Hatha", instructor: "Arunima Dutta" },
            { time: "12:00 - 13:00", name: "Lunch Flow", instructor: "Priya Sharma" },
            { time: "18:00 - 19:00", name: "Vinyasa Flow", instructor: "Arunima Dutta" },
            { time: "19:30 - 20:30", name: "Yin Yoga", instructor: "Lisa Mehta" },
        ]
    },
    {
        day: "Tuesday",
        classes: [
            { time: "07:00 - 08:00", name: "Power Yoga", instructor: "Rajiv Mehta" },
            { time: "12:00 - 13:00", name: "Gentle Yoga", instructor: "Priya Sharma" },
            { time: "18:00 - 19:00", name: "Hot Yoga", instructor: "Maya Patel" },
            { time: "19:30 - 20:30", name: "Restorative", instructor: "Arunima Dutta" },
        ]
    },
    {
        day: "Wednesday",
        classes: [
            { time: "06:00 - 07:00", name: "Morning Flow", instructor: "Rajiv Mehta" },
            { time: "12:00 - 13:00", name: "Lunch Hatha", instructor: "Lisa Mehta" },
            { time: "18:00 - 19:00", name: "Vinyasa Flow", instructor: "Priya Sharma" },
            { time: "19:30 - 20:30", name: "Meditation", instructor: "Rajiv Mehta" },
        ]
    },
    {
        day: "Thursday",
        classes: [
            { time: "07:00 - 08:00", name: "Power Yoga", instructor: "Arunima Dutta" },
            { time: "12:00 - 13:00", name: "Gentle Flow", instructor: "Maya Patel" },
            { time: "18:00 - 19:00", name: "Hot Yoga", instructor: "Rajiv Mehta" },
            { time: "19:30 - 20:30", name: "Yin Yoga", instructor: "Lisa Mehta" },
        ]
    },
    {
        day: "Friday",
        classes: [
            { time: "06:00 - 07:00", name: "Morning Hatha", instructor: "Priya Sharma" },
            { time: "12:00 - 13:00", name: "Lunch Flow", instructor: "Rajiv Mehta" },
            { time: "18:00 - 19:00", name: "Vinyasa Flow", instructor: "Arunima Dutta" },
            { time: "19:30 - 20:30", name: "Restorative", instructor: "Maya Patel" },
        ]
    },
    {
        day: "Saturday",
        classes: [
            { time: "08:00 - 09:00", name: "Morning Flow", instructor: "Rajiv Mehta" },
            { time: "10:00 - 11:00", name: "Beginner Workshop", instructor: "Priya Sharma" },
            { time: "16:00 - 17:00", name: "Power Yoga", instructor: "Rajiv Mehta" },
            { time: "18:00 - 19:00", name: "Sunset Yin", instructor: "Lisa Mehta" },
        ]
    },
    {
        day: "Sunday",
        classes: [
            { time: "09:00 - 10:00", name: "Gentle Sunday", instructor: "Arunima Dutta" },
            { time: "11:00 - 12:00", name: "Family Yoga", instructor: "Maya Patel" },
            { time: "16:00 - 17:00", name: "Restorative", instructor: "Priya Sharma" },
            { time: "18:00 - 19:00", name: "Meditation Circle", instructor: "Rajiv Mehta" },
        ]
    }
];

export default function SchedulePage() {
    return (
        <>
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="font-serif text-3xl md:text-4xl font-normal text-dark mb-3 leading-tight">
                            Weekly Class Schedule
                        </h1>
                        <p className="text-base text-gray-600 max-w-3xl mx-auto">
                            Discover your perfect yoga practice with our diverse class offerings.
                            From gentle morning flows to energizing evening sessions, find the rhythm that suits your journey.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {/* Schedule Table */}
                <div className="bg-white rounded-xl shadow-lg border-2 border-black overflow-hidden mb-8">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gradient-to-r from-primary/15 via-secondary/15 to-accent/15">
                                    <th className="px-6 py-4 text-left text-base font-semibold text-dark border-r border-primary/20">
                                        Time
                                    </th>
                                    {scheduleData.map((day, index) => (
                                        <th key={index} className="px-6 py-4 text-center text-base font-semibold text-dark border-r border-primary/20 last:border-r-0">
                                            {day.day}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {[0, 1, 2, 3].map((timeSlot) => (
                                    <tr key={timeSlot} className="border-b border-primary/10 last:border-b-0 hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-300 group">
                                        <td className="px-6 py-4 text-sm text-gray-700 border-r border-primary/20 bg-gradient-to-b from-primary/8 to-primary/5 font-medium group-hover:bg-gradient-to-b group-hover:from-primary/12 group-hover:to-primary/8 transition-all duration-300">
                                            {scheduleData[0]?.classes[timeSlot]?.time || ''}
                                        </td>
                                        {scheduleData.map((day, dayIndex) => {
                                            const classItem = day.classes[timeSlot];
                                            return (
                                                <td key={dayIndex} className="px-6 py-4 text-center border-r border-primary/20 last:border-r-0 hover:bg-gradient-to-br hover:from-secondary/8 hover:to-accent/8 transition-all duration-300">
                                                    {classItem ? (
                                                        <div className="text-left p-3 rounded-lg bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 hover:border-primary/200 hover:shadow-md transition-all duration-300 group-hover:scale-[1.02]">
                                                            <div className="text-xs text-primary/70 mb-2 font-medium">
                                                                {classItem.time}
                                                            </div>
                                                            <div className="font-semibold text-dark text-sm mb-2">
                                                                {classItem.name}
                                                            </div>
                                                            <div className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded-full inline-block">
                                                                {classItem.instructor}
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="text-gray-300 text-sm p-3">-</div>
                                                    )}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Information Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <Card className="border-0 bg-gradient-to-br from-primary/8 to-primary/15 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-primary/20">
                        <CardContent className="p-6 text-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary/25 to-primary/35 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                                <FontAwesomeIcon icon={faCalendarAlt} className="text-primary text-lg" />
                            </div>
                            <h3 className="font-serif text-lg font-medium text-dark mb-3">Class Duration</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Most classes run for 60 minutes, giving you ample time to practice and relax.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 bg-gradient-to-br from-secondary/8 to-secondary/15 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-secondary/20">
                        <CardContent className="p-6 text-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-secondary/25 to-secondary/35 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                                <FontAwesomeIcon icon={faUser} className="text-secondary text-lg" />
                            </div>
                            <h3 className="font-serif text-lg font-medium text-dark mb-3">Expert Instructors</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                All our instructors are certified and experienced, ensuring you receive the best guidance.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 bg-gradient-to-br from-accent/8 to-accent/15 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-accent/20">
                        <CardContent className="p-6 text-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-accent/25 to-accent/35 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-accent text-lg" />
                            </div>
                            <h3 className="font-serif text-lg font-medium text-dark mb-3">Studio Location</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Conveniently located in Guwahati with ample parking and easy access for all students.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Booking CTA */}
                <Card className="border-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary/20">
                    <CardContent className="py-10 px-8 text-center">
                        <h2 className="font-serif text-2xl md:text-3xl font-normal text-dark mb-4">
                            Ready to Begin Your Practice?
                        </h2>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-base leading-relaxed">
                            Reserve your spot in any of our classes. We recommend booking in advance
                            as our classes tend to fill up quickly, especially during peak hours.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                            <Link href="/booking">
                                <Button variant="outline" size="lg" className="px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                                    Book a Class
                                </Button>
                            </Link>
                            <Button variant="outline" size="lg" className="px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                                Try Free Class
                            </Button>
                        </div>
                        <p className="text-sm text-gray-500 bg-white/50 px-4 py-2 rounded-full inline-block">
                            New students get their first class free! Contact us to claim your free session.
                        </p>
                    </CardContent>
                </Card>

                {/* Contact Information */}
                <div className="mt-8 text-center">
                    <h3 className="font-serif text-lg font-medium text-dark mb-4">Need Help Choosing?</h3>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6">
                        <div className="flex items-center text-gray-600">
                            <FontAwesomeIcon icon={faPhone} className="mr-2 text-primary" />
                            <span className="text-sm">(555) 123-YOGA</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-primary" />
                            <span className="text-sm">hello@theyogastudio.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
