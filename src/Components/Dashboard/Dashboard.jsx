import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">Welcome, {user?.displayName || "User"}!</h1>
            <div className="card bg-base-200 shadow-xl w-96 py-10 mt-5">
                <img
                    src={user?.photoURL || "https://via.placeholder.com/150"}
                    alt="Profile"
                    className="w-32 h-32 rounded-full mx-auto"
                />
                <div className="mt-4 text-center text-xl">
                    <p><strong>{user?.displayName || "Not provided"}</strong></p>
                    <p className="text-lg">{user?.email}</p>
                </div>
                <div className="mt-5 text-center">
                    <Link to="/update-profile">
                        <button className="btn btn-primary">Update Profile</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
