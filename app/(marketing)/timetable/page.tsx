import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const scheduleData = [
    {
        day: "Monday",
        classes: [
            { time: "6:00 AM", name: "Morning Hatha", instructor: "Sarah", level: "Beginner" },
            { time: "12:00 PM", name: "Lunch Flow", instructor: "Mike", level: "All Levels" },
            { time: "6:00 PM", name: "Vinyasa Flow", instructor: "Emma", level: "Intermediate" },
            { time: "7:30 PM", name: "Yin Yoga", instructor: "Lisa", level: "All Levels" },
        ]
    },
    {
        day: "Tuesday",
        classes: [
            { time: "7:00 AM", name: "Power Yoga", instructor: "Tom", level: "Advanced" },
            { time: "12:00 PM", name: "Gentle Yoga", instructor: "Sarah", level: "Beginner" },
            { time: "6:00 PM", name: "Hot Yoga", instructor: "Maya", level: "Intermediate" },
            { time: "7:30 PM", name: "Restorative", instructor: "Emma", level: "All Levels" },
        ]
    },
    {
        day: "Wednesday",
        classes: [
            { time: "6:00 AM", name: "Morning Flow", instructor: "Mike", level: "Intermediate" },
            { time: "12:00 PM", name: "Lunch Hatha", instructor: "Lisa", level: "Beginner" },
            { time: "6:00 PM", name: "Vinyasa Flow", instructor: "Sarah", level: "Intermediate" },
            { time: "7:30 PM", name: "Meditation", instructor: "Tom", level: "All Levels" },
        ]
    },
    {
        day: "Thursday",
        classes: [
            { time: "7:00 AM", name: "Power Yoga", instructor: "Emma", level: "Advanced" },
            { time: "12:00 PM", name: "Gentle Flow", instructor: "Maya", level: "Beginner" },
            { time: "6:00 PM", name: "Hot Yoga", instructor: "Mike", level: "Intermediate" },
            { time: "7:30 PM", name: "Yin Yoga", instructor: "Lisa", level: "All Levels" },
        ]
    },
    {
        day: "Friday",
        classes: [
            { time: "6:00 AM", name: "Morning Hatha", instructor: "Sarah", level: "Beginner" },
            { time: "12:00 PM", name: "Lunch Flow", instructor: "Tom", level: "All Levels" },
            { time: "6:00 PM", name: "Vinyasa Flow", instructor: "Emma", level: "Intermediate" },
            { time: "7:30 PM", name: "Restorative", instructor: "Maya", level: "All Levels" },
        ]
    },
    {
        day: "Saturday",
        classes: [
            { time: "8:00 AM", name: "Morning Flow", instructor: "Mike", level: "Intermediate" },
            { time: "10:00 AM", name: "Beginner Workshop", instructor: "Sarah", level: "Beginner" },
            { time: "4:00 PM", name: "Power Yoga", instructor: "Tom", level: "Advanced" },
            { time: "6:00 PM", name: "Sunset Yin", instructor: "Lisa", level: "All Levels" },
        ]
    },
    {
        day: "Sunday",
        classes: [
            { time: "9:00 AM", name: "Gentle Sunday", instructor: "Emma", level: "Beginner" },
            { time: "11:00 AM", name: "Family Yoga", instructor: "Maya", level: "All Ages" },
            { time: "4:00 PM", name: "Restorative", instructor: "Sarah", level: "All Levels" },
            { time: "6:00 PM", name: "Meditation Circle", instructor: "Tom", level: "All Levels" },
        ]
    }
];

const getLevelColor = (level: string) => {
    switch (level) {
        case "Beginner": return "bg-green-100 text-green-800";
        case "Intermediate": return "bg-yellow-100 text-yellow-800";
        case "Advanced": return "bg-red-100 text-red-800";
        case "All Levels": return "bg-blue-100 text-blue-800";
        case "All Ages": return "bg-purple-100 text-purple-800";
        default: return "bg-gray-100 text-gray-800";
    }
};

export default function SchedulePage() {
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="font-serif text-4xl lg:text-5xl mb-6 text-dark">
                    Class Schedule
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Join us for daily yoga classes designed to fit your schedule and practice level.
                    All classes are taught by our certified instructors in our peaceful studio space.
                </p>
            </div>

            {/* Schedule Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
                {scheduleData.map((day, index) => (
                    <Card key={index} className="h-fit">
                        <CardHeader>
                            <h2 className="font-serif text-2xl font-bold text-dark text-center">
                                {day.day}
                            </h2>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {day.classes.map((classItem, classIndex) => (
                                    <div key={classIndex} className="border-l-4 border-primary pl-4 py-2">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="font-semibold text-dark text-lg">
                                                {classItem.time}
                                            </span>
                                            <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(classItem.level)}`}>
                                                {classItem.level}
                                            </span>
                                        </div>
                                        <h3 className="font-medium text-gray-900 mb-1">
                                            {classItem.name}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            with {classItem.instructor}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Booking CTA */}
            <Card className="text-center">
                <CardContent className="py-12">
                    <h2 className="font-serif text-3xl mb-4 text-dark">
                        Ready to Book Your Class?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Reserve your spot in any of our classes. We recommend booking in advance
                        as our classes tend to fill up quickly, especially during peak hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg">
                            Book a Class
                        </Button>
                        <Button variant="outline" size="lg">
                            Try Free Class
                        </Button>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                        New students get their first class free!
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
