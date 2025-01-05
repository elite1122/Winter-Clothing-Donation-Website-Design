import { Link } from "react-router-dom";

const HowToHelp = () => {
    return (
        <div className="bg-gray-50 py-10 min-h-screen flex items-center">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">How to Help</h1>
                <p className="text-lg text-center text-gray-600 mb-8">
                    Your small act of kindness can bring warmth to someone in need this winter. Here are ways you can help:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Donate Items */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <div className="text-4xl text-blue-500 mb-4">
                            <i className="fas fa-box"></i>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Donate Warm Clothing</h2>
                        <p className="text-gray-600">
                            Share your unused warm clothes like jackets, sweaters, or blankets to make someone’s winter warmer.
                        </p>
                    </div>

                    {/* Volunteer */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <div className="text-4xl text-green-500 mb-4">
                            <i className="fas fa-hands-helping"></i>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Volunteer</h2>
                        <p className="text-gray-600">
                            Join as a volunteer to help us collect, sort, and distribute donations in your local area.
                        </p>
                    </div>

                    {/* Spread the Word */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <div className="text-4xl text-red-500 mb-4">
                            <i className="fas fa-share-alt"></i>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Spread the Word</h2>
                        <p className="text-gray-600">
                            Use your voice to raise awareness and encourage others to join this noble cause.
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-10 text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                        Ready to make a difference?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Get started today by donating, volunteering, or sharing our mission. Every action counts!
                    </p>
                    <Link to={`/donation-campaigns`} className="btn btn-primary">
                        Get Involved
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HowToHelp;
