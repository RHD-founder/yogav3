// app/(marketing)/layout.tsx
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Navigation */}
            <Navbar />

            {/* Page Content */}
            <main className="flex-1">{children}</main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
