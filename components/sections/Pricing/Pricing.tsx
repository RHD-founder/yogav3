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
        popular: false,
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
                        OUR PRICES
                    </h2>
                    <p className="text-lg text-text-light max-w-3xl mx-auto leading-relaxed">
                        Choose the perfect plan for your yoga journey. All memberships include
                        access to our full range of classes and studio amenities.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`group relative bg-white rounded-3xl p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col ${plan.popular
                                ? 'ring-4 ring-primary/20 bg-gradient-to-br from-white to-primary/5 transform scale-105 z-10'
                                : 'border border-gray-100 hover:border-primary/30'
                                }`}
                        >
                            {/* Popular Badge */}


                            {/* Plan Header */}
                            <div className="text-center mb-8">
                                <div className="mb-6">
                                    <span className="inline-block bg-gray-50 text-gray-600 px-4 py-2 rounded-full text-sm font-medium tracking-wider">
                                        {plan.name}
                                    </span>
                                </div>

                                <div className="mb-4">
                                    <div className="flex items-baseline justify-center">
                                        <span className="text-6xl font-light text-dark">${plan.price}</span>
                                    </div>
                                    <p className="text-xl font-semibold text-dark mb-3">{plan.period}</p>
                                    <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">{plan.description}</p>
                                </div>
                            </div>

                            {/* Features List */}
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start group/item">
                                        <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-0.5">
                                            <span className="text-primary text-sm font-bold">✓</span>
                                        </div>
                                        <span className="text-gray-700 text-sm leading-relaxed group-hover/item:text-dark transition-colors">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <div className="mt-auto">
                                <Link
                                    href="/booking"
                                    className={`w-full py-4 px-6 rounded-2xl font-semibold text-center transition-all duration-300 block transform hover:scale-105 ${plan.popular
                                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl'
                                        : 'bg-white border-2 border-primary text-primary'
                                        }`}
                                >
                                    {plan.buttonText}
                                </Link>
                            </div>
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
