import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

export default function InstagramSection() {
    const instagramPosts = [
        {
            id: 1,
            image: "/images/hero-yoga.png", // Replace with actual Instagram post images
            alt: "Yoga practice in nature",
            likes: "2.4k",
            comments: "128"
        },
        {
            id: 2,
            image: "/images/hero-yoga.png",
            alt: "Meditation session",
            likes: "1.8k",
            comments: "95"
        },
        {
            id: 3,
            image: "/images/hero-yoga.png",
            alt: "Group yoga class",
            likes: "3.2k",
            comments: "156"
        },
        {
            id: 4,
            image: "/images/hero-yoga.png",
            alt: "Sunrise yoga",
            likes: "2.9k",
            comments: "134"
        },
        {
            id: 5,
            image: "/images/hero-yoga.png",
            alt: "Advanced pose demonstration",
            likes: "4.1k",
            comments: "203"
        },
        {
            id: 6,
            image: "/images/hero-yoga.png",
            alt: "Studio environment",
            likes: "1.6k",
            comments: "87"
        }
    ];

    return (
        <section className="section-padding bg-background">
            <div className="container mx-auto container-padding">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-dark mb-6">
                        FOLLOW OUR JOURNEY
                        
                    </h2>
                    <p className="text-lg text-text-light max-w-3xl mx-auto leading-relaxed">
                        Get inspired by our daily yoga practice, community moments, and wellness tips.
                        Follow us on Instagram for real-time updates and behind-the-scenes content.
                    </p>
                </div>

                {/* Instagram Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
                    {instagramPosts.map((post) => (
                        <div key={post.id} className="relative group overflow-hidden rounded-lg aspect-square">
                            <Image
                                src={post.image}
                                alt={post.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Overlay with likes and comments */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-white text-center">
                                    <div className="flex items-center justify-center mb-2">
                                        <Instagram size={20} className="mr-2" />
                                        <span className="text-sm font-medium">{post.likes}</span>
                                    </div>
                                    <div className="text-xs opacity-90">{post.comments} comments</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="bg-background-alt rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
                        <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-dark mb-6">
                            JOIN OUR ONLINE COMMUNITY
                        </h3>
                        <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
                            Connect with fellow yogis, get daily inspiration, and stay updated with our latest classes and events.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://instagram.com/theyogastudio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary flex items-center justify-center gap-2"
                            >
                                <Instagram size={20} />
                                FOLLOW ON INSTAGRAM
                            </a>
                            <Link href="/contact" className="btn-secondary">
                                GET IN TOUCH
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
