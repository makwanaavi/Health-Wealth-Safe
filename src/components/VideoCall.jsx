import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const VideoCall = () => {
  return (
    <motion.div
      className="flex justify-center gap-12"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.4, type: "spring" }}
    >
      <motion.div
        className="w-80 h-60 bg-white flex justify-center items-center mt-12 shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <button className="bg-blue-50 text-[#3699FF] p-4 cursor-pointer ">
          <Link to="/exam-room">START YOUR CALL NOW</Link>
        </button>
      </motion.div>
      <motion.div
        className="w-80 h-60 bg-white flex justify-center items-center mt-12 shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", delay: 0.1 }}
      >
        <button className="bg-blue-50 text-[#3699FF]   p-4 cursor-pointer">
          {" "}
          SCHEDULE YOUR CALL NOW{" "}
        </button>
      </motion.div>
    </motion.div>
  );
};

export default VideoCall;
