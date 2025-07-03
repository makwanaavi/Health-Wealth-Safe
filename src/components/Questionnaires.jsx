import React, { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { motion } from "framer-motion";

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
    <motion.div
      className=" rounded shadow-md  flex flex-col w-full h-[700px] "
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.4, type: "spring" }}
    >
      <h2 className=" font-semibold mb-4 bg-blue-100 p-3 text-[#3699FF]">
        Answer questions
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6 px-12">
        <div>
          <label className="block font-medium mb-1 mt-4">
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
        <hr className="text-gray-300 mt-12" />
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
        <hr className="text-gray-300 mt-12" />
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
          <MdOutlineFileUpload />
          Submit Answers
        </button>
      </form>
    </motion.div>
  );
};

export default Questionnaires;
