"use client";

import React from "react";
import Image from "next/image";
import {
    FaEye,
    FaBullseye,
    FaLeaf,
    FaGlobe,
    FaHandshake,
    FaShieldAlt,
} from "react-icons/fa";

export const MissionVision = () => {
    // Cards data
    const vision = {
        icon: <FaEye className="text-green-700 mr-2" size={28} />,
        title: "Vision",
        text: "“To make Nepal’s organic treasures a global standard for healthy and sustainable living.”",
    };

    const mission = {
        icon: <FaBullseye className="text-green-700 mr-2" size={28} />,
        title: "Mission",
        text: "We work directly with local farmers to ensure pure, ethical, and sustainable organic products reach customers worldwide.”",
    };

    const values = [
        { icon: <FaLeaf className="text-green-500 mr-2" />, text: "Sustainability" },
        { icon: <FaGlobe className="text-blue-500 mr-2" />, text: "Global Reach" },
        { icon: <FaHandshake className="text-yellow-500 mr-2" />, text: "Fair Trade" },
        { icon: <FaShieldAlt className="text-blue-400 mr-2" />, text: "Purity & Trust" },
    ];

    return (
        <div className="w-full bg-gray-200 py-8 px-2">
            <div className="flex flex-col md:flex-row gap-0 justify-center items-stretch max-w-6xl mx-auto relative">
                <div className="flex-1 bg-white shadow rounded-lg p-6 text-left min-w-[260px]">
                    <div className="flex items-center mb-2">
                        {vision.icon}
                        <span className="text-green-800 text-2xl font-bold">{vision.title}</span>
                    </div>
                    <p className="text-gray-700 text-md font-semibold">{vision.text}</p>
                </div>

                <div className="hidden md:flex items-center justify-center">
                    <Image
                        src="/assets/about/row.png"
                        alt="Arrow"
                        width={60}
                        height={40}
                        className="object-contain"
                    />
                </div>

                {/* Mission Card */}
                <div className="flex-1 bg-white shadow rounded-lg p-6 text-left min-w-[260px]">
                    <div className="flex items-center mb-2">
                        {mission.icon}
                        <span className="text-green-800 text-2xl font-bold">{mission.title}</span>
                    </div>
                    <p className="text-gray-700 text-md font-semibold">{mission.text}</p>
                </div>

                <div className="hidden md:flex items-center justify-center">
                    <Image
                        src="/assets/about/row.png"
                        alt="Arrow"
                        width={60}
                        height={40}
                        className="object-contain"
                    />
                </div>

                <div className="flex-1 bg-white shadow rounded-lg p-6 text-left min-w-[325px] w-full">
                    <div className="flex items-center mb-4">
                        <FaLeaf className="text-green-700 mr-2" size={28} />
                        <span className="text-green-800 text-2xl font-bold">Values</span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                        {values.map((val, idx) => (
                            <li
                                key={idx}
                                className="flex items-center gap-1 font-bold text-lg whitespace-nowrap"
                            >
                                <span className="flex items-center">{val.icon}</span>
                                <span className="text-gray-800 text-md">{val.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};