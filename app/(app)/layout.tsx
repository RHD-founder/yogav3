// app/(app)/layout.tsx
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Navigation */}
            <Navbar />

            {/* Page Content */}
            <main className="flex-1 bg-gray-50">{children}</main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
