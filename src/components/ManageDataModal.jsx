import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ManageDataModal = () => {
  const navigate = useNavigate();
  const handleClickop = () => {
    navigate("/sign-up");
  };
  return (
    <div className="fixed inset-0 bg-[#0071B3]/20  flex justify-center items-center z-50 px-4">
      <div className="bg-white w-full max-w-6xl rounded-lg shadow-lg p-6 md:p-14 max-h-[100vh] overflow-y-auto">
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
          How do I manage my data?
        </h2>

        <p className="text-gray-700 mb-4">
          If you have permitted data import from Medicare into your account with
          Health Wealth Safe, you can easily dispose of that data and stop any
          future data transfers from Medicare into your account with Health
          Wealth Safe.
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
            To dispose of any data imported from Medicare into your account with
            Health Wealth Safe:
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
          Medicare data imported to your account with Health Wealth Safe, please
          call <span className="font-semibold">+1 (877) 581-8810</span>{" "}
          (Available 24/7)
        </p>

        <div className="flex justify-start">
          <button
            className="bg-blue-50 hover:bg-blue-100 text-[#3699FF] font-medium py-2 px-6 rounded-lg transition"
            onClick={handleClickop}
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageDataModal;
