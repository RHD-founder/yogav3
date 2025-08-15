import type { Metadata } from "next";
import "@/styles/globals.css";
import SplashScreenWrapper from "@/components/SplashScreenWrapper";

export const metadata: Metadata = {
    title: {
        default: "The Yoga Studio | Find Your Balance",
        template: "%s | The Yoga Studio"
    },
    description: "Join The Yoga Studio for expert-led classes, workshops, and wellness programs. Transform your mind, body, and spirit through yoga.",
    keywords: ["yoga", "wellness", "meditation", "fitness", "mindfulness", "yoga studio"],
    authors: [{ name: "The Yoga Studio" }],
    creator: "The Yoga Studio",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://theyogastudio.com",
        title: "The Yoga Studio | Find Your Balance",
        description: "Join The Yoga Studio for expert-led classes, workshops, and wellness programs.",
        siteName: "The Yoga Studio",
    },
    twitter: {
        card: "summary_large_image",
        title: "The Yoga Studio | Find Your Balance",
        description: "Join The Yoga Studio for expert-led classes, workshops, and wellness programs.",
        creator: "@theyogastudio",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="antialiased">
                <SplashScreenWrapper>
                    {children}
                </SplashScreenWrapper>
            </body>
        </html>
    );
}
