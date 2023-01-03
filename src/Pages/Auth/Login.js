import React from 'react'
import { Link } from 'react-router-dom' 
import logo from '../../Assets/logo.png'
import * as FcIcons from 'react-icons/fc';

const Login = () => {
  return (
    <div> 
        <div className='text-center mt-14'>
           <Link to='/'>
                 <img src={logo} className='w-32 mx-auto' alt="" />
            </Link> 
        </div>
        <div className='w-1/3 mx-auto p-8 overflow-hidden mt-8'>
            <form>
                <h3 className='text-center font-bold text-2xl mb-4'>Login With</h3>
                <div className="social-login"> 
                    <button className="w-full flex items-center justify-center border border-slate-500 rounded-full p-2 my-2 hover:bg-primary hover:text-white"> 
                        <FcIcons.FcGoogle className="mr-2" />
                        Continue with Google
                    </button> 
                </div>
                <p className='text-center'>Don't have an account <Link to='/register' className='underline text-primary'>Create an account?</Link></p>
            </form>
        </div>
        
    </div>
  )
}

export default Login
