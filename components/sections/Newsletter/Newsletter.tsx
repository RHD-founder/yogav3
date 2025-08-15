"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function Newsletter() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });
    const [agreed, setAgreed] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!agreed) return;

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", phone: "" });
            setAgreed(false);
        }, 3000);
    };

    if (isSubmitted) {
        return (
            <section className="section-padding bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="container mx-auto container-padding text-center">
                    <div className="max-w-2xl mx-auto bg-white rounded-3xl p-12 shadow-xl">
                        <CheckCircle size={64} className="text-primary mx-auto mb-6" />
                        <h2 className="font-serif text-3xl md:text-4xl text-dark mb-4">
                            Thank You!
                        </h2>
                        <p className="text-lg text-text-light mb-6">
                            Your free trial lesson request has been submitted successfully.
                            We&apos;ll contact you within 24 hours to confirm your session.
                        </p>
                        <p className="text-text-light">
                            Check your email for confirmation details.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="section-padding bg-gradient-to-br from-primary/10 to-accent/10">
            <div className="container mx-auto container-padding">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Form Section */}
                    <div>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-dark mb-6">
                            SIGN UP FOR A FREE
                            <br />
                            <span className="text-primary">TRIAL LESSON NOW!</span>
                        </h2>
                        <p className="text-lg text-text-light mb-8 leading-relaxed">
                            Experience the transformative power of yoga with a complimentary class.
                            No experience necessary, all levels welcome.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-dark placeholder-text-light"
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-dark placeholder-text-light"
                                />
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-dark placeholder-text-light"
                                />
                            </div>

                            <div className="flex items-start space-x-3">
                                <input
                                    type="checkbox"
                                    id="agreement"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                    className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                                />
                                <label htmlFor="agreement" className="text-sm text-text-light">
                                    I agree to the <a href="/terms" className="text-primary hover:underline">terms and conditions</a>
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={!agreed || isSubmitting}
                                className={`w-full py-4 px-8 rounded-lg font-medium transition-all duration-200 ${agreed && !isSubmitting
                                    ? "bg-primary text-white hover:bg-secondary transform hover:scale-105"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    }`}
                            >
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </button>
                        </form>
                    </div>

                    {/* Image Section */}
                    <div className="relative">
                        <Image
                            src="/images/hero-yoga.png"
                            alt="Yoga practice"
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
