import { motion } from "framer-motion";

const SMS = () => {
  return (
    <motion.div
      className=" w-full h-[700px] rounded shadow-md  flex flex-col"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.4, type: "spring" }}
    >
      <div className="p-3 text-[#3699FF] font-semibold bg-blue-100">SMS</div>

      <div className="flex justify-center items-center h-screen text-gray-500">
        Not Data Found
      </div>
    </motion.div>
  );
};

export default SMS;
