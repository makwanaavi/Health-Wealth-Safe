import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaUpload } from "react-icons/fa";
import { LuArrowLeftToLine, LuArrowRightToLine } from "react-icons/lu";
import { Rnd } from "react-rnd";

const Documents = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileType, setFileType] = useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile && fileType) {
      alert(`Uploaded: ${selectedFile.name} as ${fileType}`);
      // Yaha API ya logic lagao file upload ka
      setShowModal(false);
      setSelectedFile(null);
      setFileType("");
    } else {
      alert("Please select a file and file type");
    }
  };

  return (
    <>
      <button
        className="flex items-center gap-2 px-4 py-2 mb-6 border border-blue-400 text-blue-500 rounded hover:bg-blue-100"
        onClick={() => setShowModal(true)}
      >
        <FaUpload /> Upload
      </button>
      <div className="min-h-screen bg-[#e1e3eb] p-6">
        <div style={{ minHeight: 1200 }}>
          <Rnd
            default={{
              x: 0,
              y: 0,
              width: 1000,
              height: 550,
            }}
            className="rounded-lg shadow-md bg-white border border-gray-200"
            dragHandleClassName="drag-header"
          >
            <div className="h-full w-full overflow-hidden flex flex-col">
              {/* Header */}
              <div className="bg-blue-50 drag-header text-[#3699FF] p-3 font-medium mb-2 cursor-move">
                Personal Documents
              </div>

              {/* Table Head */}
              <div className="bg-blue-50 p-3 mx-1 text-[#3699FF] font-medium rounded-md mb-2">
                <ul className="flex items-center justify-between mx-4 gap-4 cursor-pointer">
                  <li className="text-gray-500 text-sm w-[50px]">S.No.</li>
                  <li className="text-gray-500 text-sm w-[150px]">File Name</li>
                  <li className="text-gray-500 text-sm w-[150px]">
                    Document Type
                  </li>
                  <li className="text-gray-500 text-sm w-[150px]">
                    Uploaded File
                  </li>
                  <li className="text-gray-500 text-sm w-[150px]">
                    Uploaded Date
                  </li>
                  <li className="text-gray-500 text-sm w-[80px]">Action</li>
                </ul>
              </div>
              <div className="flex items-center justify-end top-0 gap-2 p-4 text-sm text-gray-600">
                <span>Items per page:</span>
                <select className="border-none outline-none text-[#3699FF] underline bg-transparent">
                  <option>5</option>
                  <option>10</option>
                  <option>20</option>
                </select>
                <span>0 of 0</span>
                <button disabled className="text-gray-300">
                  <LuArrowLeftToLine className="w-5 h-5" />
                </button>
                <button disabled className="text-gray-300">
                  <FaAngleLeft className="w-5 h-5" />
                </button>
                <button disabled className="text-gray-300">
                  <FaAngleRight className="w-5 h-5" />
                </button>
                <button disabled className="text-gray-300">
                  <LuArrowRightToLine className="w-5 h-5" />
                </button>
              </div>

              {/* Empty State */}
              <div className="flex-1 flex items-center justify-center mb-24">
                <h2 className="text-gray-400 text-lg">No records</h2>
              </div>

              {/* Pagination */}
            </div>
          </Rnd>

          <Rnd
            default={{
              x: 0,
              y: 0,
              width: 700,
              height: 550,
            }}
            className="rounded-lg shadow-md bg-white border border-gray-200"
            dragHandleClassName="drag-header"
          >
            <div className="h-full w-full overflow-hidden">
              <div className="bg-blue-50 drag-header text-[#3699FF] p-3 font-medium mb-2 cursor-move">
                Email Attachments
              </div>
              <div className="flex items-center justify-center h-full">
                <h2 className="text-gray-500 text-lg">No records</h2>
              </div>
            </div>
          </Rnd>

          <Rnd
            default={{
              x: 0,
              y: 0,
              width: 1000,
              height: 550,
            }}
            className="rounded-lg shadow-md bg-white border border-gray-200"
            dragHandleClassName="drag-header"
          >
            <div className="h-full  w-full overflow-hidden">
              <div className="bg-blue-50 drag-header text-[#3699FF] p-3 font-medium mb-2 cursor-move">
                DICOM Files
              </div>
              <div className=" bg-blue-50 p-3 mx-1 text-[#3699FF] font-medium rounded-md mb-2">
                <ul className="flex items-center justify-between mx-4 gap-4 cursor-pointer">
                  <li className="text-gray-500 text-sm">S.No.</li>
                  <li className="text-gray-500 text-sm">Study ID </li>
                  <li className="text-gray-500 text-sm">Series ID</li>
                  <li className="text-gray-500 text-sm">Body Site</li>
                  <li className="text-gray-500 text-sm">Uploaded Date</li>
                  <li className="text-gray-500 text-sm">Modality</li>
                </ul>
              </div>
              <div className="flex items-center justify-end top-0 gap-2 p-4 text-sm text-gray-600">
                <span>Items per page:</span>
                <select className="border-none outline-none text-[#3699FF] underline bg-transparent">
                  <option>5</option>
                  <option>10</option>
                  <option>20</option>
                </select>
                <span>0 of 0</span>
                <button disabled className="text-gray-300">
                  <LuArrowLeftToLine className="w-5 h-5" />
                </button>
                <button disabled className="text-gray-300">
                  <FaAngleLeft className="w-5 h-5" />
                </button>
                <button disabled className="text-gray-300">
                  <FaAngleRight className="w-5 h-5" />
                </button>
                <button disabled className="text-gray-300">
                  <LuArrowRightToLine className="w-5 h-5" />
                </button>
              </div>
            </div>
          </Rnd>
        </div>
        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/20 bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-sm rounded shadow-lg p-6">
              <h2 className="text-lg font-medium mb-4">Upload Files</h2>

              {/* File Drop Area */}
              <label className="block border border-dashed border-gray-300 p-6 text-center cursor-pointer mb-4">
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                {selectedFile ? selectedFile.name : "Browse a file"}
              </label>

              {/* File Type Dropdown */}
              <select
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                value={fileType}
                onChange={(e) => setFileType(e.target.value)}
              >
                <option value="">Select File Type</option>
                <option value="Personal Document">Personal Document</option>
                <option value="Email Attachment">Email Attachment</option>
                <option value="DICOM File">DICOM File</option>
              </select>

              {/* Buttons */}
              <div className="flex justify-end gap-2">
                <button
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={handleUpload}
                >
                  <FaUpload className="inline-block mr-1" />
                  Upload
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Documents;
