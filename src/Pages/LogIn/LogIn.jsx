import React, { useContext, useState } from "react";
import login from "../../assets/auth/login.avif";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const LogIn = () => {
  const { logInForm, loginWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogInForm = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logInForm(email, password)
      .then((result) => {
        toast.success("login successful");
        navigate(location.state ? location.state : '/');
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img src={login} alt="Login Illustration" />
        </div>
        <div className="card w-full max-w-lg border p-4">
          <h3 className="text-3xl font-bold ml-10">Welcome back</h3>
          <form onSubmit={handleLogInForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <p className="text-red-600">{error}</p>
            <div className="form-control mt-6">
              <button className="btn btn-accent">Login</button>
            </div>
            <p className="text-gray-500">
              New to here |{" "}
              <Link to="/signup" className="underline">
                SignUp
              </Link>
            </p>
            <div className="divider mt-2">or continue with</div>
          </form>
          <button
            onClick={handleGoogle}
            className="flex justify-center items-center gap-2 -mt-4 btn btn-outline btn-accent w-10/12 mx-auto"
          >
            <FaGoogle /> LogIn with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
