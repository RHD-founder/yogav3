import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const instructors = [
    {
        name: "Sarah Williams",
        title: "Lead Instructor & Studio Founder",
        specialties: ["Hatha", "Vinyasa", "Meditation"],
        experience: "15+ years",
        bio: "Sarah founded The Yoga Studio with a vision to create an inclusive space for all practitioners. With over 15 years of experience, she specializes in gentle, alignment-based practices that help students build confidence and strength.",
        credentials: ["E-RYT 500", "Meditation Teacher", "Ayurveda Practitioner"],
        image: "/images/instructor-placeholder.jpg"
    },
    {
        name: "Mike Chen",
        title: "Senior Instructor",
        specialties: ["Vinyasa Flow", "Power Yoga", "Prenatal"],
        experience: "10+ years",
        bio: "Mike brings dynamic energy and precise alignment to his classes. He's passionate about making yoga accessible to everyone and loves helping students discover their inner strength through movement.",
        credentials: ["RYT 500", "Prenatal Yoga Certified", "Anatomy Training"],
        image: "/images/instructor-placeholder.jpg"
    },
    {
        name: "Emma Rodriguez",
        title: "Senior Instructor",
        specialties: ["Hot Yoga", "Yin", "Restorative"],
        experience: "8+ years",
        bio: "Emma's classes blend traditional yoga wisdom with modern understanding of the body. She creates a safe, nurturing environment where students can explore their practice without judgment.",
        credentials: ["RYT 500", "Yin Yoga Certified", "Trauma-Informed Yoga"],
        image: "/images/instructor-placeholder.jpg"
    },
    {
        name: "Lisa Thompson",
        title: "Instructor",
        specialties: ["Gentle Yoga", "Chair Yoga", "Senior Yoga"],
        experience: "6+ years",
        bio: "Lisa specializes in adaptive yoga practices that meet students where they are. Her gentle approach makes yoga accessible to people of all ages and physical abilities.",
        credentials: ["RYT 200", "Chair Yoga Certified", "Senior Yoga Specialist"],
        image: "/images/instructor-placeholder.jpg"
    },
    {
        name: "Tom Johnson",
        title: "Instructor",
        specialties: ["Power Yoga", "Meditation", "Philosophy"],
        experience: "7+ years",
        bio: "Tom combines physical practice with yogic philosophy, helping students understand the deeper aspects of yoga. His classes are both challenging and spiritually enriching.",
        credentials: ["RYT 500", "Philosophy Studies", "Meditation Teacher"],
        image: "/images/instructor-placeholder.jpg"
    },
    {
        name: "Maya Patel",
        title: "Instructor",
        specialties: ["Ashtanga", "Hot Yoga", "Breathwork"],
        experience: "5+ years",
        bio: "Maya's traditional Ashtanga background brings discipline and precision to her teaching. She's passionate about the transformative power of consistent practice and proper breathing.",
        credentials: ["RYT 200", "Ashtanga Authorized", "Pranayama Certified"],
        image: "/images/instructor-placeholder.jpg"
    }
];

export default function InstructorsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="font-serif text-4xl lg:text-5xl mb-6 text-dark">
                    Meet Our Instructors
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Our experienced and certified instructors are passionate about sharing the
                    transformative practice of yoga. Each brings their unique style and expertise
                    to create a diverse range of classes for all levels.
                </p>
            </div>

            {/* Instructors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {instructors.map((instructor, index) => (
                    <Card key={index} className="h-full flex flex-col">
                        <CardHeader className="text-center">
                            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-4xl text-gray-400">👤</span>
                            </div>
                            <h3 className="font-serif text-xl font-bold text-dark mb-1">
                                {instructor.name}
                            </h3>
                            <p className="text-primary font-medium">{instructor.title}</p>
                            <p className="text-sm text-gray-600">{instructor.experience} experience</p>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col">
                            <div className="mb-4">
                                <h4 className="font-semibold mb-2">Specialties:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {instructor.specialties.map((specialty, i) => (
                                        <span key={i} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                                            {specialty}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <p className="text-gray-700 text-sm mb-4 flex-1">
                                {instructor.bio}
                            </p>

                            <div className="mb-4">
                                <h4 className="font-semibold mb-2 text-sm">Credentials:</h4>
                                <ul className="text-xs text-gray-600 space-y-1">
                                    {instructor.credentials.map((credential, i) => (
                                        <li key={i}>• {credential}</li>
                                    ))}
                                </ul>
                            </div>

                            <Button variant="outline" className="w-full mt-auto">
                                View Classes
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* CTA Section */}
            <Card className="text-center">
                <CardContent className="py-12">
                    <h2 className="font-serif text-3xl mb-4 text-dark">
                        Ready to Practice With Us?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Our instructors are here to support you on your yoga journey, whether
                        you&apos;re just starting out or looking to deepen your practice.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg">
                            Book Your First Class
                        </Button>
                        <Button variant="outline" size="lg">
                            View Schedule
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
