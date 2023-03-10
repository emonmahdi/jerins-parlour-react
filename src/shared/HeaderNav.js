import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

import logoImg from '../Assets/logo.png'
import auth from "../firebase.init";

const HeaderNav = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const handleSignOut = () => {
    signOut();
  }

  return (
    <div className="navbar container mx-auto">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ml-auto"
          >
            <li>
              <Link to='/'>Home</Link> 
            </li>
            <li>
              <a>Our Portfolio</a>
            </li>
            <li>
              <a>Our Team</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>  
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
           <Link to='/'>
              <img className="w-32" src={logoImg} alt="jerins perlour" />
            </Link> 
        </a>
      </div>
      <div className="navbar-center ">
       
      </div>
      <div className="navbar-end">
      <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <li>
            <Link to='/'>Home</Link> 
          </li> 
          <li>
            <a>Our Portfolio</a>
          </li>
          <li>
            <a>Our Team</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
        
        {
          user ? 
          ( <>
            
          <button onClick={handleSignOut} className="btn btn-md bg-primary text-accent border-0 px-10">Log Out</button>
          {/* <span>{user?.displayName}</span> */}
          </>
          ) :
          <Link to='/register'>
            <a className="btn bg-primary text-accent border-0 px-10">Login</a>
          </Link> 
        } 
      </div>
    </div>
  );
};

export default HeaderNav;
