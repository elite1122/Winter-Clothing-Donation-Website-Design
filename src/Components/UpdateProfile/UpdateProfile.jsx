import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

const UpdateProfile = () => {
    const { updateUserProfile, setRefetch } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !photoURL) {
            toast.error("Both fields are required!");
            return;
        }
        updateUserProfile({ displayName: name, photoURL })
            .then(() => {
                setRefetch(Date.now()); // Trigger re-fetch to update user info
                toast.success("Profile updated successfully!");
                navigate("/dashboard");
            })
            .catch((error) => {
                toast.error("Failed to update profile: " + error.message);
            });
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-200 shadow-xl py-10 px-5 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center">Update Profile</h2>
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your photo URL"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update Information</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
