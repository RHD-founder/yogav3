import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const classTypes = [
    {
        name: "Hatha Yoga",
        description: "A gentle introduction to the most basic yoga postures. Perfect for beginners.",
        duration: "60 minutes",
        level: "Beginner",
        benefits: ["Improved flexibility", "Stress relief", "Better posture"]
    },
    {
        name: "Vinyasa Flow",
        description: "Dynamic sequences that link movement and breath in a flowing practice.",
        duration: "75 minutes",
        level: "Intermediate",
        benefits: ["Cardiovascular health", "Strength building", "Mental focus"]
    },
    {
        name: "Yin Yoga",
        description: "Slow-paced style with poses held for longer periods. Deeply relaxing.",
        duration: "90 minutes",
        level: "All Levels",
        benefits: ["Deep relaxation", "Increased flexibility", "Mindfulness"]
    },
    {
        name: "Power Yoga",
        description: "Athletic and vigorous style that builds strength and stamina.",
        duration: "60 minutes",
        level: "Advanced",
        benefits: ["Muscle strength", "Endurance", "Weight management"]
    },
    {
        name: "Restorative Yoga",
        description: "Gentle practice using props to support the body in restful poses.",
        duration: "75 minutes",
        level: "All Levels",
        benefits: ["Stress reduction", "Better sleep", "Emotional balance"]
    },
    {
        name: "Hot Yoga",
        description: "Traditional sequences practiced in a heated room for deeper stretches.",
        duration: "90 minutes",
        level: "Intermediate",
        benefits: ["Detoxification", "Increased flexibility", "Mental clarity"]
    }
];

export default function ClassesPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="font-serif text-4xl lg:text-5xl mb-6 text-dark">
                    Our Yoga Classes
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Discover the perfect class for your practice level and goals. From gentle
                    beginner sessions to challenging advanced flows, we have something for everyone.
                </p>
            </div>

            {/* Classes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {classTypes.map((classType, index) => (
                    <Card key={index} className="h-full flex flex-col">
                        <CardHeader>
                            <h3 className="font-serif text-2xl font-bold text-dark mb-2">
                                {classType.name}
                            </h3>
                            <div className="flex justify-between text-sm text-gray-600 mb-3">
                                <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                                    {classType.level}
                                </span>
                                <span>{classType.duration}</span>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col">
                            <p className="text-gray-700 mb-4 flex-1">
                                {classType.description}
                            </p>
                            <div className="mb-6">
                                <h4 className="font-semibold mb-2">Benefits:</h4>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    {classType.benefits.map((benefit, i) => (
                                        <li key={i}>• {benefit}</li>
                                    ))}
                                </ul>
                            </div>
                            <Button className="w-full mt-auto">
                                Book This Class
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* CTA Section */}
            <div className="text-center bg-accent/20 rounded-2xl p-8">
                <h2 className="font-serif text-3xl mb-4 text-dark">
                    New to Yoga?
                </h2>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                    Start your journey with our beginner-friendly classes. Our experienced
                    instructors will guide you through the fundamentals safely and mindfully.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">
                        Try Your First Class Free
                    </Button>
                    <Button variant="outline" size="lg">
                        View Schedule
                    </Button>
                </div>
            </div>
        </div>
    );
}
