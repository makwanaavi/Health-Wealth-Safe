import React, { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";

const Questionnaires = () => {
  const [form, setForm] = useState({
    mood: "",
    sleep: "",
    water: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", form);
    alert("Form submitted!");
  };

  return (
    <div className="w-full mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4 bg-[#3699FF]/70 p-4 text-white rounded-xl">
        Answer questions
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium mb-1">
            Q1: How do you feel today on the scale of 1 to 10?
          </label>
          <input
            type="number"
            name="mood"
            value={form.mood}
            onChange={handleChange}
            placeholder="Enter value"
            className="w-full border-b border-[#3699FF] p-2 rounded"
          />
        </div>
 <hr className="text-gray-300 mt-12"/>  
        <div>
          <label className="block font-medium mb-1">
            Q2: How many hours of sleep did you get?
          </label>
          <input
            type="number"
            name="sleep"
            value={form.sleep}
            onChange={handleChange}
            placeholder="Enter value"
            className="w-full border-b border-[#3699FF] p-2 rounded"
          />
        </div>
          <hr className="text-gray-300 mt-12"/>
        <div>
          <label className="block font-medium mb-1">
            Q3: How many ounces of water have you had to drink today?
          </label>
          <input
            type="number"
            name="water"
            value={form.water}
            onChange={handleChange}
            placeholder="Enter value"
            className="w-full border-b border-[#3699FF] p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-[#3699FF]/70 text-white px-4 py-2  hover:bg-[#3699FF]/90 transition flex items-center gap-2"
        >
          <MdOutlineFileUpload/>
          Submit Answers
        </button>
      </form>
    </div>
  );
};

export default Questionnaires;
