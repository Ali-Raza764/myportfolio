"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { navItems } from "./navLinks";

const MobileNavBar = () => {
  const [active, setActive] = useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    console.log("clicked");
    setActive(!active);
  };

  return (
    <div className="flex md:hidden relative z-50">
      <button
        onClick={handleClick}
        className="cursor-pointer p-1 z-50 transition" // Ensuring z-index for the button
      >
        {active ? <MdClose size={30} /> : <MdMenu size={30} />}
      </button>

      {/* Overlay */}
      <div
        className={`fixed top-0 right-0 left-0 bottom-0 bg-black z-40 h-screen w-screen transition-all duration-500 ${
          active ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="h-full flex items-center justify-center flex-col gap-4 mt-6">
          {navItems.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              className={`pb-1 border-b  transition hover:border-gray-400 ${
                pathname === link.href
                  ? "border-gray-400"
                  : "border-transparent"
              }`}
              onClick={() => {
                setActive(false);
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNavBar;
