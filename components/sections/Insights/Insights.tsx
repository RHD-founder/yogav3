import Image from "next/image";
import Link from "next/link";

export default function Insights() {
    const instructors = [
        {
            name: "Samantha Cole",
            specialty: "Vinyasa Flow",
            image: "/images/hero-yoga.png",
            experience: "8+ years"
        },
        {
            name: "Anna Patel",
            specialty: "Hatha Yoga",
            image: "/images/hero-yoga.png",
            experience: "12+ years"
        },
        {
            name: "Mia Evans",
            specialty: "Restorative Yoga",
            image: "/images/hero-yoga.png",
            experience: "6+ years"
        },
        {
            name: "Michael Lee",
            specialty: "Power Yoga",
            image: "/images/hero-yoga.png",
            experience: "10+ years"
        },
        {
            name: "Sarah Green",
            specialty: "Yin Yoga",
            image: "/images/hero-yoga.png",
            experience: "7+ years"
        },
        {
            name: "Adam Kim",
            specialty: "Ashtanga",
            image: "/images/hero-yoga.png",
            experience: "15+ years"
        }
    ];

    return (
        <section className="section-padding bg-background">
            <div className="container mx-auto container-padding">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-dark mb-6">
                        INSIGHTS AND STRATEGIES
                        <br />
                        <span className="text-primary">FROM EXPERIENCED YOGA INSTRUCTORS</span>
                    </h2>
                    <p className="text-lg text-text-light max-w-3xl mx-auto leading-relaxed">
                        Learn from our team of certified and experienced yoga instructors who are passionate
                        about sharing their knowledge and helping you achieve your wellness goals.
                    </p>
                </div>

                {/* Instructors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {instructors.map((instructor, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={instructor.image}
                                    alt={instructor.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="font-serif text-xl font-semibold text-dark mb-2">
                                    {instructor.name}
                                </h3>
                                <p className="text-primary font-medium mb-2">
                                    {instructor.specialty}
                                </p>
                                <p className="text-text-light text-sm">
                                    {instructor.experience} experience
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                
            </div>
        </section>
    );
}
