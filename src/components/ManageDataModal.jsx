import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ManageDataModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleClickop = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/sign-up");
    }, 1200); // simulate loading
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-[#0071B3]/40 flex justify-center items-center z-50 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.25 } }}
      >
        <motion.div
          className="bg-white w-full max-w-6xl rounded-lg shadow-lg p-6 md:p-14 max-h-[100vh] overflow-y-auto relative"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0, transition: { duration: 0.2 } }}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-600 transition-all"
            onClick={() => {
              if (loading) return;
              if (onClose) onClose();
            }}
            aria-label="Close"
            disabled={loading}
          >
            &times;
          </button>

          <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
            How do I manage my data?
          </h2>

          <p className="text-gray-700 mb-4">
            If you have permitted data import from Medicare into your account
            with Health Wealth Safe, you can easily dispose of that data and
            stop any future data transfers from Medicare into your account with
            Health Wealth Safe.
          </p>

          <div className="mb-6">
            <p className="font-semibold text-gray-800 mb-2">
              To stop future data transfer from Medicare into your Health Wealth
              Safe account:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-gray-700">
              <li>
                Log into your account using your credentials at{" "}
                <a
                  href="https://portal.healthwealthsafe.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3699FF] underline"
                >
                  https://portal.healthwealthsafe.net
                </a>
              </li>
              <li>Navigate to Profile section of your account</li>
              <li>Click on "Unlink Bluebutton Data"</li>
            </ol>
          </div>

          <div className="mb-6">
            <p className="font-semibold text-gray-800 mb-2">
              To dispose of any data imported from Medicare into your account
              with Health Wealth Safe:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-gray-700">
              <li>
                Log into your account using your credentials at{" "}
                <a
                  href="https://portal.healthwealthsafe.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3699FF] underline"
                >
                  https://portal.healthwealthsafe.net
                </a>
              </li>
              <li>Navigate to Profile section of your account</li>
              <li>Click on "Remove Bluebutton Data"</li>
            </ol>
          </div>

          <p className="text-gray-700 mb-6">
            If you do not have your credentials or need help with managing your
            Medicare data imported to your account with Health Wealth Safe,
            please call <span className="font-semibold">+1 (877) 581-8810</span>{" "}
            (Available 24/7)
          </p>

          <div className="flex justify-start">
            <motion.button
              className="bg-blue-50 hover:bg-blue-100 text-[#3699FF] font-medium py-2 px-6 rounded-lg transition flex items-center gap-2"
              onClick={handleClickop}
              disabled={loading}
              whileTap={{ scale: 0.97 }}
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-[#3699FF] border-t-transparent rounded-full animate-spin inline-block"></span>
              ) : (
                "Okay"
              )}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ManageDataModal;
