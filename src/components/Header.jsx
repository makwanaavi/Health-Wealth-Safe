import { FiPhoneCall, FiEdit2, FiGlobe, FiBell } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between bg-white p-4 shadow-md gap-4 md:gap-0">
      {/* Left: User Info */}
      <div className="flex items-start md:items-center gap-4 flex-1">
        {/* Avatar */}
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-800 text-xl font-bold rounded">
          RY
        </div>

        {/* User Details */}
        <div className="text-sm">
          <div className="flex items-center gap-1 font-semibold text-gray-800 flex-wrap">
            Raj Yadav
            <MdVerified className="text-blue-500" />
          </div>
          <div className="text-gray-600">
            <span className="block md:inline md:mr-2">📞 (846) 984-9112</span>
            <span className="block md:inline">✉️ raj234@gmail.com</span>
          </div>
          <div className="text-gray-600 mt-1 flex-wrap">
            <span className="font-semibold">Doctor's name:</span>{" "}
            <span className="italic">( Not Assigned )</span>{" "}
            <span className="font-semibold ml-2">MR#:</span> ry281289
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
        <div
          className="flex items-center gap-1 text-sm text-gray-700 cursor-pointer hover:text-blue-600 transition"
        >
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
