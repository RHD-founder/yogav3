"use client";
import { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";

interface SplashScreenWrapperProps {
    children: React.ReactNode;
}

const SplashScreenWrapper = ({ children }: SplashScreenWrapperProps) => {
    const [showSplash, setShowSplash] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate initial loading
        const loadingTimer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(loadingTimer);
    }, []);

    const handleSplashComplete = () => {
        setShowSplash(false);
    };

    // Show splash screen only after initial loading and if not completed
    if (isLoading || showSplash) {
        return <SplashScreen onComplete={handleSplashComplete} />;
    }

    return <>{children}</>;
};

export default SplashScreenWrapper;
