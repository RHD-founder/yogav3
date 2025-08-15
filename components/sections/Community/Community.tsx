import Image from "next/image";
import Link from "next/link";

export default function Community() {
    const communityBenefits = [
        {
            title: "Find Your Support",
            description: "Connect with like-minded individuals who share your passion for yoga and wellness. Build lasting friendships in a supportive environment."
        },
        {
            title: "Stay Healthy",
            description: "Regular practice improves physical strength, flexibility, and mental clarity. Join our community to maintain a balanced lifestyle."
        }
    ];

    return (
        <section className="section-padding bg-background-alt">
            <div className="container mx-auto container-padding">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content Section */}
                    <div>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-dark mb-6">
                            JOIN OUR COMMUNITY:
                            <br />
                            <span className="text-primary">YOGA WITH US FOR A BALANCED MIND AND BODY</span>
                        </h2>

                        {/* Benefits Columns */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            {communityBenefits.map((benefit, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
                                    <h3 className="font-serif text-xl font-semibold text-dark mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-text-light text-sm leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex justify-center space-x-3 mb-8">
                            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                            <div className="w-3 h-3 rounded-full bg-primary"></div>
                            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/types-of-yoga" className="btn-primary text-center">
                                JOIN A CLASS
                            </Link>
                            <Link href="/contact" className="btn-secondary text-center">
                                GET IN TOUCH
                            </Link>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative">
                        <Image
                            src="/images/hero-yoga.png"
                            alt="Yoga community practice"
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
