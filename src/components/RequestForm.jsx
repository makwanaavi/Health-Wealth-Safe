import React from "react";

const fields = [
  "First Name",
  "Middle Name",
  "Last Name",
  "Date of Birth",
  "Email",
  "Phone",
  "Address",
];

const RequestForm = () => {
  return (
    <div className="bg-white rounded-lg shadow-md max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold  border border-gray-300 p-4">
        Amendment Request
      </h2>
      <div className="flex flex-col sm:flex-row gap-8 p-4">
        {/* Checkbox Fields */}
        <div className="sm:w-1/4 mb-4">
          <p className="font-semibold mb-2">Select Fields to Update</p>
          <div className="flex flex-col gap-2 text-sm">
            {fields.map((field) => (
              <label key={field} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="accent-blue-600"
                />
                <span>{field}</span>
              </label>
            ))}
          </div> 
        </div>
        {/* Form Fields */}
        
        <div className="sm:w-3/4 flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="input border border-gray-200 p-4 rounded-sm"
            />
            <input
              type="text"
              placeholder="Middle Name"
              className="input border border-gray-200 p-4 rounded-sm"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input border border-gray-200 p-4 rounded-sm"
            />
            <input
              type="date"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = e.target.value ? "date" : "text")}
              placeholder="Date of Birth"
              className="border border-gray-200 p-4 rounded-sm text-sm"
            />

            <input
              type="email"
              placeholder="Email"
              className="input border border-gray-200 p-4 rounded-sm"
            />
          </div>
          {/* Phone Section */}
          {["Primary Phone", "Work Phone", "Home Phone"].map((label, i) => (
            <div key={i} className="mb-2">
              <div className="text-xs font-medium mb-1">{label}</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <select className="input border border-gray-200 p-4 rounded-sm">
                  <option>Phone Type</option>
                </select>
                <select className="input border border-gray-200 text-gray-50-400 p-4 rounded-sm">
                  <option>United States (1)</option>
                </select>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input border border-gray-200 p-4 rounded-sm"
                />
              </div>
            </div>
          ))}
          {/* Address Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 mt-4">
            <textarea
              placeholder="Address 1"
              className="input resize border border-gray-200 p-4 rounded-sm"
            ></textarea>
            <textarea
              placeholder="Address 2"
              className="input resize border border-gray-200 p-4 rounded-sm"
            ></textarea>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
            <select className="input border border-gray-200 p-4 rounded-sm">
              <option>Country</option>
            </select>
            <select className="input border border-gray-200 p-4 rounded-sm">
              <option>State</option>
            </select>
            <input
              type="text"
              placeholder="City"
              className="input border border-gray-200 p-4 rounded-sm"
            />
            <input
              type="text"
              placeholder="ZipCode"
              className="input border border-gray-200 p-4 rounded-sm"
            />
          </div>
          {/* Upload Documents */}
          <div className="mb-6">
            <p className="font-semibold text-red-600 text-sm mb-2">
              Upload Documents <span className="font-normal text-black">(</span>
              <span className="text-red-600 font-normal">
                Please upload any supporting document(s) for an amendment
              </span>
              <span className="font-normal text-black">)</span>
            </p>
            <div className="border-dashed border-2 border-gray-300 rounded p-6 flex items-center justify-center">
              <input type="file" className="hidden" id="upload" />
              <label
                htmlFor="upload"
                className="cursor-pointer text-[#3699FF] flex flex-col items-center"
              >
                <span className="text-2xl text-[#3699FF]">⬆</span>
                <span >Upload</span>
              </label>
            </div>
          </div>
    
          {/* Submit Button */}
          <div className="text-center">
            <button className="bg-[#3699FF] text-white px-6 py-2 rounded hover:bg-[#3699FF]/90">
              Submit Amendment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Tailwind input style
// eslint-disable-next-line no-unused-vars
const style = `
    .input {
    @apply border border-gray-300 rounded px-3 py-2 w-full text-sm;
    }
    `;

export default RequestForm;
