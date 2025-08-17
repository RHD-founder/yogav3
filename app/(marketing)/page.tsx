import Hero from "@/components/sections/Hero/Hero";
import Practice from "@/components/sections/Practice/Practice";
import ClassTypes from "@/components/sections/ClassTypes/ClassTypes";
import Instructors from "@/components/sections/Instructors/Instructors";
import Pricing from "@/components/sections/Pricing/Pricing";
import InstagramSection from "@/components/sections/Instagram/InstagramSection";
import Newsletter from "@/components/sections/Newsletter/Newsletter";
import Schedule from "@/components/sections/Schedule/Schedule";
import Community from "@/components/sections/Community/Community";
import Insights from "@/components/sections/Insights/Insights";

export default function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <Hero />
            {/* Practice Section */}
            <Practice />
            {/* Class Types */}
            <ClassTypes />
            {/* Features */}
          
            {/* Instructors */}
            <Instructors />
            {/* Pricing */}
            <Pricing />
            {/* Instagram Gallery */}
            <InstagramSection />
            {/* Free Trial */}
           
            {/* Newsletter/Contact Form */}
            <Newsletter />
            {/* Schedule */}
            <Schedule />
            {/* Community */}
            <Community />
            {/* Insights/Instructors */}
            <Insights />
        </>
    );
}
