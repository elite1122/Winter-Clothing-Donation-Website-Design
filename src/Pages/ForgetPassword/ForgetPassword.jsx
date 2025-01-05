import { useLocation, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { getAuth } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { useState } from "react";

const auth = getAuth(app);

const ForgetPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState(location.state?.email || "");

    const handleResetPassword = (e) => {
        e.preventDefault();
        if (!email) {
            toast.error("Please provide a valid email");
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Password reset email sent!");
                navigate("/login");
            })
            .catch((error) => toast.error(error.message));
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shadow-2xl p-10">
                <h2 className="text-3xl font-bold text-center">Reset Your Password</h2>
                <form onSubmit={handleResetPassword} className="card-body">
                    <div className="form-control">
                        <label className="label">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Reset Password</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;
