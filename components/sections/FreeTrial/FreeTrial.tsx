import Link from "next/link";
import { Calendar, Clock, Users, Star } from "lucide-react";

export default function FreeTrial() {
    const trialBenefits = [
        {
            icon: Calendar,
            title: "FREE CLASS",
            description: "Try any class type that interests you"
        },
        {
            icon: Clock,
            title: "FLEXIBLE TIMING",
            description: "Choose from multiple class schedules"
        },
        {
            icon: Users,
            title: "EXPERT GUIDANCE",
            description: "Learn from certified instructors"
        },
        {
            icon: Star,
            title: "NO COMMITMENT",
            description: "Experience our studio risk-free"
        }
    ];

    return (
        <section className="section-padding bg-gradient-to-br from-primary/10 to-accent/10">
            <div className="container mx-auto container-padding">
                <div className="text-center max-w-5xl mx-auto">
                    {/* Main CTA */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16">
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-dark mb-6">
                            START YOUR YOGA JOURNEY
                            <br />
                            <span className="text-primary">WITH A FREE CLASS</span>
                        </h2>
                        <p className="text-lg text-text-light max-w-3xl mx-auto mb-8 leading-relaxed">
                            New to yoga or our studio? We invite you to experience the transformative power of yoga
                            with a complimentary class. No experience necessary, all levels welcome.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <Link href="/booking" className="btn-primary text-lg px-10 py-4">
                                BOOK FREE CLASS
                            </Link>
                            <Link href="/contact" className="btn-secondary text-lg px-10 py-4">
                                TALK TO US
                            </Link>
                        </div>

                        <p className="text-sm text-text-light">
                            * First-time visitors only. Subject to availability.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {trialBenefits.map((benefit, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                    <benefit.icon size={32} className="text-primary" />
                                </div>
                                <h3 className="font-serif text-lg font-semibold text-dark mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-text-light text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Additional Info */}
                    <div className="bg-background-alt rounded-2xl p-8">
                        <h3 className="font-serif text-2xl md:text-3xl text-dark mb-6">
                            WHAT TO EXPECT
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
                            <div>
                                <h4 className="font-semibold text-dark mb-3">Before Your Class</h4>
                                <ul className="space-y-2 text-text-light text-sm">
                                    <li>• Arrive 15 minutes early</li>
                                    <li>• Wear comfortable, stretchy clothing</li>
                                    <li>• Bring water and a small towel</li>
                                    <li>• Mats and props provided</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-dark mb-3">During Your Class</h4>
                                <ul className="space-y-2 text-text-light text-sm">
                                    <li>• Listen to your body</li>
                                    <li>• Take breaks when needed</li>
                                    <li>• Ask questions anytime</li>
                                    <li>• Enjoy the practice</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
