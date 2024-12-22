import React, { useContext } from 'react';
import register from '../../assets/auth/register.avif'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
const SignUp = () => {
  const {signUpForm} = useContext(AuthContext)
  const navigate = useNavigate();
    const handleSignUpForm = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const formData = {name, photo, email, password}
        console.log(formData)
        signUpForm(email, password)
        .then(result =>{
          console.log(result.user)
          navigate('/')
          const data = {
            displayName:name,
            photoURL:photo
          }
          updateProfile(auth.currentUser, data)
        })
        .catch(err=>{
          console.log('hello--', err)
        })
    }
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img className="" src={register} alt="" />
          </div>
          <div className="card w-full max-w-lg border p-4">
            <h3 className="text-3xl font-bold ml-10">SignUp Here</h3>
            <form onSubmit={handleSignUpForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input type="text" name='name' placeholder="Enter your Full Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input type="text" name='photo' placeholder="PhotoURL" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-info">SignUp</button>
              </div>
              <p className="text-gray-500">Already have an account | <Link to={'/login'}className='underline'>LogIn</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;