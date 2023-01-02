import React from 'react'
import heroImg from "../../Assets/Image/about.png";


const About = () => {
  return (
    <div className="lg:px-16 mx-auto  bg-red-50">
    <div className="hero min-h-screen">
      <div className="hero-content grid lg:grid-cols-2 gap-4 ">
        <div className="text-end"> 
          <img src={heroImg} className="max-w-lg  rounded-lg shadow-2xl mx-auto" />
        </div> 
        <div>
          <h1 className="text-3xl font-bold">Let us handle your <br /> screen <span className='text-primary'>Professionally</span></h1>
          <p className="py-6">
          With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.
          </p> 
          <div className='flex mt-2'>
            <div className='p-4'>
                <h2 className='text-4xl font-extrabold text-primary'>500+</h2>
                <p className='text-xl mt-4 text-gray-800'>Happy Customer</p>
            </div>
            <div className='p-4'>
                <h2 className='text-4xl font-extrabold text-primary'>16+</h2>
                <p className='text-xl mt-4 text-gray-800'>Total Services</p>
            </div> 
          </div>
        </div> 
      </div>
      
    </div>
    
  </div>
  )
}

export default About
