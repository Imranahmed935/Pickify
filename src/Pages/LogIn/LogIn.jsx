import React from "react";
import login from '../../assets/login.avif'
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <img className="" src={login} alt="" />
    </div>
    <div className="card w-full max-w-lg border p-4">
    <h3 className="text-3xl font-bold ml-10">Welcome back</h3>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-accent">Login</button>
        </div>
         <p className="text-gray-500">New to here | <Link to={'/signup'}>SignUp</Link></p>
        <div className="divider mt-2">or continue with</div>
      </form>
      <button className="flex justify-center items-center gap-2 -mt-4 btn btn-outline btn-accent w-10/12 mx-auto"><FaGoogle /> LogIn with Google</button>
    </div>
  </div>
</div>
  );
};

export default LogIn;
