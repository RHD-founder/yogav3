import Image from "next/image";
import Link from "next/link";

export default function Schedule() {
    const scheduleData = [
        { day: "MONDAY", time: "7:30 PM - 8:45 PM", classType: "HOT POWER FLOW" },
        { day: "TUESDAY", time: "8:20 AM - 9:20 AM", classType: "HOT POWERFLOW VINYASA" },
        { day: "WEDNESDAY", time: "4:15 PM - 5:45 PM", classType: "WARM MINDFUL FLOW" },
        { day: "THURSDAY", time: "3:30 PM - 4:45 PM", classType: "KUNDALINI YOGA" },
        { day: "FRIDAY", time: "2:00 PM - 3:15 PM", classType: "WARM YIN YOGA" },
        { day: "SATURDAY", time: "10:00 AM - 11:45 AM", classType: "JZT DANCE AND YOGA" },
        { day: "SUNDAY", time: "6:30 PM - 7:30 PM", classType: "HANTA YOGA" }
    ];

    return (
        <section className="section-padding bg-background">
            <div className="container mx-auto container-padding">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Schedule Table */}
                    <div>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-dark mb-6">
                            JOIN OUR CLASS, SEE OUR SCHEDULE
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
                                            <th className="text-left py-4 px-4 font-semibold text-dark text-sm tracking-wider">DAYS</th>
                                            <th className="text-left py-4 px-4 font-semibold text-dark text-sm tracking-wider">CLASS NAME</th>
                                            <th className="text-left py-4 px-4 font-semibold text-dark text-sm tracking-wider">TIME</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {scheduleData.map((classItem, index) => (
                                            <tr
                                                key={index}
                                                className="border-b border-gray-100 hover:bg-background-alt transition-colors duration-200"
                                            >
                                                <td className="py-4 px-4 font-medium text-dark text-sm">
                                                    {classItem.day}
                                                </td>
                                                <td className="py-4 px-4 text-text-light text-sm">
                                                    {classItem.classType}
                                                </td>
                                                <td className="py-4 px-4 text-text-light text-sm">
                                                    {classItem.time}
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
                    <div className="relative w-full">
                        <Image
                            src="/images/14788 (1).jpg"
                            alt="Yoga community"
                            width={900}
                            height={1100}
                            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] rounded-2xl shadow-xl object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
