"use client"; // Make sure this is at the top

import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FloatingNav } from "./NavBar"; // Import the FloatingNav component
import Link from "next/link";
import MobileNavBar from "./MobileNavBar";
import { navItems } from "./navLinks";


const Header = () => {
  return (
    <header className="top-0 z-50 relative">
      <div className="max-w-7xl mx-auto p-4 px-2 flex justify-between items-center">
        <MobileNavBar />
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          𝒜𝓁𝒾𝓇𝒶𝓏𝒶 𝒦𝒽𝒶𝓁𝒾𝒹
        </div>

        <FloatingNav navItems={navItems} className={"p-3"}/>

        {/* Navbar with rounded border */}
        <nav className="hidden md:flex space-x-8 p-2 rounded-full border border-neutral-300 dark:border-white/20 shadow-lg px-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Dark/Light mode switch icons */}
        <div className="flex space-x-2">
          {/* <MdDarkMode className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-110 duration-300" size={35} /> */}
          <MdLightMode className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-110 duration-300" size={35}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
