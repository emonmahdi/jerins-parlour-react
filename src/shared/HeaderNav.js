import React from "react";

import logoImg from '../Assets/logo.png'

const HeaderNav = () => {
  return (
    <div class="navbar container mx-auto">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ml-auto"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabindex="0">
              <a class="justify-between">
                Parent
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul class="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">
            <img className="w-32" src={logoImg} alt="jerins perlour" />
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
       
      </div>
      <div class="navbar-end">
      <ul class="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
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
        <a class="btn bg-primary text-accent border-0 px-10">Login</a>
      </div>
    </div>
  );
};

export default HeaderNav;
