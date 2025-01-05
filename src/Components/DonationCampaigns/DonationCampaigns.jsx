import React, { useEffect, useState } from "react";
import Campaign from "../Campaign/Campaign";

const DonationCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]); // State to store fetched data
    const [loading, setLoading] = useState(true);  // Loading state
    const [error, setError] = useState(null);      // Error state

    useEffect(() => {
        // Fetch data from the public folder
        fetch("/campaignsInfo.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch campaigns data");
                }
                return response.json();
            })
            .then((data) => {
                setCampaigns(data); // Update state with fetched data
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="text-center text-lg font-semibold">Loading campaigns...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    return (
        <div className="container w-11/12 mx-auto py-10">
            <h2 className="text-3xl font-bold text-center mb-8">Donation Campaigns</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {campaigns.map((campaign) => (
                    <Campaign key={campaign.id} campaign={campaign}></Campaign>
                ))}
            </div>
        </div>
    );
};

export default DonationCampaigns;
