import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom"; // ya Next.js ke liye `next/link`

const RecoverPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email Address is required");
    } else {
      setError("");
      // Call API or reset logic here
      console.log("Reset link sent to:", email);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white shadow-lg rounded-md p-8 w-full max-w-md text-center">
        {/* Lock Icon */}
        <div className="flex justify-center mb-4 text-green-600 text-5xl">
          <FaLock />
        </div>

        {/* Heading */}
        <h2 className="text-xl font-bold mb-2">RECOVER YOUR USERNAME & PASSWORD</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Your Username and link to reset password will be sent to your Email.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="text-left">
          <label className="text-sm font-semibold text-gray-700">Email Address *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b-2 border-blue-300 focus:outline-none focus:border-blue-500 py-2 mb-1"
            placeholder="Enter your email"
          />
          {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

          {/* Button */}
          <button
            type="submit"
            className={`w-full py-2 rounded-md font-medium transition ${
              email ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-blue-100 text-blue-300 cursor-not-allowed"
            }`}
            disabled={!email}
          >
            SEND RESET LINK
          </button>
        </form>

        {/* Back to Login */}
        <div className="mt-4 text-sm">
          <Link to="/login" className="text-blue-600 hover:underline">
            Go back to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;
