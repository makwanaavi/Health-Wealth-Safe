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
import HealthCards from "./HealthCards";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="bg-blue-500 text-white">
        {/* Top bar (mobile only) */}
        <div className="flex items-center justify-between px-4 py-3 md:hidden">
          <h1 className="text-lg font-semibold">Menu</h1>
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <FiX className="text-3xl" />
            ) : (
              <FiMenu className="text-3xl" />
            )}
          </button>
        </div>

        {/* Nav Items */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:flex-wrap md:items-center md:justify-start px-4 md:px-6 pb-4 md:pb-0 transition-all duration-300`}
        >
          <li className="flex items-center gap-2 px-4 py-2 my-1 md:my-0 md:mr-4 rounded-md text-base hover:bg-blue-600 transition cursor-pointer">
            <FaTh />
            <span>Dashboards</span>
          </li>

          <li className="flex items-center gap-2 px-4 py-2 my-1 md:my-0 md:mr-4 rounded-md text-base hover:bg-blue-600 transition cursor-pointer">
            <FaRegCommentDots />
            <span>Questionnaires</span>
          </li>

          <li className="flex items-center gap-2 px-4 py-2 my-1 md:my-0 md:mr-4 rounded-md text-base hover:bg-blue-600 transition cursor-pointer">
            <FaRegFileAlt />
            <span>Chat</span>
          </li>

          <li className="flex items-center gap-2 px-4 py-2 my-1 md:my-0 md:mr-4 rounded-md text-base hover:bg-blue-600 transition cursor-pointer">
            <FaSms />
            <span>SMS</span>
          </li>

          <li className="flex items-center gap-2 px-4 py-2 my-1 md:my-0 md:mr-4 rounded-md text-base hover:bg-blue-600 transition cursor-pointer">
            <FaRegFileAlt />
            <span>Documents</span>
          </li>

          <li className="flex items-center gap-2 px-4 py-2 my-1 md:my-0 md:mr-4 rounded-md text-base hover:bg-blue-600 transition cursor-pointer">
            <FaFileMedical />
            <span>Health Records</span>
          </li>

          <li className="flex items-center gap-2 px-4 py-2 my-1 md:my-0 md:mr-4 rounded-md text-base hover:bg-blue-600 transition cursor-pointer">
            <FiTablet />
            <span>Devices</span>
          </li>

          <li className="flex items-center gap-2 px-4 py-2 my-1 md:my-0 md:mr-4 rounded-md text-base hover:bg-blue-600 transition cursor-pointer">
            <FaVideo />
            <span>Video Call</span>
          </li>

          <li className="flex items-center gap-2 px-4 py-2 my-1 md:my-0 md:mr-4 rounded-md text-base hover:bg-blue-600 transition cursor-pointer">
            <FaUser />
            <span>Profile</span>
          </li>

          <li className="flex items-center gap-2 px-4 py-2 my-1 md:my-0 md:mr-4 rounded-md text-base hover:bg-blue-600 transition cursor-pointer">
            <FaDoorOpen />
            <span>Exam Room</span>
          </li>
        </ul>
      </nav>
      <HealthCards />
    </>
  );
};

export default Navbar;
