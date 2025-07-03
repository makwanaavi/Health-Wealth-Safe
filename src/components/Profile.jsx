import React from "react";
import { FiUpload } from "react-icons/fi";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <motion.div
      className="bg-gray-100 min-h-screen py-4 px-2"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.4, type: "spring" }}
    >
      {/* Responsive container for all cards */}
      <div className="flex flex-col gap-2 md:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-2 md:gap-3 w-full max-w-full overflow-x-auto">
        {/* General Information */}
        <motion.div
          className="bg-white shadow-md rounded-lg max-w-full w-full min-w-[320px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <h2 className="text-[#37AFFF] text-lg font-semibold p-3 mb-4 bg-[#E1F0FF]">
            General Information
          </h2>
          <div>
            {/* Avatar */}
            <div>
              <img
                src="/profile.png"
                alt="Avatar"
                className="rounded-full w-30 h-30"
              />
            </div>
            {/* Info */}
            <div className="text-sm space-y-1">
              <div className=" text-gray-500 text-xl px-6">Raj Yadav</div>
              <div className="text-gray-6 px-6 mb-6">Age: 23</div>

              <div className="mt-4">
                <span className="px-6 font-normal">Username :</span>{" "}
                ryadav831694
              </div>
              <div className="mt-4">
                <span className="px-6 font-normal">Gender :</span> MALE
              </div>

              <div className="mt-4">
                <span className="px-6 font-normal">DOB :</span> Feb 1, 2002
              </div>
              <div className="mt-4">
                <span className="px-6 font-normal">Goes By :</span>
              </div>

              <div className="mt-4">
                <span className="px-6 font-normal">Name Ordinal :</span>
              </div>

              <div className="mt-4">
                <span className="px-6 font-normal">Name Title :</span>
              </div>

              <div className="mt-4">
                <span className="px-6 font-normal">SSN :</span>
              </div>

              <div className="mt-4">
                <span className="px-6 font-normal">Sexual Orientation :</span>
              </div>

              <div className="mt-4">
                <span className="px-6 font-normal">Citizenship Status :</span>
              </div>

              <div className="mt-4">
                <span className="px-6 font-normal">Email :</span>{" "}
                raj234@gmail.com
              </div>

              <div className="mt-4">
                <span className="px-6 font-normal">Phone: :</span> (846)
                984-9112
              </div>

              <div className="mt-4">
                <span className="px-6 font-normal">Home :</span>
              </div>

              <div className="mt-4">
                <span className="px-6 font-normal">Work :</span>
              </div>

              <div className="mt-4">
                <span className="px-6 font-normal">Relative: () :</span>
              </div>

              <div className="mt-4">
                <span className="px-6 font-normal">Address :</span> rajkot
              </div>
              <div className="mt-4">
                <span className="px-13 font-normal"></span> rajkot
              </div>

              <div className="mt-4">
                <span className="px-13 font-normal"></span> GJ
              </div>

              <div className="mt-4">
                <span className="px-13 font-normal"></span> IN
              </div>
              <div className="mt-4">
                <span className="px-6 font-normal">Zipcode :</span> 360003
              </div>

              <div className="mt-4">
                <span className="px-6 font-normal">Preferred Language :</span>{" "}
                English
              </div>

              <div className="mt-4">
                <span className="px-6 font-normal">
                  Preferred Engagement :{" "}
                </span>
              </div>

              <div className="mt-4">
                <span className="px-6 font-normal">
                  Billing Address Line 1 :
                </span>
              </div>

              <div className="mt-4">
                <span className="px-6 font-normal">
                  Billing Address Line 2 :
                </span>
              </div>

              <div className="mt-4">
                <span className="px-6 font-normal">Billing Country :</span>
              </div>

              <div className="mt-4">
                <span className="px-6 font-normal">Billing State :</span>
              </div>

              <div className="mt-4">
                <span className="px-6 font-normal">Billing City :</span>
              </div>

              <div className="mt-4">
                <span className="px-6 font-normal">Billing Zipcode :</span>
              </div>

              <div className="mt-4">
                <span className="px-6 font-normal">Subscribed Services : </span>
              </div>

              <div className="mt-4">
                <span className="px-6 font-normal">Share Health Data : </span>
                <button className="cursor-pointer bg-[#E1F0FF] p-2 text-[#3699FF]">
                  <div className="flex gap-2">
                    <FiUpload className="h-5 w-5 " /> Send To A Doctor
                  </div>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Medical Information */}
        <motion.div
          className="shadow-md rounded-lg bg-white relative max-w-full w-full min-w-[320px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", delay: 0.05 }}
        >
          <h2 className="text-[#37AFFF] text-lg font-semibold p-3 mb-4 bg-[#E1F0FF]">
            Medical Information
          </h2>

          {/* Medical Record Number */}
          <div className="text-sm text-gray-800 mb-4 px-6 ">
            <strong>Medical Record Number</strong>
            <div>ry281289</div>
          </div>

          {/* Consent Form */}
          <div className="text-sm text-gray-800 mb-4 px-6 ">
            <strong>Consent Form Received?</strong>
            <div className="mt-2 space-x-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="mr-1 h-4 w-4" />
                Written consent
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" readOnly className="mr-1 h-4 w-4" />
                Verbal consent
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" readOnly className="mr-1 h-4 w-4" />
                Consent To Service
              </label>
            </div>
          </div>

          {/* Integration Buttons */}
          <div className="flex flex-wrap gap-3 text-sm px-6 ">
            {[
              "Medicare",
              "Sign Consent",
              "Import Data: Blue Button CMS",
              "Remove Blue Button Data",
              "Unlink Blue Button Data",
              "Export Patient Data",
            ].map((label, index) => (
              <button
                key={index}
                className="border px-4 py-4 rounded text-blue-600 border-blue-500 bg-[#E1F0FF] hover:bg-blue-50 transition"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Edit Button */}
          <button className="absolute top-4 right-4 border border-blue-500 text-blue-600 px-3 py-1 text-sm rounded hover:bg-blue-50 transition">
            Edit
          </button>
        </motion.div>
        <motion.div
          className="shadow-md rounded-lg bg-white relative max-w-full w-full min-w-[320px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", delay: 0.1 }}
        >
          <h2 className="text-[#37AFFF] text-lg font-semibold p-3 bg-[#E1F0FF]">
            Patient Representative
          </h2>

          <div className="text-sm text-gray-800 grid grid-cols-2 gap-x-10 gap-y-3 px-6 py-4">
            <div>
              <strong>Does Patient have a representative?</strong>
              <div>--</div>
            </div>
            <div>
              <strong>First name</strong>
              <div>--</div>
            </div>
            <div>
              <strong>Last name</strong>
              <div>--</div>
            </div>
            <div>
              <strong>Email address</strong>
              <div>--</div>
            </div>
            <div>
              <strong>Street</strong>
              <div>--</div>
            </div>
            <div>
              <strong>Country</strong>
              <div>--</div>
            </div>
            <div>
              <strong>State</strong>
              <div>--</div>
            </div>
            <div>
              <strong>City</strong>
              <div>--</div>
            </div>
            <div>
              <strong>Zipcode</strong>
              <div>--</div>
            </div>
            <div>
              <strong>Home phone</strong>
              <div>--</div>
            </div>
            <div>
              <strong>Work phone</strong>
              <div>--</div>
            </div>
            <div>
              <strong>Cell phone</strong>
              <div>--</div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="shadow-md rounded-lg bg-white relative max-w-full w-full min-w-[320px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", delay: 0.15 }}
        >
          <h2 className="text-[#37AFFF] text-lg font-semibold p-3 bg-[#E1F0FF]">
            Patient Employment
          </h2>

          <div className="text-sm text-gray-800 grid grid-cols-2 gap-x-10 gap-y-3 px-6 py-4">
            <div>
              <strong>Patient Military status</strong>
              <div>--</div>
            </div>
            <div>
              <strong>Employment Status</strong>
              <div>--</div>
            </div>
            <div>
              <strong>Employer Name</strong>
              <div>--</div>
            </div>
            <div>
              <strong>Employer Address 1</strong>
              <div>--</div>
            </div>
            <div>
              <strong>Employer Address 2</strong>
              <div>--</div>
            </div>
            <div>
              <strong>Employer Country</strong>
              <div>--</div>
            </div>
            <div>
              <strong>Employer State</strong>
              <div>--</div>
            </div>
            <div>
              <strong>Employer City</strong>
              <div>--</div>
            </div>
            <div>
              <strong>Employer Zipcode</strong>
              <div>--</div>
            </div>
          </div>
        </motion.div>

        <div className="shadow-md rounded-lg bg-white relative max-w-full w-full min-w-[320px]">
          <h2 className="text-[#37AFFF] text-lg font-semibold p-3 bg-[#E1F0FF]">
            Services
          </h2>
          <div className="h-20"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
