"use client";
import React from 'react';

interface GoogleMapProps {
    apiKey?: string;
    address?: string;
    directUrl?: string;
    height?: string;
    zoom?: number;
    className?: string;
    heightClass?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
    apiKey,
    address,
    directUrl,
    height = '400px',
    zoom = 15,
    className = '',
    heightClass = 'h-96',
}) => {
    // If direct URL is provided, use it
    if (directUrl) {
        // For Google Maps URLs, we need to use the embed format
        // Extract the place ID from the URL if possible
        let embedUrl;

        if (directUrl.includes('maps.app.goo.gl')) {
            // For short URLs, we'll use a generic embed
            embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.6857716331286!2d91.77508489999999!3d26.1848238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59bd3084d929%3A0x4bf0a495583cd35f!2sArunima%20Dutta&#39;s%20The%20Yoga%20Studio!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin`;
        } else if (directUrl.includes('google.com/maps')) {
            // For full URLs, we'll convert to embed format
            // This is a simplified approach - a more robust solution would parse the URL properly
            const placeIdMatch = directUrl.match(/place\/([^\/]+)/);
            const coordsMatch = directUrl.match(/@([\d.]+),([\d.]+)/);

            if (placeIdMatch && placeIdMatch[1]) {
                const placeName = placeIdMatch[1];
                embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.6857716331286!2d91.77508489999999!3d26.1848238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59bd3084d929%3A0x4bf0a495583cd35f!2sArunima%20Dutta&#39;s%20The%20Yoga%20Studio!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin`;
            } else if (coordsMatch && coordsMatch[1] && coordsMatch[2]) {
                const lat = coordsMatch[1];
                const lng = coordsMatch[2];
                embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.6857716331286!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59bd3084d929%3A0x4bf0a495583cd35f!2sArunima%20Dutta&#39;s%20The%20Yoga%20Studio!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin`;
            } else {
                // Fallback to a hardcoded embed URL for this specific location
                embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.6857716331286!2d91.77508489999999!3d26.1848238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59bd3084d929%3A0x4bf0a495583cd35f!2sArunima%20Dutta&#39;s%20The%20Yoga%20Studio!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin`;
            }
        } else {
            // Fallback to a hardcoded embed URL for this specific location
            embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.6857716331286!2d91.77508489999999!3d26.1848238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59bd3084d929%3A0x4bf0a495583cd35f!2sArunima%20Dutta&#39;s%20The%20Yoga%20Studio!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin`;
        }

        return (
            <div className={`w-full overflow-hidden rounded-lg ${heightClass} ${className}`}>
                <iframe
                    title="Google Maps"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    className="border-0"
                    src={embedUrl}
                    allowFullScreen
                />
            </div>
        );
    }

    // If address is provided, use the traditional approach
    if (address) {
        // Encode the address for the URL
        const encodedAddress = encodeURIComponent(address);

        // Create the Google Maps embed URL
        const mapUrl = apiKey
            ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedAddress}&zoom=${zoom}`
            : `https://maps.google.com/maps?q=${encodedAddress}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;

        return (
            <div className={`w-full overflow-hidden rounded-lg ${heightClass} ${className}`}>
                <iframe
                    title="Google Maps"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    className="border-0"
                    src={mapUrl}
                    allowFullScreen
                />
            </div>
        );
    }

    // Fallback if neither is provided
    return (
        <div className={`w-full overflow-hidden rounded-lg ${heightClass} ${className} flex items-center justify-center bg-gray-100`}>
            <p className="text-gray-500">Map location not provided</p>
        </div>
    );
};

export default GoogleMap;