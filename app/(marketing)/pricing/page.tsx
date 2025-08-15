import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const pricingPlans = [
    {
        name: "Drop-In",
        price: "$25",
        period: "per class",
        description: "Perfect for trying out our studio or occasional practice",
        features: [
            "Single class access",
            "All class types included",
            "Mat included",
            "No commitment required"
        ],
        popular: false,
        cta: "Buy Single Class"
    },
    {
        name: "10-Class Package",
        price: "$200",
        period: "expires in 3 months",
        description: "Great value for regular practitioners",
        features: [
            "10 classes to use flexibly",
            "All class types included",
            "Mat included",
            "3-month expiration",
            "Save $50 vs drop-in"
        ],
        popular: true,
        cta: "Buy Package"
    },
    {
        name: "Unlimited Monthly",
        price: "$120",
        period: "per month",
        description: "Perfect for dedicated yogis who want unlimited access",
        features: [
            "Unlimited classes",
            "All class types included",
            "Mat included",
            "Priority booking",
            "10% off workshops",
            "Guest passes (2/month)"
        ],
        popular: false,
        cta: "Start Membership"
    },
    {
        name: "Annual Membership",
        price: "$1,200",
        period: "per year",
        description: "Best value for committed practitioners",
        features: [
            "Unlimited classes",
            "All class types included",
            "Mat included",
            "Priority booking",
            "20% off workshops",
            "Guest passes (4/month)",
            "Free private session",
            "Save $240 vs monthly"
        ],
        popular: false,
        cta: "Join Annual"
    }
];

const additionalServices = [
    {
        name: "Private Sessions",
        price: "$85",
        period: "per session",
        description: "One-on-one instruction tailored to your needs"
    },
    {
        name: "Semi-Private (2-3 people)",
        price: "$60",
        period: "per person",
        description: "Small group instruction with friends or family"
    },
    {
        name: "Workshops",
        price: "$45-75",
        period: "per workshop",
        description: "Deep-dive sessions on specific topics or techniques"
    },
    {
        name: "Teacher Training",
        price: "$2,500",
        period: "200-hour program",
        description: "Comprehensive certification program"
    }
];

export default function PricingPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="font-serif text-4xl lg:text-5xl mb-6 text-dark">
                    Pricing & Memberships
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Choose the option that fits your practice and lifestyle. All plans include
                    access to our full range of classes and amenities.
                </p>
            </div>

            {/* Main Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {pricingPlans.map((plan, index) => (
                    <Card key={index} className={`relative h-full flex flex-col ${plan.popular ? 'border-primary border-2' : ''}`}>
                        {plan.popular && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                                    Most Popular
                                </span>
                            </div>
                        )}
                        <CardHeader className="text-center">
                            <h3 className="font-serif text-2xl font-bold text-dark mb-2">
                                {plan.name}
                            </h3>
                            <div className="mb-4">
                                <span className="text-4xl font-bold text-primary">{plan.price}</span>
                                <span className="text-gray-600 text-sm ml-1">{plan.period}</span>
                            </div>
                            <p className="text-gray-600 text-sm">
                                {plan.description}
                            </p>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col">
                            <ul className="space-y-3 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-primary mr-2 mt-1">✓</span>
                                        <span className="text-gray-700 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                variant={plan.popular ? "primary" : "outline"}
                                className="w-full mt-auto"
                            >
                                {plan.cta}
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Additional Services */}
            <div className="mb-16">
                <h2 className="font-serif text-3xl text-center mb-12 text-dark">
                    Additional Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {additionalServices.map((service, index) => (
                        <Card key={index}>
                            <CardContent className="text-center py-8">
                                <h3 className="font-semibold text-lg mb-2 text-dark">
                                    {service.name}
                                </h3>
                                <div className="mb-3">
                                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                                    <span className="text-gray-600 text-sm ml-1">{service.period}</span>
                                </div>
                                <p className="text-gray-600 text-sm mb-4">
                                    {service.description}
                                </p>
                                <Button variant="outline" size="sm" className="w-full">
                                    Learn More
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Free Trial CTA */}
            <Card className="text-center">
                <CardContent className="py-12">
                    <h2 className="font-serif text-3xl mb-4 text-dark">
                        Try Your First Class Free!
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        New to our studio? We invite you to experience what we&apos;re all about
                        with a complimentary first class. No strings attached!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg">
                            Claim Free Class
                        </Button>
                        <Button variant="outline" size="lg">
                            Contact Us
                        </Button>
                    </div>
                    <p className="text-sm text-gray-500 mt-6">
                        * Free trial is valid for first-time students only. Must present valid ID.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
