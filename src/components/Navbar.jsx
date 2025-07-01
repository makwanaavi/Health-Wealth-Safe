import React, { useState } from "react";
import {
  FaTh,
  FaRegCommentDots,
  FaRegFileAlt,
  FaSms,
  FaFileMedical,
  FaVideo,
  FaUser,
  FaDoorOpen,
} from "react-icons/fa";
import { FiTablet, FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { name: "Dashboards", icon: <FaTh /> },
  { name: "Questionnaires", icon: <FaRegCommentDots /> },
  { name: "Chat", icon: <FaRegFileAlt /> },
  { name: "SMS", icon: <FaSms /> },
  { name: "Documents", icon: <FaRegFileAlt /> },
  { name: "Health Records", icon: <FaFileMedical /> },
  { name: "Devices", icon: <FiTablet /> },
  { name: "Video Call", icon: <FaVideo /> },
  { name: "Profile", icon: <FaUser /> },
  { name: "Exam Room", icon: <FaDoorOpen /> },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-blue-500 text-white py-2">
      {/* Top Bar for Mobile */}
      <div className="flex items-center justify-between px-6 py-3 md:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <FiX className="text-2xl" />
          ) : (
            <FiMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* Nav Items */}
      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex md:flex-row flex-col md:items-center w-full md:w-auto px-4 md:px-6 pb-2 md:pb-0 transition-all duration-300 ease-in-out`}
      >
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`flex items-center gap-2 px-6 py-2 rounded-md my-1 md:my-0 ${
              item.active ? "bg-blue-700" : "hover:bg-blue-600"
            } cursor-pointer text-sm transition`}
          >
            {item.icon}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
