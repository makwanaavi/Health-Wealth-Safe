import React from "react";

const ResetPassword = () => {
  return (
    <div className="h-100 flex items-center justify-center">
      <div className=" rounded w-250 max-w-3xl p-6 mt-4">
        {/* Header */}
        <div className="bg-gray-100 p-4 mb-6 text-center px-8 justify-start flex items-center gap-2">
          <h2 className="text-xl font-semibold text-gray-700">
            Reset Password
          </h2>
          <p className="text-sm text-gray-400">
            Change or reset your account password
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div className="flex items-center">
            <label className="w-1/4 text-right pr-4 text-sm text-gray-700">
              Current Password
            </label>
            <input
              type="password"
              placeholder="Current Password"
              className="w-3/4 border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="flex items-center">
            <label className="w-1/4 text-right pr-4 text-sm text-gray-700">
              New Password
            </label>
            <input
              type="password"
              placeholder="New Password"
              className="w-3/4 border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="flex items-center">
            <label className="w-1/4 text-right pr-4 text-sm text-gray-700">
              Verify Password
            </label>
            <input
              type="password"
              placeholder="Verify Password"
              className="w-3/4 border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-blue-100 text-blue-500 px-6 py-2 rounded text-sm font-medium hover:bg-blue-200 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
