import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = () => {
    const campaign = useLoaderData(); // Get the campaign data loaded by the loader
    const [form, setForm] = useState({
        quantity: "",
        itemType: "",
        pickupLocation: "",
        notes: "",
    });

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Thank you! We will reach your destination soon.");
        setForm({
            quantity: "",
            itemType: "",
            pickupLocation: "",
            notes: "",
        });
    };

    if (!campaign) {
        return <p className="text-center text-lg font-semibold">Campaign not found!</p>;
    }

    return (
        <div className="container mx-auto py-10">
            <h2 className="text-3xl font-bold text-center mb-6">{campaign.title}</h2>
            <div className="card bg-base-100 shadow-xl mx-auto w-full md:w-3/4 lg:w-1/2">
                <figure>
                    <img src={campaign.image} alt={campaign.title} className="w-full object-cover" />
                </figure>
                <div className="card-body">
                    <p className="text-gray-700">{campaign.description}</p>
                    <p className="text-base text-gray-500">Division: {campaign.division}</p>
                    <p className="text-base text-gray-500">
                        Status:{" "}
                        <span
                            className={`font-semibold ${campaign.status === "Ongoing"
                                ? "text-green-500"
                                : campaign.status === "Completed"
                                    ? "text-red-500"
                                    : campaign.status === "Upcoming"
                                        ? "text-blue-500"
                                        : "text-gray-500"
                                }`}
                        >
                            {campaign.status}
                        </span>
                    </p>

                    <p className="text-base text-gray-500 mb-3">Contact: {campaign.contactInfo}</p>
                    <Link to="/donation-campaigns"
                        className="btn btn-primary"
                    >Back
                    </Link>
                </div>
            </div>

            {/* Donation Form */}
            <div className="mt-10">
                <h3 className="text-2xl font-bold text-center mb-4">Donation Form</h3>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 shadow-md rounded-md mx-auto w-full md:w-3/4 lg:w-1/2"
                >
                    <div className="mb-4">
                        <label htmlFor="quantity" className="block text-gray-700 font-medium">
                            Quantity of Items
                        </label>
                        <input
                            type="number"
                            name="quantity"
                            id="quantity"
                            value={form.quantity}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            placeholder="Enter quantity (e.g., 2 jackets, 3 blankets)"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="itemType" className="block text-gray-700 font-medium">
                            Item Type
                        </label>
                        <input
                            type="text"
                            name="itemType"
                            id="itemType"
                            value={form.itemType}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            placeholder="Enter item type (e.g., blanket, jacket, sweater)"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="pickupLocation" className="block text-gray-700 font-medium">
                            Pickup Location
                        </label>
                        <input
                            type="text"
                            name="pickupLocation"
                            id="pickupLocation"
                            value={form.pickupLocation}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            placeholder="e.g. House 12, Road 5, Dhanmondi, Dhaka"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="notes" className="block text-gray-700 font-medium">
                            Additional Notes (Optional)
                        </label>
                        <textarea
                            name="notes"
                            id="notes"
                            value={form.notes}
                            onChange={handleChange}
                            className="textarea textarea-bordered w-full"
                            placeholder="Enter any additional notes (optional)"
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-full">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Details;
