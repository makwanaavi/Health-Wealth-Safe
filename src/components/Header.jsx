import { useEffect, useState } from "react";
import { PhoneCall, Edit2, Globe, Bell, UserCircle, Phone, Mail, CheckCircle } from 'lucide-react'; // Using lucide-react for icons

const Header = () => {
  // State to hold user data, initialized with empty strings
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    username: "",
    doctor: "",
    mrn: "",
  });

  // useEffect hook to fetch user data from localStorage on component mount
  useEffect(() => {
    // Function to retrieve and set user data from localStorage
    const fetchUserData = () => {
      const signupData = localStorage.getItem("signupData");
      const loginData = localStorage.getItem("loginData");
      let data = null;

      // Prioritize signupData if available, otherwise use loginData
      if (signupData) {
        data = JSON.parse(signupData);
      } else if (loginData) {
        data = JSON.parse(loginData);
      }

      // Update the user state if data is found
      if (data) {
        setUser({
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          email: data.email || "",
          phone: data.phone || data.mobile || "", // 'mobile' is an alternative key for phone
          username: data.username || "",
          doctor: data.doctor || "",
          mrn: data.mrn || data.username || "", // 'username' is an alternative key for mrn
        });
      }
    };

    // Initial fetch of user data when the component mounts
    fetchUserData();

    // Add an event listener to update user data if localStorage changes (e.g., from another tab)
    window.addEventListener("storage", fetchUserData);

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener("storage", fetchUserData);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Helper function to get user initials for the avatar
  const getInitials = () => {
    if (user.firstName || user.lastName) {
      // Return the first letter of the first name and last name, if they exist
      return (
        (user.firstName?.[0] || "") + (user.lastName?.[0] || "")
      ).toUpperCase();
    }
    // Default to 'U' if no first or last name is available
    return "U";
  };

  return (
    // Main container for the header, responsive layout using flexbox
    // On small screens (default), it's a column. From medium screens up, it's a row.
    // Padding, background, and shadow are applied.
    <div className="flex flex-col md:flex-row md:items-center justify-between bg-white p-4 shadow-md gap-4 md:gap-0">
      {/* Left Section: User Info */}
      {/* Flex container for avatar and user details, responsive alignment and spacing */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-1 min-w-0">
        {/* Avatar */}
        {/* Fixed size, rounded corners, background, text color, font styling */}
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-800 text-xl font-bold rounded-md flex-shrink-0">
          {getInitials()}
        </div>

        {/* User Details */}
        {/* Text size, responsive wrapping for details */}
        <div className="text-sm flex flex-col gap-1 min-w-0">
          {/* User Name with Verified Icon */}
          {/* Flex container for icon and name, allows wrapping for long names */}
          <div className="flex items-center gap-1 font-semibold text-gray-800 flex-wrap">
            <CheckCircle className="text-blue-500 w-4 h-4 flex-shrink-0" /> {/* Replaced MdVerified with CheckCircle */}
            <span className="truncate"> {/* Truncate long names if necessary */}
              {user.firstName || user.lastName
                ? `${user.firstName} ${user.lastName}`.trim()
                : "User"}
            </span>
          </div>

          {/* Contact Information (Phone and Email) */}
          {/* Flex container, allows wrapping on small screens, gap between items */}
          <div className="flex flex-col sm:flex-row text-gray-600 gap-2 sm:gap-4 flex-wrap">
            {/* Phone Number */}
            <span className="flex items-center min-w-0">
              <a href={`tel:${user.phone}`} className="flex gap-1 items-center hover:text-blue-500 transition-colors truncate">
                <Phone className="w-4 h-4 flex-shrink-0" />{" "} {/* Replaced MdAddIcCall with Phone */}
                {user.phone ? user.phone : "(---) --- ----"}
              </a>
            </span>
            {/* Email Address */}
            <span className="flex items-center min-w-0">
              <a href={`mailto:${user.email}`} className="flex gap-1 items-center hover:text-blue-500 transition-colors truncate">
                <Mail className="w-4 h-4 flex-shrink-0" />{" "} {/* Replaced IoMdMail with Mail */}
                {user.email || "user@email.com"}
              </a>
            </span>
          </div>

          {/* Doctor's Name and MR# */}
          {/* Flex container, allows wrapping for responsive layout */}
          <div className="text-gray-600 mt-1 flex flex-wrap items-center">
            <span className="font-semibold flex-shrink-0">Doctor's name:</span>{" "}
            <span className="italic ml-1 mr-2 truncate">
              {user.doctor ? user.doctor : "( Not Assigned )"}
            </span>
            <span className="font-semibold flex-shrink-0">MR#:</span>{" "}
            <span className="truncate">{user.mrn || "N/A"}</span>
          </div>
        </div>
      </div>

      {/* Right Section: Actions */}
      {/* Flex container for action buttons and icons, responsive wrapping and justification */}
      <div className="flex flex-wrap items-center gap-3 justify-start md:justify-end mt-4 md:mt-0">
        {/* Start Call Button */}
        <button className="flex items-center gap-1 px-3 py-2 bg-blue-100 text-blue-600 font-medium rounded-md hover:bg-blue-200 transition-colors text-sm flex-shrink-0">
          <PhoneCall className="w-4 h-4" /> {/* Replaced FiPhoneCall with PhoneCall */}
          <span className="hidden sm:inline">Start Call</span>{" "}
          {/* Text hidden on small screens */}
        </button>

        {/* Request Amendment Button */}
        <button className="flex items-center gap-1 px-3 py-2 bg-blue-100 text-blue-600 font-medium rounded-md hover:bg-blue-200 transition-colors text-sm flex-shrink-0">
          <Edit2 className="w-4 h-4" /> {/* Replaced FiEdit2 with Edit2 */}
          <span className="hidden sm:inline">Request Amendment</span>{" "}
          {/* Text hidden on small screens */}
        </button>

        {/* Language Selector */}
        <div className="flex items-center gap-1 text-sm text-gray-700 cursor-pointer hover:text-blue-600 transition-colors flex-shrink-0">
          <Globe className="w-4 h-4" /> {/* Replaced FiGlobe with Globe */}
          <span className="hidden sm:inline">English</span>{" "}
          {/* Text hidden on small screens */}
        </div>

        {/* Notification Bell Icon */}
        <Bell className="text-xl text-gray-700 mx-1 sm:mx-2 md:mx-4 hover:text-blue-600 transition-colors cursor-pointer flex-shrink-0" /> {/* Replaced FiBell with Bell */}

        {/* Profile Icon */}
        <UserCircle className="text-3xl text-gray-700 cursor-pointer hover:text-blue-600 transition-colors flex-shrink-0" /> {/* Replaced FaUserCircle with UserCircle */}
      </div>
    </div>
  );
};

export default Header;
