import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function BookingPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="font-serif text-4xl lg:text-5xl mb-4 text-dark">
                    Book Your Session
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Choose from our variety of yoga classes and book your perfect session.
                    Start your journey to wellness today.
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <Card>
                    <CardHeader>
                        <h2 className="text-2xl font-serif font-bold text-center text-dark">
                            Booking System Coming Soon
                        </h2>
                    </CardHeader>
                    <CardContent className="text-center space-y-6">
                        <p className="text-gray-600">
                            We&apos;re currently building our online booking system to make it easier for you
                            to reserve your spot in our classes.
                        </p>

                        <div className="bg-accent/20 border border-accent rounded-lg p-6">
                            <h3 className="font-semibold mb-2">In the meantime:</h3>
                            <ul className="text-left max-w-md mx-auto space-y-2">
                                <li>• Call us at (555) 123-YOGA</li>
                                <li>• Visit us in person at the studio</li>
                                <li>• Send us a message through our contact form</li>
                                <li>• Follow us on social media for updates</li>
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="primary" size="lg">
                                <a href="tel:555-123-9642" className="flex items-center gap-2">
                                    📞 Call Now
                                </a>
                            </Button>
                            <Button variant="outline" size="lg">
                                <a href="/contact" className="flex items-center gap-2">
                                    ✉️ Contact Us
                                </a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
