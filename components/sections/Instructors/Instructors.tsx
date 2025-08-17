import Image from "next/image";
import Link from "next/link";

const instructors = [
    {
        name: "SARAH WILLIAMS",
        title: "Lead Instructor & Founder",
        specialties: ["Hatha", "Vinyasa", "Meditation"],
        experience: "15+ years",
        bio: "Sarah founded our studio with a vision to create an inclusive space for all practitioners. She specializes in gentle, alignment-based practices.",
        image: "/images/hero-yoga.png"
    },
    {
        name: "MIKE CHEN",
        title: "Senior Instructor",
        specialties: ["Power Yoga", "Vinyasa Flow"],
        experience: "10+ years",
        bio: "Mike brings dynamic energy and precise alignment to his classes. He's passionate about making yoga accessible to everyone.",
        image: "/images/hero-yoga.png"
    },
    {
        name: "EMMA RODRIGUEZ",
        title: "Senior Instructor",
        specialties: ["Hot Yoga", "Yin", "Restorative"],
        experience: "8+ years",
        bio: "Emma creates a safe, nurturing environment where students can explore their practice without judgment.",
        image: "/images/hero-yoga.png"
    }
];

export default function Instructors() {
    return (
        <section className="section-padding bg-background">
            <div className="container mx-auto container-padding">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-dark mb-6">
                        MEET OUR INSTRUCTORS
                        
                    </h2>
                    <p className="text-lg text-text-light max-w-3xl mx-auto leading-relaxed">
                        Our experienced and certified instructors are passionate about sharing the
                        transformative practice of yoga with students of all levels.
                    </p>
                </div>

                {/* Instructors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                    {instructors.map((instructor, index) => (
                        <div key={index} className="text-center group">
                            <div className="relative mb-6 overflow-hidden rounded-2xl">
                                <Image
                                    src={instructor.image}
                                    alt={instructor.name}
                                    width={300}
                                    height={400}
                                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <h3 className="font-serif text-xl text-dark mb-2 tracking-wide">
                                {instructor.name}
                            </h3>
                            <p className="text-primary font-medium mb-2">
                                {instructor.title}
                            </p>
                            <p className="text-sm text-text-light mb-4">
                                {instructor.experience} experience
                            </p>

                            <div className="flex flex-wrap justify-center gap-2 mb-4">
                                {instructor.specialties.map((specialty, i) => (
                                    <span key={i} className="bg-beige-light text-dark text-xs px-3 py-1 rounded-full">
                                        {specialty}
                                    </span>
                                ))}
                            </div>

                            <p className="text-text-light text-sm leading-relaxed mb-6">
                                {instructor.bio}
                            </p>

                            <Link
                                href="/timetable"
                                className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors duration-300"
                            >
                                View Classes
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link href="/teachers" className="btn-primary">
                        MEET ALL INSTRUCTORS
                    </Link>
                </div>
            </div>
        </section>
    );
}
