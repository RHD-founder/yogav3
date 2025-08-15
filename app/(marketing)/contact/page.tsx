import ContactForm from "@/components/forms/ContactForm";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="font-serif text-4xl lg:text-5xl mb-6 text-dark">
                    Contact Us
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Have questions about our classes, memberships, or facilities?
                    We&apos;d love to hear from you and help you start your yoga journey.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Contact Form */}
                <div>
                    <ContactForm />
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                    <Card>
                        <CardHeader>
                            <h2 className="font-serif text-2xl font-bold text-dark">
                                Visit Our Studio
                            </h2>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <h3 className="font-semibold mb-2">Address</h3>
                                <p className="text-gray-700">
                                    123 Wellness Street<br />
                                    Mindful City, MC 12345
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-2">Phone</h3>
                                <p className="text-gray-700">(555) 123-YOGA</p>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-2">Email</h3>
                                <p className="text-gray-700">hello@theyogastudio.com</p>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-2">Studio Hours</h3>
                                <div className="text-gray-700 space-y-1">
                                    <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
                                    <p>Saturday: 7:00 AM - 8:00 PM</p>
                                    <p>Sunday: 8:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <h2 className="font-serif text-2xl font-bold text-dark">
                                Frequently Asked Questions
                            </h2>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold mb-1">Do I need to bring my own mat?</h3>
                                    <p className="text-gray-700 text-sm">
                                        We provide high-quality mats for all students, but you&apos;re welcome to bring your own if you prefer.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">What should I wear?</h3>
                                    <p className="text-gray-700 text-sm">
                                        Comfortable, stretchy clothing that allows for movement. Avoid loose-fitting clothes that might get in the way.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Can I try a class before committing?</h3>
                                    <p className="text-gray-700 text-sm">
                                        Absolutely! We offer a free first class for all new students.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Map Section */}
            <Card>
                <CardHeader>
                    <h2 className="font-serif text-2xl font-bold text-dark text-center">
                        Find Us
                    </h2>
                </CardHeader>
                <CardContent>
                    <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                        <p className="text-gray-500">
                            Interactive map would be embedded here
                            <br />
                            <span className="text-sm">(Google Maps integration)</span>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
