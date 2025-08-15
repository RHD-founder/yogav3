import Image from "next/image";

const features = [
    {
        title: "EXPERT INSTRUCTORS",
        description: "Learn from certified yoga teachers with years of experience and deep knowledge of various yoga traditions.",
        icon: "🧘‍♀️"
    },
    {
        title: "SMALL CLASS SIZES",
        description: "Intimate class sizes ensure personalized attention and guidance for every student's unique needs.",
        icon: "👥"
    },
    {
        title: "ALL LEVELS WELCOME",
        description: "From complete beginners to advanced practitioners, our classes are designed to meet you where you are.",
        icon: "🌟"
    },
    {
        title: "PEACEFUL ENVIRONMENT",
        description: "Practice in our serene, mindfully designed studio space that promotes inner peace and focus.",
        icon: "🕯️"
    },
    {
        title: "FLEXIBLE SCHEDULING",
        description: "Multiple class times throughout the day to fit your busy lifestyle and schedule.",
        icon: "⏰"
    },
    {
        title: "HOLISTIC APPROACH",
        description: "We focus on mind, body, and spirit integration through traditional and modern yoga practices.",
        icon: "🌿"
    }
];

export default function Features() {
    return (
        <section className="section-padding bg-background-alt">
            <div className="container mx-auto container-padding">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-dark mb-6">
                        WHY CHOOSE
                        <br />
                        <span className="text-primary">OUR STUDIO</span>
                    </h2>
                    <p className="text-lg text-text-light max-w-3xl mx-auto leading-relaxed">
                        Experience the difference of practicing in a supportive, nurturing environment
                        where your wellness journey is our priority.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center group">
                            <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                <span className="text-3xl">{feature.icon}</span>
                            </div>
                            <h3 className="font-serif text-xl text-dark mb-4 tracking-wide">
                                {feature.title}
                            </h3>
                            <p className="text-text-light leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Image Section */}
                <div className="relative rounded-2xl overflow-hidden">
                    <Image
                        src="/images/hero-yoga.png"
                        alt="Yoga studio environment"
                        width={1200}
                        height={400}
                        className="w-full h-64 md:h-80 lg:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-dark/60 to-primary/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white max-w-2xl px-6">
                            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4">
                                JOIN OUR COMMUNITY TODAY
                            </h3>
                            <p className="text-lg mb-8 opacity-90">
                                Start your transformative yoga journey with us and discover the perfect balance of strength, flexibility, and inner peace.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="/booking" className="bg-white text-dark px-8 py-3 rounded-full font-medium hover:bg-background transition-colors duration-300">
                                    START TODAY
                                </a>
                                <a href="/contact" className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-dark transition-colors duration-300">
                                    CONTACT US
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
