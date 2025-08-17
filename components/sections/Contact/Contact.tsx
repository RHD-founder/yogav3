"use client";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faClock, faPaperPlane, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: ""
                });
            }
        } catch (error) {
            console.error("Contact form error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const contactInfo = [
        {
            icon: faLocationDot,
            title: "Visit Us",
            details: ["123 Yoga Lane", "Serenity City, YS 90210"],
            action: "Get Directions",
            actionLink: "https://maps.google.com"
        },
        {
            icon: faPhone,
            title: "Call Us",
            details: ["(123) 456-7890", "Available Mon-Sun"],
            action: "Call Now",
            actionLink: "tel:+1234567890"
        },
        {
            icon: faEnvelope,
            title: "Email Us",
            details: ["info@theyogastudio.com", "We reply within 24 hours"],
            action: "Send Email",
            actionLink: "mailto:info@theyogastudio.com"
        },
        {
            icon: faClock,
            title: "Studio Hours",
            details: ["Mon-Fri: 6 AM - 9 PM", "Sat-Sun: 7 AM - 6 PM"],
            action: "View Schedule",
            actionLink: "/schedule"
        }
    ];

    if (isSubmitted) {
        return (
            <section className="section-padding bg-background">
                <div className="container mx-auto container-padding text-center">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl max-w-2xl mx-auto">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FontAwesomeIcon icon={faCircleCheck} size="2x" className="text-green-600" />
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl text-dark mb-4">
                            Message Sent Successfully!
                        </h2>
                        <p className="text-lg text-text-light mb-6">
                            Thank you for reaching out to us. We&apos;ve received your message and will get back to you within 24 hours.
                        </p>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="btn-primary"
                        >
                            Send Another Message
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="section-padding bg-background-alt">
            <div className="container mx-auto container-padding">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-dark mb-6">
                        GET IN
                        <br />
                        <span className="text-primary">TOUCH</span>
                    </h2>
                    <p className="text-lg text-text-light max-w-3xl mx-auto leading-relaxed">
                        Have questions about our classes, want to schedule a private session, or just want to say hello?
                        We&apos;d love to hear from you. Reach out and let&apos;s start a conversation.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h3 className="font-serif text-2xl text-dark mb-6">Send Us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-dark mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Class Information">Class Information</option>
                                        <option value="Private Sessions">Private Sessions</option>
                                        <option value="Membership">Membership</option>
                                        <option value="Events">Events</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    placeholder="Tell us how we can help you..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full btn-primary py-4 disabled:opacity-50"
                            >
                                {isLoading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Sending Message...
                                    </span>
                                ) : (
                                    <span className="flex items-center justify-center gap-2">
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                        Send Message
                                    </span>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="font-serif text-2xl text-dark mb-6">Contact Information</h3>
                            <p className="text-text-light leading-relaxed mb-6">
                                We&apos;re here to help you on your yoga journey. Whether you have questions about classes,
                                want to schedule a visit, or need information about our studio, don&apos;t hesitate to reach out.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FontAwesomeIcon icon={info.icon} className="text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-dark mb-2">{info.title}</h4>
                                        {info.details.map((detail, detailIndex) => (
                                            <p key={detailIndex} className="text-text-light text-sm mb-1">
                                                {detail}
                                            </p>
                                        ))}
                                        <a
                                            href={info.actionLink}
                                            className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors duration-200 text-sm mt-2"
                                        >
                                            {info.action}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
