import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen bg-white overflow-hidden">
            {/* Background decorative shapes */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-beige-light rounded-full opacity-30 -translate-x-16 -translate-y-16"></div>
            <div className="absolute top-20 right-0 w-24 h-24 bg-beige-light rounded-full opacity-30 translate-x-12"></div>
            <div className="absolute bottom-20 left-20 w-20 h-20 bg-beige-light rounded-full opacity-20"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
                    {/* Left Panel - Text Content */}
                    <div className="order-2 lg:order-1">
                        <div className="max-w-full text-left" >
                            {/* Main Quote */}
                            <h1 className="font-serif
                             text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-light text-hero-text mb-10 leading-tight tracking-tight">
                                &ldquo;UNITING THE BODY,<br/>AND SPIRIT THROUGH <br/> THE PRACTICE OF YOGA&rdquo;
                                <br />
                                
                            </h1>

                            {/* Descriptive Paragraph */}
                            <p className="text-lg md:text-xl lg:text-xl text-text-light mb-16 leading-relaxed max-w-xl font-light">
                                Yoga is a multifaceted discipline that encompasses physical, mental, and spiritual aspects.
                                It is based on the concept of the interconnectedness of body, mind, and spirit, and aims
                                to promote balance and harmony within oneself and with the world around us.
                            </p>

                            {/* Read More Button - Partial Circle with Text */}
                            <Link
                                href="/types-of-yoga"
                                className="group flex items-center space-x-[-20px] relative"
                            >
                                {/* Partial Circle Container */}
                                <div className="relative w-20 h-20 flex items-center justify-center z-0">
                                    {/* Outer partial circle border */}
                                    <svg
                                        className="w-20 h-20 absolute"
                                        viewBox="0 0 80 80"
                                    >
                                        <circle
                                            cx="40"
                                            cy="40"
                                            r="38"
                                            fill="none"
                                            stroke="#CBAC90"
                                            strokeWidth="1"
                                            strokeDasharray="225 15"
                                            strokeDashoffset="0"
                                            transform="rotate(10 40 40)"
                                            className="group-hover:stroke-primary transition-colors duration-300"
                                        />
                                    </svg>
                                    {/* Inner filled circle with controlled opacity */}
                                    <div
                                        className="w-16 h-16 rounded-full opacity-30"
                                        style={{ backgroundColor: '#CBAC90' }}
                                    ></div>
                                </div>

                                {/* Text and Arrow - Black color */}
                                <span className="flex items-center text-black group-hover:text-primary transition-colors duration-300 font-medium text-base tracking-wide relative z-10">
                                    Read More
                                    <svg
                                        className="ml-4 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Panel - Image */}
                    <div className="order-1 lg:order-2">
                        <div className="relative group flex justify-center lg:justify-end">
                            {/* Image Container with enhanced styling */}
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700 max-w-md">
                                <Image
                                    src="/images/hero-yoga.png"
                                    alt="Yoga practitioner in King Pigeon Pose"
                                    width={400}
                                    height={500}
                                    className="w-full h-auto object-cover"
                                    priority
                                    quality={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
