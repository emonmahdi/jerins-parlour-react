import React from "react";
import { Link } from "react-router-dom";
import HeaderNav from "../../shared/HeaderNav";
import * as FaIcons from 'react-icons/fa';
import * as FcIcons from 'react-icons/fc';

const Register = () => {
  return (
    <div>
      <HeaderNav />
      <div className="w-1/3 mx-auto border p-8 overflow-hidden">

      
      <form>
        <h3 className="text-2xl font-bold mb-4">Create an account</h3>
        <div>
          <input type="text" name="fname" className="w-full border-b-2 px-2 py-2 mb-4 outline-0" placeholder="First Name" />
        </div>
        <div>
          <input type="text" className="w-full border-b-2 px-2 py-2 mb-4 outline-0" placeholder="Last Name" />
        </div>
        <div>
          <input type="email" className="w-full border-b-2 px-2 py-2 mb-4 outline-0" placeholder="Username or email" />
        </div>
        <div>
          <input type="password" className="w-full border-b-2 px-2 py-2 mb-4 outline-0" placeholder="Password" />
        </div>
        <div>
          <input type="password" className="w-full border-b-2 px-2 py-2 mb-4 outline-0" placeholder="Confirm Password" />
        </div>
        <div>
          <input
            type="submit"
            className="btn btn-primary w-full my-4"
            value="Create an Account"
          />
        </div>
        <div className="text-center">
          <p>
            Already have an account <Link to="/login" className="text-primary underline">Login</Link>{" "}
          </p>
        </div>
      </form>
      <div className="social-login">
        <button className="w-full flex items-center justify-center border border-slate-500 rounded-full p-2 my-2 hover:bg-primary hover:text-white"> 
            <FaIcons.FaFacebook className="mr-2 text-sky-600" />
             Continue with Google
        </button>
        <button className="w-full flex items-center justify-center border border-slate-500 rounded-full p-2 my-2 hover:bg-primary hover:text-white"> 
            <FcIcons.FcGoogle className="mr-2" />
            Continue with Facebook
        </button> 
      </div>
      </div>
    </div>
  );
};

export default Register;
