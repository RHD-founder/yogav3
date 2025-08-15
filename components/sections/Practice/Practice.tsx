import Image from "next/image";
import Link from "next/link";

export default function Practice() {
    return (
        <section className="section-padding bg-background-alt">
            <div className="container mx-auto container-padding">
                {/* First Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            <Image
                                src="/images/hero-yoga.png"
                                alt="Yoga meditation pose"
                                width={500}
                                height={600}
                                className="rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-dark mb-6 leading-tight">
                            PRACTICE YOGA
                            <br />
                            <span className="text-primary">ANYWHERE, ANYTIME</span>
                        </h2>
                        <p className="text-lg text-text-light mb-8 leading-relaxed">
                            Whether you&apos;re a beginner or advanced practitioner, our diverse range of classes
                            will meet you where you are in your yoga journey. From gentle restorative sessions
                            to dynamic vinyasa flows, find your perfect practice.
                        </p>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-text-light">Expert certified instructors</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-text-light">Small class sizes for personal attention</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-text-light">All levels welcome</span>
                            </div>
                        </div>
                        <Link href="/types-of-yoga" className="btn-primary">
                            EXPLORE CLASSES
                        </Link>
                    </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-dark mb-6 leading-tight">
                            TRANSFORM YOUR
                            <br />
                            <span className="text-primary">MIND & BODY</span>
                        </h2>
                        <p className="text-lg text-text-light mb-8 leading-relaxed">
                            Experience the profound benefits of regular yoga practice. Increase flexibility,
                            build strength, reduce stress, and cultivate mindfulness through ancient techniques
                            adapted for modern life.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="text-center">
                                <div className="text-3xl font-serif text-primary mb-2">500+</div>
                                <div className="text-sm text-text-light">Happy Students</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-serif text-primary mb-2">15+</div>
                                <div className="text-sm text-text-light">Class Types</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-serif text-primary mb-2">8</div>
                                <div className="text-sm text-text-light">Expert Teachers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-serif text-primary mb-2">5</div>
                                <div className="text-sm text-text-light">Years Experience</div>
                            </div>
                        </div>
                        <Link href="/teachers" className="btn-secondary">
                            LEARN MORE
                        </Link>
                    </div>
                    <div>
                        <div className="relative">
                            <Image
                                src="/images/hero-yoga.png"
                                alt="Yoga strength pose"
                                width={500}
                                height={600}
                                className="rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
