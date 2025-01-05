import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const { userLogin, setUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const password = form.password.value;

        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                form.reset();
                toast.success("Login Successful");
                navigate(location?.state?.from || "/");
            })
            .catch(() => {
                toast.error("Your email or password is not correct");
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shadow-2xl p-10">
                <h2 className="text-3xl font-bold text-center">Login Your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    {/* Email Input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="input input-bordered"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="btn btn-xs absolute right-2 top-12"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        <label className="label">
                            {/* Forgot Password Link */}
                            <Link
                                to="/forgot-password"
                                state={{ email }}
                                className="label-text-alt link link-hover"
                            >
                                Forgot password?
                            </Link>
                        </label>
                    </div>

                    {/* Login Button */}
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </div>
                </form>

                {/* Register and Google Sign-In */}
                <p className="text-center font-semibold mt-4">
                    Don't Have An Account?{" "}
                    <span className="text-blue-600">
                        <Link to="/register">Register</Link>
                    </span>
                </p>
                <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-ghost text-base flex items-center justify-center gap-2 mt-4"
                >
                    <FcGoogle />
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
