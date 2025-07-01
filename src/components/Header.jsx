import { FiEdit2, FiGlobe, FiBell } from "react-icons/fi";
import { MdAddCall, MdLockReset, MdVerified } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import { IoMdMail } from "react-icons/io";
import { GrLogout } from "react-icons/gr";
import { Link } from "react-router-dom";

const Header = () => {
  // Fetch user data from localStorage (set by Login or SignUp)
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    username: "",
    doctor: "",
    mrn: "",
  });

  useEffect(() => {
    // Try to get signupData or loginData from localStorage
    const signupData = localStorage.getItem("signupData");
    const loginData = localStorage.getItem("loginData");
    let data = null;
    if (signupData) {
      data = JSON.parse(signupData);
    } else if (loginData) {
      data = JSON.parse(loginData);
    }
    if (data) {
      setUser({
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        email: data.email || "",
        phone: data.phone || data.mobile || "",
        username: data.username || "",
        doctor: data.doctor || "",
        mrn: data.mrn || data.username || "",
      });
    }
  }, []);

  // Helper for initials
  const getInitials = () => {
    if (user.firstName || user.lastName) {
      return (
        (user.firstName?.[0] || "") + (user.lastName?.[0] || "")
      ).toUpperCase();
    }
    return "U";
  };

  // Dropdown state
  const [openDropdown, setOpenDropdown] = useState(null); // 'language' | 'notification' | 'profile' | null

  // For closing dropdowns on outside click
  const dropdownRefs = {
    language: useRef(null),
    notification: useRef(null),
    profile: useRef(null),
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        !dropdownRefs.language.current?.contains(event.target) &&
        !dropdownRefs.notification.current?.contains(event.target) &&
        !dropdownRefs.profile.current?.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between bg-white p-4 shadow-md gap-4 md:gap-0">
      {/* Left: User Info */}
      <div className="flex items-start md:items-center gap-4 flex-1">
        {/* Avatar */}
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-800 text-xl font-bold rounded">
          {getInitials()}
        </div>

        {/* User Details */}
        <div className="text-sm">
          <div className="flex items-center gap-1 font-semibold text-gray-800 flex-wrap">
            <MdVerified className="text-blue-500 h-5 w-5" />
            {user.firstName || user.lastName
              ? `${user.firstName} ${user.lastName}`.trim()
              : "User"}
          </div>
          <div className="text-gray-600 mt-2 gap-4 flex justify-center">
            <span className="flex gap-1 items-center">
              <MdAddCall className="h-4.5 w-4.5" />
              {user.phone ? user.phone : "(---) --- ----"}
            </span>
            <span className="flex gap-1 items-center">
              <IoMdMail className="h-4.5 w-4.5" />{" "}
              {user.email || "user@email.com"}
            </span>
          </div>
          <div className="text-gray-600 mt-1 flex-wrap">
            <span className="font-semibold">Doctor's name:</span>{" "}
            <span className="italic">
              {user.doctor ? user.doctor : "( Not Assigned )"}
            </span>{" "}
            <span className="font-semibold ml-2">MR#:</span> {user.mrn || "N/A"}
          </div>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex flex-wrap items-center gap-3 justify-between md:justify-end">
        {/* Start Call */}
        <button className="flex items-center gap-2 px-6 py-4  bg-blue-100 text-blue-600 hover:text-white font-medium rounded hover:bg-[#3699FF] transition text-sm">
          <MdAddCall className="h-4.5 w-4.5" />
          <span className="hidden sm:inline">Start Call</span>
        </button>

        {/* Request Amendment */}
        <button className="flex items-center gap-1 px-6 py-4 bg-blue-100 text-blue-600 font-medium hover:text-white rounded transition hover:bg-[#3699FF] text-sm">
          <FiEdit2 />
          <span className="hidden sm:inline">Request Amendment</span>
        </button>

        {/* Language Dropdown */}
        <div className="relative" ref={dropdownRefs.language}>
          <div
            className="flex items-center gap-1 text-base text-[#0165B5] cursor-pointer hover:text-[#3699FF] transition"
            onClick={() =>
              setOpenDropdown(openDropdown === "language" ? null : "language")
            }
          >
            <FiGlobe />
            <span className="hidden sm:inline">English</span>
          </div>
          {openDropdown === "language" && (
            <div className="absolute z-20 mt-2 w-28 bg-white rounded shadow-lg py-2 text-gray-800 right-0">
              <div className="px-4 py-2 hover:bg-blue-50 cursor-pointer">
                English
              </div>
              <div className="px-4 py-2 hover:bg-blue-50 cursor-pointer">
                Hindi
              </div>
            </div>
          )}
        </div>

        {/* Notification Dropdown */}
        <div className="relative" ref={dropdownRefs.notification}>
          <FiBell
            className="text-xl text-gray-700 md:mx-4 sm:mx-1 hover:text-[#3699FF] transition cursor-pointer"
            onClick={() =>
              setOpenDropdown(
                openDropdown === "notification" ? null : "notification"
              )
            }
          />
          {openDropdown === "notification" && (
            <div className="absolute z-20 mt-2 w-64 bg-white rounded shadow-lg py-4 text-gray-800 right-0 text-center">
              No new notification found!
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRefs.profile}>
          <FaUserCircle
            className="text-3xl text-gray-700 cursor-pointer hover:text-[#3699FF] transition"
            onClick={() =>
              setOpenDropdown(openDropdown === "profile" ? null : "profile")
            }
          />
          {openDropdown === "profile" && (
            <div className="absolute z-20 mt-2 w-56 bg-white rounded shadow-lg py-2 text-gray-800 right-0">
              <div className="flex items-center px-4 py-2 hover:bg-blue-50 cursor-pointer gap-2">
                <span className="text-lg">
                  <MdLockReset />
                </span>
                Reset Password
              </div>
              <div className="flex items-center px-4 py-2 hover:bg-blue-50 cursor-pointer gap-2">
                <span className="text-lg">
                  <GrLogout />
                </span>
                <Link to="/">Logout</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
