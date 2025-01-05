import { Link } from "react-router-dom";

const Campaign = ({campaign}) => {
    // console.log(campaign);

    return (
        <div className="card bg-base-100 shadow-xl">
                        <figure>
                            <img src={campaign.image} alt={campaign.title} className="h-64 w-full object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{campaign.title}</h2>
                            <p>{campaign.description}</p>
                            <p className="text-base text-gray-500">Division: {campaign.division}</p>
                            <div className="card-actions justify-start mt-3">
                                <Link to={`/donation-campaigns/${campaign.id}`} className="btn btn-primary">
                                    Donate Now
                                </Link>
                            </div>
                        </div>
                    </div>
    );
};

export default Campaign;