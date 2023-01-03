import React from "react";
import * as FaIcons from 'react-icons/fa';
import logo from '../Assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-primary text-white">
      <div>
        <p>
           <a href="#">
            <img src={logo} className='w-28' alt="" />
           </a>
          <br />
          Providing parlour beauty
        </p>
      </div>
      <div>
        <span className="footer-title">Company </span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Quick Links</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div className="w-3/4">
        <span className="footer-title">About Us</span>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus alias officia dolores!</p>
         <div className="flex gap-4 mt-4">
          <span className="text-2xl cursor-pointer"><FaIcons.FaFacebookSquare /></span>
          <span className="text-2xl cursor-pointer"><FaIcons.FaTwitter /></span>
          <span className="text-2xl cursor-pointer"><FaIcons.FaLinkedin /></span>
          <span className="text-2xl cursor-pointer"><FaIcons.FaYoutube /></span>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
