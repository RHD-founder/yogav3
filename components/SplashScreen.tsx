"use client";
import { useState, useEffect } from "react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [text, setText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    const fullText = "The Yoga Studio";

    useEffect(() => {
        // Typing animation
        if (currentIndex < fullText.length) {
            const timer = setTimeout(() => {
                setText(fullText.slice(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            }, 150); // Typing speed

            return () => clearTimeout(timer);
        } else {
            // Show cursor for a moment after typing completes
            const cursorTimer = setTimeout(() => {
                setShowCursor(false);

                // Start fade out after cursor disappears
                const fadeTimer = setTimeout(() => {
                    setFadeOut(true);

                    // Call onComplete after fade out animation
                    const completeTimer = setTimeout(() => {
                        onComplete();
                    }, 500); // Wait for fade out to complete

                    return () => clearTimeout(completeTimer);
                }, 800);

                return () => clearTimeout(fadeTimer);
            }, 500);

            return () => clearTimeout(cursorTimer);
        }
    }, [currentIndex, fullText, onComplete]);

    return (
        <div
            className={`splash-screen fixed inset-0 z-[9999] bg-background flex items-center justify-center ${fadeOut ? 'splash-fade-out' : ''
                }`}
        >
            <div className="text-center splash-text">
                <h1
                    className="text-4xl md:text-6xl lg:text-7xl font-light text-dark mb-4"
                    style={{
                        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                    }}
                >
                    {text}
                    <span
                        className={`splash-cursor inline-block w-1 h-16 md:h-20 lg:h-24 bg-primary ml-2 ${showCursor ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                </h1>
                <div className="text-text-light text-sm md:text-base font-system-ui">
                    Find Your Balance
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
