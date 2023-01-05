import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderNav from "../../shared/HeaderNav";
import * as FaIcons from 'react-icons/fa';
import * as FcIcons from 'react-icons/fc';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import Loading from "../../shared/Loading";

const Register = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    

    const [passError, setPassError] = useState('')

    let errorElement;
    if (error || gError || updateError) {
        return  errorElement =  <p className='text-red-500'>Error: {error.message}</p>
           
      }
    if(user || gUser){
        navigate('/'); 
    }
    if(loading || updating || gLoading){
        return <Loading />
    }
 
    let errorPass = <p className="text-red-500 font-bold">Password does not match</p>

    const handleSubmit = async(e) => {
      e.preventDefault();
      const name = `${fname} ${lname}`;
      const userAccount = {
        fname,
        lname,
        email,
        password,
        rePassword
      }
      if(password === rePassword){
        await createUserWithEmailAndPassword(email, password);
        
        await  updateProfile({displayName: name});
        console.log('update profile')
        
      }else{
        setPassError(errorPass);
      }
      console.log(userAccount);
    }



  return (
    <div>
      <HeaderNav />
      <div className="w-1/3 mx-auto border p-8 overflow-hidden">

      
      <form onSubmit={handleSubmit}>
        <h3 className="text-2xl font-bold mb-4">Create an account {user?.email}</h3>
        <div>
          <input type="text" name="fname" onChange={(e) => setFname(e.target.value)} className="w-full border-b-2 px-2 py-2 mb-4 outline-0" placeholder="First Name" />
        </div>
        <div>
          <input type="text" name="lname" onChange={(e) => setLname(e.target.value)} className="w-full border-b-2 px-2 py-2 mb-4 outline-0" placeholder="Last Name" />
        </div>
        <div>
          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} className="w-full border-b-2 px-2 py-2 mb-4 outline-0" placeholder="Username or email" />
        </div>
        <div>
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} className="w-full border-b-2 px-2 py-2 mb-4 outline-0" placeholder="Password" />
        </div>
        <div>
          <input type="password" name="repassword" onChange={(e) => setRePassword(e.target.value)} className="w-full border-b-2 px-2 py-2 mb-4 outline-0" placeholder="Confirm Password" />
        </div>
        {passError}
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
        <button  className="w-full flex items-center justify-center border border-slate-500 rounded-full p-2 my-2 hover:bg-primary hover:text-white"> 
            <FaIcons.FaFacebook className="mr-2 text-sky-600" />
             Continue with Facebook
        </button>
        <button onClick={() => signInWithGoogle()} className="w-full flex items-center justify-center border border-slate-500 rounded-full p-2 my-2 hover:bg-primary hover:text-white"> 
            <FcIcons.FcGoogle className="mr-2" />
            Continue with Google 
        </button> 
      </div>
      </div>
    </div>
  );
};

export default Register;
