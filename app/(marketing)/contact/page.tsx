import ContactForm from "@/components/forms/ContactForm";
import AnimatedElement from "@/components/ui/AnimatedElement";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function ContactPage() {
    return (
        <>
            {/* Contact Form Section */}
            <div className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <ContactForm />
                </div>
            </div>

            {/* Studio Information Section */}
            <div className="bg-gray-50 py-16 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-serif text-3xl md:text-4xl font-normal text-center text-dark mb-12">
                            Studio Information
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <AnimatedElement type="fade-in" delay={200} duration={800}>
                                <div className="flex flex-col">
                                    <div className="flex items-start mb-6">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                            <FontAwesomeIcon icon={faLocationDot} className="text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-serif text-lg font-medium text-dark mb-2">Address</h3>
                                            <p className="text-gray-700 mb-2">
                                                <strong>Arunima Dutta&apos;s The Yoga Studio</strong><br />
                                                U Turn, Chandmari Flyover<br />
                                                Above Panasonic Showroom<br />
                                                Krishna Nagar, Chandmari<br />
                                                Guwahati, Assam 781003
                                            </p>
                                            <Link
                                                href="https://www.google.com/maps/place/Arunima+Dutta's+The+Yoga+Studio/@26.1503584,91.7374926,16192m/data=!3m1!1e3!4m10!1m2!2m1!1sthe+yoga+studio+guwahati!3m6!1s0x375a59bd3084d929:0x4bf0a495583cd35f!8m2!3d26.1848238!4d91.7750849!15sChh0aGUgeW9nYSBzdHVkaW8gZ3V3YWhhdGlaGiIYdGhlIHlvZ2Egc3R1ZGlvIGd1d2FoYXRpkgELeW9nYV9zdHVkaW-aASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUlVkazFtYVdoblJSQUKqAVYQASoTIg90aGUgeW9nYSBzdHVkaW8oADIfEAEiG9rX-vaW2M5xBUeA64s-dU2h3f5CgYaaBv6dVzIcEAIiGHRoZSB5b2dhIHN0dWRpbyBndXdhaGF0aeABAPoBBAgAEDU!16s%2Fg%2F11f29zxf35?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary hover:text-primary/80 inline-flex items-center group"
                                            >
                                                <span>Visit Our Location</span>
                                                <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="flex items-start mb-6">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                            <FontAwesomeIcon icon={faPhone} className="text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-serif text-lg font-medium text-dark mb-2">Phone</h3>
                                            <p className="text-gray-700 mb-2">(555) 123-YOGA</p>
                                            <Link
                                                href="tel:+5551234962"
                                                className="text-primary hover:text-primary/80 inline-flex items-center group"
                                            >
                                                <span>Call Now</span>
                                                <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedElement>

                            <AnimatedElement type="fade-in" delay={300} duration={800}>
                                <div className="flex flex-col">
                                    <div className="flex items-start mb-6">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                            <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-serif text-lg font-medium text-dark mb-2">Email</h3>
                                            <p className="text-gray-700 mb-2">hello@theyogastudio.com</p>
                                            <Link
                                                href="mailto:hello@theyogastudio.com"
                                                className="text-primary hover:text-primary/80 inline-flex items-center group"
                                            >
                                                <span>Send Email</span>
                                                <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                            <FontAwesomeIcon icon={faClock} className="text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-serif text-lg font-medium text-dark mb-2">Studio Hours</h3>
                                            <div className="text-gray-700 space-y-1 mb-2">
                                                <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
                                                <p>Saturday: 7:00 AM - 8:00 PM</p>
                                                <p>Sunday: 8:00 AM - 6:00 PM</p>
                                            </div>
                                            <Link
                                                href="/timetable"
                                                className="text-primary hover:text-primary/80 inline-flex items-center group"
                                            >
                                                <span>View Schedule</span>
                                                <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedElement>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full-width Map Section */}
            <div className="w-full">
                <iframe
                    title="Arunima Dutta's The Yoga Studio Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.6857716331286!2d91.77508489999999!3d26.1848238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59bd3084d929%3A0x4bf0a495583cd35f!2sArunima%20Dutta%27s%20The%20Yoga%20Studio!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                    width="100%"
                    height="500"
                    className="border-0"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    );
}