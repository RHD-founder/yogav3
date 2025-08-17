"use client";

import React, { useEffect, useRef, useState } from 'react';

type AnimationType = 'fade-in' | 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'zoom-in' | 'bounce';

interface AnimatedElementProps {
    children: React.ReactNode;
    type?: AnimationType;
    delay?: number; // in milliseconds
    duration?: number; // in milliseconds
    className?: string;
    threshold?: number; // value between 0 and 1, default 0.1
    once?: boolean; // animate only once or every time element comes into view
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
    children,
    type = 'fade-in',
    delay = 0,
    duration = 500,
    className = '',
    threshold = 0.1,
    once = true,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) {
                        observer.unobserve(entry.target);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [once, threshold]);

    // Define animation classes with Tailwind's transition classes
    const animationClasses = {
        'fade-in': 'opacity-0 transition-opacity ease-in-out',
        'slide-up': 'opacity-0 translate-y-8 transition-all ease-out',
        'slide-in-left': 'opacity-0 -translate-x-8 transition-all ease-out',
        'slide-in-right': 'opacity-0 translate-x-8 transition-all ease-out',
        'zoom-in': 'opacity-0 scale-95 transition-all ease-out',
        'bounce': 'opacity-0 transition-all ease-out'
    };

    // Define animation styles when visible
    const visibleStyles = {
        'fade-in': 'opacity-100',
        'slide-up': 'opacity-100 translate-y-0',
        'slide-in-left': 'opacity-100 translate-x-0',
        'slide-in-right': 'opacity-100 translate-x-0',
        'zoom-in': 'opacity-100 scale-100',
        'bounce': 'opacity-100 animate-bounce'
    };

    // Create dynamic classes for duration and delay
    const durationClass = `duration-${duration}`;
    const delayClass = delay > 0 ? `delay-${delay}` : '';

    return (
        <div
            ref={elementRef}
            className={`${animationClasses[type]} ${isVisible ? visibleStyles[type] : ''} ${className} ${durationClass} ${delayClass}`}
        >
            {children}
        </div>
    );
};

export default AnimatedElement;
