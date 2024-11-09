// src/components/Header.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assests/menu-icon.png";
import profileIcon from "../assests/profile-icon.png"; // Import profile icon

export default function Header() {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <header className="container mx-auto shadow-md md:shadow-none flex justify-between px-5 py-3 border-b md:block md:text-center md:border-0 md:mt-5">
        <Link to="/">
          <h1 title="Logo" className="font-mont font-bold text-xl md:text-2xl lg:text-4xl">
            <span className="inline-block font-opensans text-xs -rotate-90 pl-1 md:text-xl md:pl-3">
              The
            </span>
            Share & Inspire
          </h1>
        </Link>
        <img
          title="Menu"
          onClick={toggleClass}
          className="cursor-pointer md:hidden"
          src={menu}
          alt="menu"
          width={"25px"}
        />
      </header>

      {isActive && (
        <nav className="container bg-white mx-auto md:mt-5 md:hidden">
          <ul className="text-center font-mont font-medium divide-y md:divide-y-0 md:border-b md:pb-2 md:text-lg md:flex md:justify-between">
            <li className="py-2">
              <Link to="/">Home</Link>
            </li>
            <li className="py-2">
              <Link to="/technology">Technology</Link>
            </li>
            <li className="py-2">
              <Link to="/beauty">Beauty</Link>
            </li>
            <li className="py-2">
              <Link to="/fitness">Fitness</Link>
            </li>
            <li className="py-2">
              <Link to="/food">Food</Link>
            </li>
            <li className="py-2 flex items-center">
              <Link to="/profile">Profile</Link>
              <img src={profileIcon} alt="Profile Icon" className="w-6 h-6 ml-2 rounded-full" />
            </li>
          </ul>
        </nav>
      )}

      <nav className="hidden md:block container mx-auto md:mt-5">
        <ul className="text-center font-mont font-medium divide-y md:divide-y-0 md:border-b md:pb-2 md:text-lg md:flex md:justify-around">
          <li className="py-2">
            <Link to="/">Home</Link>
          </li>
          <li className="py-2">
            <Link to="/technology">Technology</Link>
          </li>
          <li className="py-2">
            <Link to="/beauty">Beauty</Link>
          </li>
          <li className="py-2">
            <Link to="/fitness">Fitness</Link>
          </li>
          <li className="py-2">
            <Link to="/food">Food</Link>
          </li>
          <li className="py-2 flex items-center">
            <Link to="/profile">Profile</Link>
            <img src={profileIcon} alt="Profile Icon" className="w-6 h-6 ml-2 rounded-full" />
          </li>
        </ul>
      </nav>
    </>
  );
}
