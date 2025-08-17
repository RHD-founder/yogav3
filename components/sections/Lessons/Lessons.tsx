import Image from "next/image";

const lessons = [
    { title: "Yoga for Beginners", img: "/images/lesson-1.png" },
    { title: "Stretch Poses", img: "/images/lesson-2.png" },
    { title: "Yin Yoga", img: "/images/lesson-3.png" },
];

export default function Lessons() {
    return (
        <section className="bg-background py-20">
            <div className="container mx-auto">
                <h2 className="font-serif text-4xl text-center mb-12">Our Lessons</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {lessons.map((lesson, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
                        >
                            <div className="relative w-full h-64">
                                <Image src={lesson.img} alt={lesson.title} fill className="object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-medium">{lesson.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
