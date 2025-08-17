"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    message: string;
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    mobile?: string;
    message?: string;
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        message: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
    const [submitMessage, setSubmitMessage] = useState("");

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus(null);
        setSubmitMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus("success");
                setSubmitMessage(data.message || "Message sent successfully!");
                setFormData({ firstName: "", lastName: "", email: "", mobile: "", message: "" });
            } else {
                setSubmitStatus("error");
                setSubmitMessage(data.error || "Something went wrong");
            }
        } catch {
            setSubmitStatus("error");
            setSubmitMessage("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-12">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-serif font-normal text-dark mb-4">Reach Us</h2>
                <p className="text-gray-600">A pellentesque sit amet porttitor eget dolor morbi non arcu.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="form-group">
                        <label htmlFor="firstName" className="block text-sm font-normal text-gray-600 mb-1">
                            First Name*
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full pb-2 border-0 border-b border-gray-300 focus:border-gray-800 focus:ring-0 bg-transparent text-dark"
                        />
                        {errors.firstName && (
                            <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName" className="block text-sm font-normal text-gray-600 mb-1">
                            Last Name*
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full pb-2 border-0 border-b border-gray-300 focus:border-gray-800 focus:ring-0 bg-transparent text-dark"
                        />
                        {errors.lastName && (
                            <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="form-group">
                        <label htmlFor="email" className="block text-sm font-normal text-gray-600 mb-1">
                            Email*
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pb-2 border-0 border-b border-gray-300 focus:border-gray-800 focus:ring-0 bg-transparent text-dark"
                        />
                        {errors.email && (
                            <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="mobile" className="block text-sm font-normal text-gray-600 mb-1">
                            Mobile No*
                        </label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="w-full pb-2 border-0 border-b border-gray-300 focus:border-gray-800 focus:ring-0 bg-transparent text-dark"
                        />
                        {errors.mobile && (
                            <p className="mt-1 text-xs text-red-600">{errors.mobile}</p>
                        )}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="message" className="block text-sm font-normal text-gray-600 mb-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full pb-2 border-0 border-b border-gray-300 focus:border-gray-800 focus:ring-0 bg-transparent text-dark resize-none"
                    />
                    {errors.message && (
                        <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                    )}
                </div>

                {submitStatus && (
                    <div className={`p-4 text-center ${submitStatus === "success"
                        ? "text-green-700"
                        : "text-red-700"
                        }`}>
                        {submitMessage}
                    </div>
                )}

                <div className="flex justify-center mt-8">
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        variant="minimal"
                        size="lg"
                        withArrow
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;