import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faYoga, faHeartPulse, faDumbbell, faMeditation, faPersonWalking,
    faCircleCheck, faStar, faCalendarDays
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook, faInstagram, faTwitter, faYoutube, faPinterest, faTiktok
} from '@fortawesome/free-brands-svg-icons';

const IconExamples = () => {
    return (
        <div className="p-8 bg-background">
            <h2 className="text-2xl font-serif mb-6">Font Awesome Icon Examples</h2>

            <div className="mb-8">
                <h3 className="text-xl mb-4 font-medium">Solid Icons</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                        <FontAwesomeIcon icon={faYoga} className="text-primary text-3xl mb-2" />
                        <span className="text-sm text-text-light">faYoga</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                        <FontAwesomeIcon icon={faHeartPulse} className="text-primary text-3xl mb-2" />
                        <span className="text-sm text-text-light">faHeartPulse</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                        <FontAwesomeIcon icon={faDumbbell} className="text-primary text-3xl mb-2" />
                        <span className="text-sm text-text-light">faDumbbell</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                        <FontAwesomeIcon icon={faMeditation} className="text-primary text-3xl mb-2" />
                        <span className="text-sm text-text-light">faMeditation</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                        <FontAwesomeIcon icon={faPersonWalking} className="text-primary text-3xl mb-2" />
                        <span className="text-sm text-text-light">faPersonWalking</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-primary text-3xl mb-2" />
                        <span className="text-sm text-text-light">faCircleCheck</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                        <FontAwesomeIcon icon={faStar} className="text-primary text-3xl mb-2" />
                        <span className="text-sm text-text-light">faStar</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                        <FontAwesomeIcon icon={faCalendarDays} className="text-primary text-3xl mb-2" />
                        <span className="text-sm text-text-light">faCalendarDays</span>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-xl mb-4 font-medium">Brand Icons</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                        <FontAwesomeIcon icon={faFacebook} className="text-[#1877F2] text-3xl mb-2" />
                        <span className="text-sm text-text-light">faFacebook</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                        <FontAwesomeIcon icon={faInstagram} className="text-[#E4405F] text-3xl mb-2" />
                        <span className="text-sm text-text-light">faInstagram</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                        <FontAwesomeIcon icon={faTwitter} className="text-[#1DA1F2] text-3xl mb-2" />
                        <span className="text-sm text-text-light">faTwitter</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                        <FontAwesomeIcon icon={faYoutube} className="text-[#FF0000] text-3xl mb-2" />
                        <span className="text-sm text-text-light">faYoutube</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                        <FontAwesomeIcon icon={faPinterest} className="text-[#E60023] text-3xl mb-2" />
                        <span className="text-sm text-text-light">faPinterest</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                        <FontAwesomeIcon icon={faTiktok} className="text-black text-3xl mb-2" />
                        <span className="text-sm text-text-light">faTiktok</span>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-xl mb-4 font-medium">Icon Sizes & Styles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                        <FontAwesomeIcon icon={faYoga} className="text-primary text-4xl mb-2" />
                        <span className="text-sm text-text-light">Size: 4xl</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                        <FontAwesomeIcon icon={faYoga} className="text-primary text-2xl mb-2" spin />
                        <span className="text-sm text-text-light">Spinning</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                        <FontAwesomeIcon icon={faYoga} className="text-primary text-2xl mb-2" pulse />
                        <span className="text-sm text-text-light">Pulse</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IconExamples;
