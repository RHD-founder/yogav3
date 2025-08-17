import { Star, Quote } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Yoga Student",
            image: "/images/hero-yoga.png", // Replace with actual student photos
            rating: 5,
            text: "The Yoga Studio has completely transformed my practice. The instructors are incredibly knowledgeable and the community is so welcoming. I've found strength I never knew I had.",
            experience: "2 years"
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Beginner Yogi",
            image: "/images/hero-yoga.png",
            rating: 5,
            text: "As someone who was completely new to yoga, I was nervous about starting. But the beginner-friendly classes and patient instructors made me feel comfortable from day one.",
            experience: "6 months"
        },
        {
            id: 3,
            name: "Emma Rodriguez",
            role: "Advanced Practitioner",
            image: "/images/hero-yoga.png",
            rating: 5,
            text: "I've been practicing yoga for over 10 years, and this studio offers some of the most challenging and rewarding classes I've ever experienced. The instructors truly care about your growth.",
            experience: "10+ years"
        },
        {
            id: 4,
            name: "David Kim",
            role: "Busy Professional",
            image: "/images/hero-yoga.png",
            rating: 5,
            text: "The flexible class schedule fits perfectly with my busy work life. The early morning classes help me start my day with clarity and energy. Highly recommend!",
            experience: "1 year"
        },
        {
            id: 5,
            name: "Lisa Thompson",
            role: "Stress Relief Seeker",
            image: "/images/hero-yoga.png",
            rating: 5,
            text: "After a stressful day at work, the restorative classes here are my sanctuary. The peaceful environment and gentle guidance help me find inner calm and balance.",
            experience: "3 years"
        },
        {
            id: 6,
            name: "James Wilson",
            role: "Fitness Enthusiast",
            image: "/images/hero-yoga.png",
            rating: 5,
            text: "I was skeptical about yoga at first, but the power yoga classes here are incredibly challenging. I've improved my flexibility and core strength significantly.",
            experience: "1.5 years"
        }
    ];

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                size={16}
                className={`${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
            />
        ));
    };

    return (
        <section className="section-padding bg-background">
            <div className="container mx-auto container-padding">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-dark mb-6">
                        WHAT OUR
                        <br />
                        <span className="text-primary">STUDENTS SAY</span>
                    </h2>
                    <p className="text-lg text-text-light max-w-3xl mx-auto leading-relaxed">
                        Hear from our community of yogis about their transformative experiences.
                        Real stories from real people who have found strength, peace, and community with us.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            {/* Quote Icon */}
                            <div className="flex justify-between items-start mb-4">
                                <Quote size={24} className="text-primary/30" />
                                <div className="flex">
                                    {renderStars(testimonial.rating)}
                                </div>
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-text-light leading-relaxed mb-6 italic">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>

                            {/* Student Info */}
                            <div className="flex items-center space-x-3">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-dark">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-text-light">
                                        {testimonial.role} • {testimonial.experience}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="bg-background-alt rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
                        <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-dark mb-6">
                            JOIN OUR COMMUNITY
                        </h3>
                        <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
                            Ready to experience the transformative power of yoga? Start your journey with us
                            and become part of our supportive community.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/booking" className="btn-primary text-lg px-10 py-4">
                                START YOUR JOURNEY
                            </a>
                            <a href="/classes" className="btn-secondary text-lg px-10 py-4">
                                EXPLORE CLASSES
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
