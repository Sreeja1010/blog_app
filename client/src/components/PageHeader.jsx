import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assests/menu-icon.png";
import profileIcon from "../assests/profile-icon.png"; // Add the profile icon image to the assets folder

export default function Header() {
  const [isActive, setActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  
  const toggleClass = () => {
    setActive(!isActive);
  };

  // Handle user login and logout
  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn); // Toggle login state
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
            <li className="py-2">
              <Link to="/profile">Profile</Link>
            </li>
            {/* Profile icon or login */}
            <li className="py-2">
              {isLoggedIn ? (
                <button onClick={handleLoginLogout} className="flex items-center">
                  <img src={profileIcon} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                  Log Out
                </button>
              ) : (
                <Link to="/login" className="flex items-center">
                  <img src={profileIcon} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                  Log In
                </Link>
              )}
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
          <li className="py-2">
            <Link to="/about">About</Link>
          </li>
          {/* Profile icon or login */}
          <li className="py-2">
            {isLoggedIn ? (
              <button onClick={handleLoginLogout} className="flex items-center">
                <img src={profileIcon} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                Log Out
              </button>
            ) : (
              <Link to="/login" className="flex items-center">
                <img src={profileIcon} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                Log In
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}
