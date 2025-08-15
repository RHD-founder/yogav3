import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="hero-section">
            {/* Background decorative shapes */}
            <div className="hero-bg-shape-1"></div>
            <div className="hero-bg-shape-2"></div>
            <div className="hero-bg-shape-3"></div>

            <div className="hero-content-container">
                <div className="hero-grid">
                    {/* Left Panel - Text Content */}
                    <div className="hero-left-panel">
                        <div className="hero-text-container">
                            {/* Main Quote */}
                            <h1 className="hero-main-quote">
                                &ldquo;UNITING THE BODY, MIND,<br />
                                AND SPIRIT THROUGH<br />
                                THE PRACTICE OF YOGA&rdquo;
                            </h1>

                            {/* Descriptive Paragraph */}
                            <p className="hero-description">
                                Yoga is a multifaceted discipline that encompasses physical, mental, and spiritual aspects.
                                It is based on the concept of the interconnectedness of body, mind, and spirit, and aims
                                to promote balance and harmony within oneself and with the world around us.
                            </p>

                            {/* Read More Button - Partial Circle with Text */}
                            <Link
                                href="/types-of-yoga"
                                className="hero-read-more-btn"
                            >
                                {/* Partial Circle Container */}
                                <div className="hero-circle-container">
                                    {/* Outer partial circle border */}
                                    <svg
                                        className="hero-circle-svg"
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
                                            className="hero-circle-path"
                                        />
                                    </svg>
                                    {/* Inner filled circle with controlled opacity */}
                                    <div
                                        className="hero-inner-circle"
                                        style={{ backgroundColor: '#CBAC90' }}
                                    ></div>
                                </div>

                                {/* Text and Arrow - Black color */}
                                <span className="hero-read-more-text">
                                    Read More
                                    <svg
                                        className="hero-arrow-icon"
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
                    <div className="hero-right-panel">
                        <div className="hero-image-container">
                            {/* Image Container with enhanced styling */}
                            <div className="hero-image-wrapper">
                                <Image
                                    src="/images/hero-yoga.png"
                                    alt="Yoga practitioner in King Pigeon Pose"
                                    width={400}
                                    height={500}
                                    className="hero-image"
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
