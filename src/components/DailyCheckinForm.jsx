import React, { useState } from "react";

const DailyCheckinForm = () => {
  const [formData, setFormData] = useState({
    feeling: "",
    sleep: "",
    water: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-blue-50 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Answer <span className="font-normal">questions</span></h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Question 1 */}
        <div>
          <label className="block font-bold text-gray-800 mb-1">
            Q1: How do you feel today on the scale of 1 to 10? (1 being worse and 10 being best)
          </label>
          <input
            type="number"
            name="feeling"
            value={formData.feeling}
            onChange={handleChange}
            placeholder="Enter value"
            className="w-full border-b border-gray-400 focus:outline-none py-1"
          />
        </div>

        {/* Question 2 */}
        <div>
          <label className="block font-bold text-gray-800 mb-1">
            Q2: How many hours of sleep did you get?
          </label>
          <input
            type="number"
            name="sleep"
            value={formData.sleep}
            onChange={handleChange}
            placeholder="Enter value"
            className="w-full border-b border-gray-400 focus:outline-none py-1"
          />
        </div>

        {/* Question 3 */}
        <div>
          <label className="block font-bold text-gray-800 mb-1">
            Q3: How many ounces of water have you had to drink today?
          </label>
          <input
            type="number"
            name="water"
            value={formData.water}
            onChange={handleChange}
            placeholder="Enter value"
            className="w-full border-b border-gray-400 focus:outline-none py-1"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-600 px-4 py-2 rounded shadow-sm transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M.5 9.9V16h6.1l8.3-8.3-6.1-6.1L.5 9.9zM15.4 6.6l-1.8 1.8-2.1-2.1 1.8-1.8a1.5 1.5 0 0 1 2.1 2.1z"/>
          </svg>
          Submit Answers
        </button>
      </form>
    </div>
  );
};

export default DailyCheckinForm;
