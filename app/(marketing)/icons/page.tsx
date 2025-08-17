import IconExamples from "@/components/ui/IconExamples";

export const metadata = {
    title: "Font Awesome Icons",
    description: "Explore the wide range of Font Awesome icons available for use in our yoga studio website",
};

export default function IconsPage() {
    return (
        <div className="container mx-auto py-12 px-4">
            <h1 className="text-4xl font-serif mb-8 text-center">Font Awesome Icons</h1>
            <p className="text-text-light text-center max-w-2xl mx-auto mb-12">
                We&apos;ve integrated Font Awesome icons throughout our website to enhance visual appeal and improve user experience.
                Below are examples of the various icons available for use.
            </p>

            <IconExamples />
        </div>
    );
}
