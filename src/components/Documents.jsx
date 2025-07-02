import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";

const Documents = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileType, setFileType] = useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile && fileType) {
      alert(`📁 Uploaded: ${selectedFile.name} as ${fileType}`);
      // Yaha API ya logic lagao file upload ka
      setShowModal(false);
      setSelectedFile(null);
      setFileType("");
    } else {
      alert("⚠️ Please select a file and file type");
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
        {/* Upload Button */}

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
