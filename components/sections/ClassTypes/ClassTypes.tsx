import Image from "next/image";
import Link from "next/link";

const classTypes = [
    {
        title: "HATHA YOGA",
        description: "Perfect for beginners, focusing on basic postures and breathing techniques.",
        image: "/images/hero-yoga.png",
        duration: "60 min",
        level: "Beginner"
    },
    {
        title: "VINYASA FLOW",
        description: "Dynamic sequences linking movement with breath in flowing transitions.",
        image: "/images/hero-yoga.png",
        duration: "75 min",
        level: "Intermediate"
    },
    {
        title: "POWER YOGA",
        description: "Athletic and vigorous practice building strength and endurance.",
        image: "/images/hero-yoga.png",
        duration: "60 min",
        level: "Advanced"
    },
    {
        title: "YIN YOGA",
        description: "Slow-paced practice with longer holds for deep relaxation.",
        image: "/images/hero-yoga.png",
        duration: "90 min",
        level: "All Levels"
    },
    {
        title: "HOT YOGA",
        description: "Traditional poses practiced in a heated room for deeper stretches.",
        image: "/images/hero-yoga.png",
        duration: "90 min",
        level: "Intermediate"
    },
    {
        title: "RESTORATIVE",
        description: "Gentle practice using props for complete relaxation and healing.",
        image: "/images/hero-yoga.png",
        duration: "75 min",
        level: "All Levels"
    }
];

export default function ClassTypes() {
    return (
        <section className="section-padding bg-background">
            <div className="container mx-auto container-padding">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-dark mb-6">
                        OUR YOGA
                        <br />
                        <span className="text-primary">CLASSES</span>
                    </h2>
                    <p className="text-lg text-text-light max-w-3xl mx-auto leading-relaxed">
                        Discover the perfect class for your practice level and goals. From gentle beginner
                        sessions to challenging advanced flows, we offer a diverse range of yoga styles.
                    </p>
                </div>

                {/* Classes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {classTypes.map((classType, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-2xl mb-6">
                                <Image
                                    src={classType.image}
                                    alt={classType.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <h3 className="font-serif text-xl text-white mb-1">
                                                {classType.title}
                                            </h3>
                                            <div className="flex space-x-3 text-sm text-white/80">
                                                <span>{classType.duration}</span>
                                                <span>•</span>
                                                <span>{classType.level}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-text-light leading-relaxed mb-4">
                                {classType.description}
                            </p>
                            <Link
                                href="/booking"
                                className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors duration-300"
                            >
                                Book Now
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <Link href="/types-of-yoga" className="btn-primary">
                        VIEW ALL CLASSES
                    </Link>
                </div>
            </div>
        </section>
    );
}
