"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faInstagram,
    faXTwitter,
    faYoutube,
    faPinterest,
    faTiktok
} from '@fortawesome/free-brands-svg-icons';

interface SocialMediaLink {
    name: string;
    icon: any;
    url: string;
    color: string;
}

interface SocialMediaLinksProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    showLabels?: boolean;
    iconClassName?: string;
    labelClassName?: string;
    orientation?: 'horizontal' | 'vertical';
}

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({
    size = 'md',
    className = '',
    showLabels = false,
    iconClassName = '',
    labelClassName = '',
    orientation = 'horizontal',
}) => {
    const socialLinks: SocialMediaLink[] = [
        {
            name: 'Facebook',
            icon: faFacebookF,
            url: 'https://facebook.com/theyogastudio',
            color: 'hover:bg-[#1877F2] hover:border-[#1877F2]',
        },
        {
            name: 'Instagram',
            icon: faInstagram,
            url: 'https://instagram.com/theyogastudio',
            color: 'hover:bg-[#E4405F] hover:border-[#E4405F]',
        },
        {
            name: 'Twitter',
            icon: faXTwitter,
            url: 'https://twitter.com/theyogastudio',
            color: 'hover:bg-[#1DA1F2] hover:border-[#1DA1F2]',
        },
        {
            name: 'YouTube',
            icon: faYoutube,
            url: 'https://youtube.com/theyogastudio',
            color: 'hover:bg-[#FF0000] hover:border-[#FF0000]',
        },
        {
            name: 'Pinterest',
            icon: faPinterest,
            url: 'https://pinterest.com/theyogastudio',
            color: 'hover:bg-[#E60023] hover:border-[#E60023]',
        },
        {
            name: 'TikTok',
            icon: faTiktok,
            url: 'https://tiktok.com/@theyogastudio',
            color: 'hover:bg-[#000000] hover:border-[#000000]',
        },
    ];

    // Size classes
    const sizeClasses = {
        sm: 'w-8 h-8 text-xs',
        md: 'w-10 h-10 text-sm',
        lg: 'w-12 h-12 text-base',
    };

    return (
        <div className={`flex ${orientation === 'vertical' ? 'flex-col space-y-3' : 'flex-row space-x-3'} ${className}`}>
            {socialLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${link.name} page`}
                    className={`${sizeClasses[size]} border border-primary/30 rounded-full flex items-center justify-center text-primary hover:text-white transition-all duration-300 ${link.color} ${iconClassName}`}
                >
                    <FontAwesomeIcon icon={link.icon} />
                    {showLabels && (
                        <span className={`ml-2 ${labelClassName}`}>{link.name}</span>
                    )}
                </a>
            ))}
        </div>
    );
};

export default SocialMediaLinks;
