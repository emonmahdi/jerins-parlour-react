import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom' 
import logo from '../../Assets/logo.png'
import * as FcIcons from 'react-icons/fc';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../shared/Loading';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";  

    let errorElement;
    if (error || gError) {
       errorElement =  <p className='text-red-500'>Error: {error.message}</p>
           
      }
    if(user || gUser){
        navigate(from, {replace: true});
        console.log(user);
    }
    if(loading || gLoading){
        return <Loading />
    }   


    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }


  return (
    <div> 
        <div className='text-center mt-14'>
           <Link to='/'>
                 <img src={logo} className='w-32 mx-auto' alt="" />
            </Link> 
        </div>
        <div className='w-1/3 mx-auto p-8 overflow-hidden mt-8'>
            <form onSubmit={handleSubmit}>
                <h3 className='text-center font-bold text-2xl mb-4'>Login With</h3>
                <div>
                     <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} className="w-full border-b-2 px-2 py-2 mb-4 outline-0" placeholder="Username or email" />
                </div>
                <div>
                  <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} className="w-full border-b-2 px-2 py-2 mb-4 outline-0" placeholder="Password" />
                 </div>
                
                 <div>
                    <input
                    type="submit"
                    className="btn btn-primary w-full my-4"
                    value="Login"
                    />
                </div>
                {errorElement}
            </form>
            <div>
            <div className="social-login">  
                    <button onClick={() => signInWithGoogle()} className="w-full flex items-center justify-center border border-slate-500 rounded-full p-2 my-2 hover:bg-primary hover:text-white"> 
                        <FcIcons.FcGoogle className="mr-2" />
                        Continue with Google
                    </button> 
                </div>
                <p className='text-center'>Don't have an account <Link to='/register' className='underline text-primary'>Create an account?</Link></p>
            </div>
        </div>
        
    </div>
  )
}

export default Login
