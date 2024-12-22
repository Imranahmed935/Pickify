import React from 'react';
import register from '../../assets/auth/register.avif'
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
const SignUp = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img className="" src={register} alt="" />
          </div>
          <div className="card w-full max-w-lg border p-4">
            <h3 className="text-3xl font-bold ml-10">SignUp Here</h3>
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
                <button className="btn btn-info">SignUp</button>
              </div>
              <p className="text-gray-500">Already have an account | <Link to={'/login'}className='underline'>LogIn</Link></p>
              <div className="divider mt-2">or continue with</div>
            </form>
            <button className="flex justify-center items-center gap-2 -mt-4 btn btn-outline btn-info w-10/12 mx-auto"><FaGoogle /> LogIn with Google</button>
          </div>
        </div>
      </div>
    );
};

export default SignUp;