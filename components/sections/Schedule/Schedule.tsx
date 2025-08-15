import Image from "next/image";
import Link from "next/link";

export default function Schedule() {
    const scheduleData = [
        { day: "Monday", time: "9:00 AM", classType: "Vinyasa Flow" },
        { day: "Monday", time: "6:00 PM", classType: "Hatha Yoga" },
        { day: "Tuesday", time: "7:00 AM", classType: "Power Yoga" },
        { day: "Tuesday", time: "6:30 PM", classType: "Restorative Yoga" },
        { day: "Wednesday", time: "9:00 AM", classType: "Vinyasa Flow" },
        { day: "Wednesday", time: "6:00 PM", classType: "Restorative Yoga" },
        { day: "Thursday", time: "7:00 AM", classType: "Power Yoga" },
        { day: "Thursday", time: "6:30 PM", classType: "Hatha Yoga" },
        { day: "Friday", time: "9:00 AM", classType: "Vinyasa Flow" },
        { day: "Friday", time: "5:30 PM", classType: "Yin Yoga" },
        { day: "Saturday", time: "8:00 AM", classType: "Vinyasa Flow" },
        { day: "Saturday", time: "10:00 AM", classType: "Beginner Yoga" },
        { day: "Sunday", time: "9:00 AM", classType: "Restorative Yoga" },
        { day: "Sunday", time: "11:00 AM", classType: "Family Yoga" }
    ];

    return (
        <section className="section-padding bg-background">
            <div className="container mx-auto container-padding">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Schedule Table */}
                    <div>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-dark mb-6">
                            JOIN OUR CLASS,
                            <br />
                            <span className="text-primary">SEE OUR SCHEDULE</span>
                        </h2>
                        <p className="text-lg text-text-light mb-8 leading-relaxed">
                            Find the perfect class time that fits your schedule. We offer classes throughout
                            the week for all levels, from early morning energizers to evening relaxation sessions.
                        </p>

                        {/* Schedule Table */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="text-left py-3 px-4 font-semibold text-dark">Day</th>
                                            <th className="text-left py-3 px-4 font-semibold text-dark">Time</th>
                                            <th className="text-left py-3 px-4 font-semibold text-dark">Class Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {scheduleData.map((classItem, index) => (
                                            <tr
                                                key={index}
                                                className={`border-b border-gray-100 hover:bg-background-alt transition-colors duration-200 ${index % 2 === 0 ? "bg-gray-50/50" : ""
                                                    }`}
                                            >
                                                <td className="py-3 px-4 font-medium text-dark">
                                                    {classItem.day}
                                                </td>
                                                <td className="py-3 px-4 text-text-light">
                                                    {classItem.time}
                                                </td>
                                                <td className="py-3 px-4 text-text-light">
                                                    {classItem.classType}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/booking" className="btn-primary text-center">
                                BOOK A CLASS
                            </Link>
                            <Link href="/types-of-yoga" className="btn-secondary text-center">
                                VIEW ALL CLASSES
                            </Link>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative">
                        <Image
                            src="/images/hero-yoga.png"
                            alt="Yoga community"
                            width={500}
                            height={600}
                            className="rounded-2xl shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
