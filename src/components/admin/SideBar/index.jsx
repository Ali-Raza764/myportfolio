"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaHome,
  FaUserShield,
  FaSignOutAlt,
  FaList,
  FaProjectDiagram,
  FaBlog,
} from "react-icons/fa";
import { MdAdd, MdClose, MdMenu } from "react-icons/md";

const SideBar = ({ children }) => {
  const [open, setOpen] = useState(false);
  
  //* Ai generated sidebar
  const items = [
    { label: "Home", icon: <FaHome size={25} />, href: "/dashboard" },
    {
      label: "Create",
      icon: <MdAdd size={25} />,
      subItems: [
        { label: "Skills", icon: <FaList />, href: "/create/skills" },
        { label: "Projects", icon: <FaProjectDiagram />, href: "/create/projects" },
        { label: "Blogs", icon: <FaBlog />, href: "/create/blogs" },
      ],
    },
  ];

  return (
    <div className="h-screen w-full flex flex-col md:flex-row">
      {/* Mobile Header */}
      <header className="md:hidden border-b border-gray-600 w-full flex items-center justify-between p-1">
        <button onClick={() => setOpen(!open)} className="">
          <MdMenu size={35} />
        </button>
        <div className="flex items-center gap-3">
          <FaUserShield size={40} className="text-indigo-500" />
          <h2 className="text-lg font-semibold mt-2">Admin</h2>
        </div>
        <button className="flex items-center rounded-md transition-colors duration-300">
          <FaSignOutAlt size={30} />
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={`h-full md:w-[20rem] fixed md:static border-r border-gray-600 text-white flex flex-col justify-between
          ${open ? "top-0 left-0 right-0 bottom-0 w-screen" : "hidden md:block"}
          transition-all duration-500 ease-in-out transform
          ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 bg-black`}
      >
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <MdClose size={35} />
        </button>
        <div className="p-4 flex flex-col items-center">
          <FaUserShield size={40} className="text-indigo-500" />
          <h2 className="text-lg font-semibold mt-2">Admin</h2>
        </div>

        {/* Navigation */}
        <nav className="flex-1 flex flex-col items-center justify-center">
          <div className="flex flex-start flex-col md:w-full gap-0">
            {items.map((item, index) => (
              <div key={index} className="mb-4 md:mb-0">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 p-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
                    onClick={() => setOpen(false)} // Close sidebar on link click
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ) : null}

                {item.subItems && (
                  <div className="md:pl-8 mt-4 md:mt-0">
                    {item.subItems.map((subItem, subIndex) => (
                      subItem.href ? (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors duration-300"
                          onClick={() => setOpen(false)} // Close sidebar on sub-link click
                        >
                          {subItem.icon}
                          <span className="ml-4">{subItem.label}</span>
                        </Link>
                      ) : null
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Logout Button */}
        <div className="p-4">
          <button className="flex items-center w-full p-3 bg-red-600 text-white rounded-md hover:bg-red-500 transition-colors duration-300 justify-center md:mt-16">
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default SideBar;
