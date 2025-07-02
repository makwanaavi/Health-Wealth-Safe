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
// import HealthCards from "./HealthCards"; // Remove from Navbar
import { NavLink } from "react-router-dom"; // Use NavLink

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Active link style
  const activeClass = "bg-[#0165B5] text-white font-semibold";

  return (
    <>
      <nav className=" text-white" style={{ backgroundColor: "#3699FF" }}>
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
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-4 my-1 md:my-0 md:mr-4 text-base transition cursor-pointer hover:bg-[#0165B5] ${
                isActive ? activeClass : ""
              }`
            }
          >
            <FaTh />
            <span className="text-sm">Dashboards</span>
          </NavLink>
          <NavLink
            to="/questionnaires"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-4 my-1 md:my-0 md:mr-4 text-base hover:bg-[#0165B5] transition cursor-pointer ${
                isActive ? activeClass : ""
              }`
            }
          >
            <FaRegCommentDots />
            <span className="text-sm">Questionnaires</span>
          </NavLink>
          <NavLink
            to="/chat"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-4 my-1 md:my-0 md:mr-4 text-base hover:bg-[#0165B5] transition cursor-pointer ${
                isActive ? activeClass : ""
              }`
            }
          >
            <FaRegFileAlt />
            <span className="text-sm">Chat</span>
          </NavLink>
          <NavLink
            to="/sms"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-4 my-1 md:my-0 md:mr-4 text-base hover:bg-[#0165B5] transition cursor-pointer ${
                isActive ? activeClass : ""
              }`
            }
          >
            <FaSms />
            <span className="text-sm">SMS</span>
          </NavLink>
          <NavLink
            to="/documents"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-4 my-1 md:my-0 md:mr-4 text-base hover:bg-[#0165B5] transition cursor-pointer ${
                isActive ? activeClass : ""
              }`
            }
          >
            <FaRegFileAlt />
            <span className="text-sm">Documents</span>
          </NavLink>
          <NavLink
            to="/healthrecords"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-4 my-1 md:my-0 md:mr-4 text-base hover:bg-[#0165B5] transition cursor-pointer ${
                isActive ? activeClass : ""
              }`
            }
          >
            <FaFileMedical/>
            <span className="text-sm">Health Records</span>
          </NavLink>
          <NavLink
            to="/devices"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-4 my-1 md:my-0 md:mr-4 text-base hover:bg-[#0165B5] transition cursor-pointer ${
                isActive ? activeClass : ""
              }`
            }
          >
            <FiTablet />
            <span className="text-sm">Devices</span>
          </NavLink>
          <NavLink
            to="/video-call"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-4 my-1 md:my-0 md:mr-4 text-base hover:bg-[#0165B5] transition cursor-pointer ${
                isActive ? activeClass : ""
              }`
            }
          >
            <FaVideo />
            <span className="text-sm">Video Call</span>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-4 my-1 md:my-0 md:mr-4 text-base hover:bg-[#0165B5] transition cursor-pointer ${
                isActive ? activeClass : ""
              }`
            }
          >
            <FaUser />
            <span className="text-sm">Profile</span>
          </NavLink>
          <NavLink
            to="/exam-room"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-4 my-1 md:my-0 md:mr-4 text-base hover:bg-[#0165B5] transition cursor-pointer ${
                isActive ? activeClass : ""
              }`
            }
          >
            <FaDoorOpen />
            <span className="text-sm">Exam Room</span>
          </NavLink>
        </ul>
      </nav>
      {/* <HealthCards /> */}
    </>
  );
};

export default Navbar;
