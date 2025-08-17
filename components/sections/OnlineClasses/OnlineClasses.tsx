import Image from "next/image";

export default function OnlineClasses() {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="relative w-full h-96">
                    <Image
                        src="/images/online-class.png"
                        alt="Online Yoga Classes"
                        fill
                        className="rounded-xl shadow-md object-cover"
                    />
                </div>

                {/* Content */}
                <div>
                    <h2 className="font-serif text-4xl mb-4">Practice Anytime, Anywhere</h2>
                    <p className="text-gray-600 mb-6">
                        Access live and recorded yoga sessions from the comfort of your home.
                    </p>
                    <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition">
                        Start Now
                    </button>
                </div>
            </div>
        </section>
    );
}
