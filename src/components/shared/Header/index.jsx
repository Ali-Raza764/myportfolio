"use client";
import React from "react";
import { FloatingNav } from "./NavBar";
import Link from "next/link";
import MobileNavBar from "./MobileNavBar";
import { navItems } from "./navLinks";
import { BiLogoGithub } from "react-icons/bi";
import { GIT_URL } from "@/lib/constants";

const Header = () => {
  return (
    <header className="top-0 z-50 relative">
      <div className="max-w-7xl mx-auto p-4 px-2 flex justify-between items-center">
        <MobileNavBar />
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          𝒜𝓁𝒾𝓇𝒶𝓏𝒶 𝒦𝒽𝒶𝓁𝒾𝒹
        </div>

        <FloatingNav navItems={navItems} className={"p-3"} />

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

        <div className="flex space-x-2">
          <a href={GIT_URL} target="_blank">
            <BiLogoGithub
              className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-110 duration-300"
              size={35}
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
