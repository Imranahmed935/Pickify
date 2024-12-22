import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const {user, logOutBtn} = useContext(AuthContext)
  const links = (
    <>
      <li>
        <Link to={'/'}>home</Link>
      </li>
      <li>
        <Link to={'/addQueries'}>Add Queries</Link>
      </li>
      <li>
        <Link to={'/queries'}>Queries</Link>
      </li>
      <li>
        <Link to={'/myQueries'}>My Queries</Link>
      </li>
    </>
  );

  const handleSignOut = ()=>{
    logOutBtn()
    .then(()=>{
      console.log('signout success')
    })
    .catch(err=>{
      console.log('opssss', err)
    })
  }
  return (
    <div className="navbar lg:w-9/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={'/'} className="text-2xl text-[#728181] font-bold">Pickify</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {links}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user? <>
          <Link to={'/login'} className="btn btn-outline btn-accent rounded-none" onClick={handleSignOut}>LogOut</Link>
          </>
          :
          <>
            <Link to={'/login'} className="btn btn-outline btn-accent rounded-none">LogIn</Link>
          </>
        }
      </div>
    </div>
  );
};

export default Navbar;
