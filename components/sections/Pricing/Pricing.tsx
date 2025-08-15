import Link from "next/link";

const pricingPlans = [
    {
        name: "TRY OUT",
        price: "50",
        period: "Single Class",
        description: "Perfect for first-time visitors",
        features: [
            "Single class access",
            "All class types included",
            "Mat provided",
            "No commitment"
        ],
        popular: false,
        buttonText: "BOOK NOW"
    },
    {
        name: "MOST POPULAR",
        price: "70",
        period: "Monthly Unlimited",
        description: "Best value for regular practice",
        features: [
            "Unlimited classes",
            "All class types included",
            "Mat provided",
            "Priority booking",
            "Guest passes (2/month)"
        ],
        popular: true,
        buttonText: "GET STARTED"
    },
    {
        name: "SAVE MORE",
        price: "100",
        period: "3-Month Package",
        description: "Commit to your practice",
        features: [
            "Unlimited classes",
            "All class types included",
            "Mat provided",
            "Priority booking",
            "20% off workshops",
            "Guest passes (4/month)"
        ],
        popular: false,
        buttonText: "CHOOSE PLAN"
    }
];

export default function Pricing() {
    return (
        <section className="section-padding bg-background-alt">
            <div className="container mx-auto container-padding">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-dark mb-6">
                        OUR
                        <br />
                        <span className="text-primary">PRICES</span>
                    </h2>
                    <p className="text-lg text-text-light max-w-3xl mx-auto leading-relaxed">
                        Choose the perfect plan for your yoga journey. All memberships include
                        access to our full range of classes and studio amenities.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl ${plan.popular ? 'border-2 border-primary transform scale-105' : 'border border-beige-light'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium">
                                        {plan.name}
                                    </span>
                                </div>
                            )}

                            {!plan.popular && (
                                <div className="text-center mb-6">
                                    <span className="text-sm font-medium text-text-light tracking-wider">
                                        {plan.name}
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <div className="mb-4">
                                    <span className="text-5xl font-light text-dark">{plan.price}</span>
                                    <span className="text-lg text-text-light">$</span>
                                </div>
                                <p className="text-lg font-medium text-dark mb-2">{plan.period}</p>
                                <p className="text-text-light text-sm">{plan.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-primary mr-3 mt-1">✓</span>
                                        <span className="text-text-light text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/booking"
                                className={`w-full py-3 px-6 rounded-full font-medium text-center transition-all duration-300 block ${plan.popular
                                    ? 'bg-primary text-white hover:bg-secondary'
                                    : 'border border-primary text-primary hover:bg-primary hover:text-white'
                                    }`}
                            >
                                {plan.buttonText}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="text-center">
                    <p className="text-text-light mb-4">
                        All plans include mat rental • No hidden fees • Cancel anytime
                    </p>
                    <Link href="/contact" className="btn-secondary">
                        HAVE QUESTIONS?
                    </Link>
                </div>
            </div>
        </section>
    );
}
