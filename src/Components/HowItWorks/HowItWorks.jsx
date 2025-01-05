import React from 'react';

const HowItWorks = () => {
    return (
        <div className="how-it-works py-10 bg-gray-100 rounded-2xl">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl font-bold mb-6">How It Works</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 px-4">
                    Follow these simple steps to contribute to our mission of spreading warmth during winter.
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center pb-4">
                    {/* Step 1: Donate */}
                    <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
                        <h3 className="text-xl font-bold mb-3">1. Donation</h3>
                        <p className="text-gray-600">
                            Select the items you'd like to donate, such as warm clothes, blankets, or other essentials. Monetary donations are also accepted.
                        </p>
                    </div>

                    {/* Step 2: Collection Points */}
                    <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
                        <h3 className="text-xl font-bold mb-3">2. Collection Points</h3>
                        <p className="text-gray-600">
                            Visit one of our designated collection points located in major cities, including Dhaka, Chittagong, Sylhet, and Khulna.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="container mx-auto text-center">
                        <h2 className="text-xl font-bold mb-6">3. Supported Divisions</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                            Your donations reach people in need across these divisions in Bangladesh, ensuring warmth and comfort for all.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
                            {[
                                { name: "Dhaka Division", icon: "🌆" },
                                { name: "Chattogram Division", icon: "🏖️" },
                                { name: "Khulna Division", icon: "🏞️" },
                                { name: "Rajshahi Division", icon: "🍇" },
                                { name: "Barishal Division", icon: "🌊" },
                                { name: "Sylhet Division", icon: "🌿" },
                                { name: "Rangpur Division", icon: "🍂" },
                                { name: "Mymensingh Division", icon: "🏡" },
                            ].map((division, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center"
                                >
                                    <div className="text-5xl mb-4">{division.icon}</div>
                                    <h3 className="text-xl font-semibold">{division.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;