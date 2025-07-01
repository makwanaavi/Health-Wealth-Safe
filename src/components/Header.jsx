import { FiPhoneCall, FiEdit2, FiGlobe, FiBell } from "react-icons/fi";
import { MdAddIcCall, MdVerified } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoMdMail } from "react-icons/io";

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
    // Optional: Listen for changes in localStorage to update header dynamically
    const handleStorage = () => {
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
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
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
            <MdVerified className="text-blue-500" />
            {user.firstName || user.lastName
              ? `${user.firstName} ${user.lastName}`.trim()
              : "User"}
          </div>
          <div className="text-gray-600 flex gap-2">
            <span className="flex">
              <a className="flex gap-1 items-center">
                <MdAddIcCall /> {user.phone ? user.phone : "(---) --- ----"}
              </a>
            </span>
            <span className="flex">
              <a className="flex gap-1 items-center">
                {" "}
                <IoMdMail /> {user.email || "user@email.com"}
              </a>
            </span>
          </div>
          <div className="text-gray-600 mt-1 flex-wrap">
            <span className="font-semibold">Doctor's name:</span>{" "}
            <span className="italic">
              {user.doctor ? user.doctor : "( Not Assigned )"}
            </span>
            <span className="font-semibold ml-2">MR#:</span> {user.mrn || "N/A"}
          </div>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex flex-wrap items-center gap-3 justify-between md:justify-end">
        {/* Start Call */}
        <button className="flex items-center gap-1 px-3 py-2 bg-blue-100 text-blue-600 font-medium rounded hover:bg-blue-200 transition text-sm">
          <FiPhoneCall />
          <span className="hidden sm:inline">Start Call</span>
        </button>

        {/* Request Amendment */}
        <button className="flex items-center gap-1 px-3 py-2 bg-blue-100 text-blue-600 font-medium rounded hover:bg-blue-200 transition text-sm">
          <FiEdit2 />
          <span className="hidden sm:inline">Request Amendment</span>
        </button>

        {/* Language */}
        <div className="flex items-center gap-1 text-sm text-gray-700 cursor-pointer hover:text-blue-600 transition">
          <FiGlobe />
          <span className="hidden sm:inline">English</span>
        </div>

        {/* Notification */}
        <FiBell className="text-xl text-gray-700 md:mx-4 sm:mx-1 hover:text-blue-600 transition cursor-pointer" />

        {/* Profile Icon */}
        <FaUserCircle className="text-3xl text-gray-700 cursor-pointer hover:text-blue-600 transition" />
      </div>
    </div>
  );
};

export default Header;
