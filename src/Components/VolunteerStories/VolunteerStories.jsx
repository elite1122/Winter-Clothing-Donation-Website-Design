
const VolunteerStories = () => {
    return (
        <div className="volunteer-stories bg-gray-100 py-10 rounded-2xl">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Volunteer Stories</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
                    Hear from our amazing volunteers who are making an impact every day.
                </p>
                <div className="flex justify-center gap-6 flex-wrap">
                    <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
                        <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Rasheduzzaman Elite"
                                    src="https://i.ibb.co/zmGN20L/1652934627991.jpg"
                                />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mt-4 mb-2">Rasheduzzaman Elite</h3>
                        <p>“Helping others has been the most rewarding experience of my life.”</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
                        <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Zion Mezba"
                                    src="https://i.ibb.co/MsfvTPt/65642391.jpg"
                                />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mt-4 mb-2">Zion Mezba</h3>
                        <p>“It's incredible to see how a small act of kindness can change a life.”</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerStories;
