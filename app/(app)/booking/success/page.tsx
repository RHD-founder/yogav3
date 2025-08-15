import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function BookingSuccessPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-2xl mx-auto text-center">
                <Card>
                    <CardHeader>
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-green-600 text-2xl">✓</span>
                        </div>
                        <h1 className="font-serif text-3xl lg:text-4xl mb-2 text-dark">
                            Booking Confirmed!
                        </h1>
                        <p className="text-gray-600">
                            Thank you for booking with The Yoga Studio
                        </p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="bg-accent/20 border border-accent rounded-lg p-6">
                            <h3 className="font-semibold mb-3">What&apos;s Next?</h3>
                            <ul className="text-left space-y-2 text-gray-700">
                                <li>• You&apos;ll receive a confirmation email shortly</li>
                                <li>• Arrive 15 minutes before your class starts</li>
                                <li>• Bring a water bottle and comfortable clothes</li>
                                <li>• Yoga mats are provided at the studio</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <p className="text-gray-600">
                                We&apos;re excited to see you on the mat! If you have any questions,
                                don&apos;t hesitate to contact us.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/">
                                    <Button variant="primary" size="lg">
                                        Back to Home
                                    </Button>
                                </Link>
                                <Link href="/schedule">
                                    <Button variant="outline" size="lg">
                                        View Schedule
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
