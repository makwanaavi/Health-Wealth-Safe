// import { Fullscreen } from "lucide-react";
// import React, { useState } from "react";
// import { FaAngleLeft, FaAngleRight, FaUpload } from "react-icons/fa";
// import { IoMdAdd, IoMdRefresh } from "react-icons/io";
// import { LuArrowLeftToLine, LuArrowRightToLine } from "react-icons/lu";
// import { RxCross2 } from "react-icons/rx";
// import { Rnd } from "react-rnd";

// const HealthRecords = () => {
//   const [showModal] = useState(false);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [fileType, setFileType] = useState("");

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   return (
//     <>
//       <button className="flex items-center gap-2 px-4 py-2 mb-6 border border-blue-400 text-blue-500 rounded hover:bg-blue-100">
//         Request Medical Records
//       </button>
//       <div className="min-h-screen bg-[#e1e3eb] p-6">
//         <div style={{ minHeight: 1200 }} className="flex ">
//           <Rnd
//             default={{
//               x: 0,
//               y: 0,
//               // width: 100,
//               // height: 550,
//             }}

//             className="rounded-lg shadow-md bg-white border border-gray-200 w-full"
//             dragHandleClassName="drag-header"
//           >
//             <div className="h-full w-full overflow-hidden flex flex-col">
//               {/* Header */}  

//               <div className="bg-blue-50 drag-header text-[#3699FF] p-3 font-medium mb-2 cursor-move">
//                 Medications
//               </div>
//               <div className=" flex items-center justify-center gap-4">
//                 <input
//                   type="text"
//                   placeholder="Seach"
//                   className="w-45 h-10 m-6 border border-gray-400 p-2"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => window.location.reload()}
//                   className="focus:outline-none"
//                   title="Refresh"
//                 >
//                   <IoMdRefresh className="h-5 w-5" />
//                 </button>
//                 <RxCross2 className="h-5 w-5" />
//                 <IoMdAdd className="h-5 w-5" />
//               </div>

//               {/* Table Head */}
//               <div className="bg-blue-50 p-3 mx-1 text-[#3699FF] font-medium rounded-md mb-2">
//                 <ul className="flex items-center justify-between mx-4 gap-4 cursor-pointer">
//                   <li className="text-gray-500 text-sm w-[50px]">S.No.</li>
//                   <li className="text-gray-500 text-sm w-[150px]">File Name</li>
//                   <li className="text-gray-500 text-sm w-[150px]">
//                     Document Type
//                   </li>
//                   <li className="text-gray-500 text-sm w-[150px]">
//                     Uploaded File
//                   </li>
//                   <li className="text-gray-500 text-sm w-[150px]">
//                     Uploaded Date
//                   </li>
//                   <li className="text-gray-500 text-sm w-[80px]">Action</li>
//                 </ul>
//               </div>
//               <div className="flex items-center justify-end top-0 gap-2 p-4 text-sm text-gray-600">
//                 <span>Items per page:</span>
//                 <select className="border-none outline-none text-[#3699FF] underline bg-transparent">
//                   <option>5</option>
//                   <option>10</option>
//                   <option>20</option>
//                 </select>
//                 <span>0 of 0</span>
//                 <button disabled className="text-gray-300">
//                   <LuArrowLeftToLine className="w-5 h-5" />
//                 </button>
//                 <button disabled className="text-gray-300">
//                   <FaAngleLeft className="w-5 h-5" />
//                 </button>
//                 <button disabled className="text-gray-300">
//                   <FaAngleRight className="w-5 h-5" />
//                 </button>
//                 <button disabled className="text-gray-300">
//                   <LuArrowRightToLine className="w-5 h-5" />
//                 </button>
//               </div>

//               {/* Empty State */}
//               <div className="flex-1 flex items-center justify-center mb-24">
//                 <h2 className="text-gray-400 text-lg">No records</h2>
//               </div>

//             </div>
//           </Rnd>
//           <Rnd
//             default={{
//               x: 0,
//               y: 0,
//               width: 1000,
//               height: 550,
//             }}
//             className="rounded-lg shadow-md bg-white border border-gray-200"
//             dragHandleClassName="drag-header"
//           >
//             <div className="h-full w-full overflow-hidden flex flex-col">
//               {/* Header */}

//               <div className="bg-blue-50 drag-header text-[#3699FF] p-3 font-medium mb-2 cursor-move">
//                 Procedures
//               </div>
//               <div className=" flex items-center justify-center gap-4">
//                 <input
//                   type="text"
//                   placeholder="Seach"
//                   className="w-45 h-10 m-6 border border-gray-400 p-2"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => window.location.reload()}
//                   className="focus:outline-none"
//                   title="Refresh"
//                 >
//                   <IoMdRefresh className="h-5 w-5" />
//                 </button>
//                 <RxCross2 className="h-5 w-5" />
//                 <IoMdAdd className="h-5 w-5" />
//               </div>

//               {/* Table Head */}
//               <div className="bg-blue-50 p-3 mx-1 text-[#3699FF] font-medium rounded-md mb-2">
//                 <ul className="flex items-center justify-between mx-4 gap-4 cursor-pointer">
//                   <li className="text-gray-500 text-sm w-[50px]">S.No.</li>
//                   <li className="text-gray-500 text-sm w-[150px]">File Name</li>
//                   <li className="text-gray-500 text-sm w-[150px]">
//                     Document Type
//                   </li>
//                   <li className="text-gray-500 text-sm w-[150px]">
//                     Uploaded File
//                   </li>
//                   <li className="text-gray-500 text-sm w-[150px]">
//                     Uploaded Date
//                   </li>
//                   <li className="text-gray-500 text-sm w-[80px]">Action</li>
//                 </ul>
//               </div>
//               <div className="flex items-center justify-end top-0 gap-2 p-4 text-sm text-gray-600">
//                 <span>Items per page:</span>
//                 <select className="border-none outline-none text-[#3699FF] underline bg-transparent">
//                   <option>5</option>
//                   <option>10</option>
//                   <option>20</option>
//                 </select>
//                 <span>0 of 0</span>
//                 <button disabled className="text-gray-300">
//                   <LuArrowLeftToLine className="w-5 h-5" />
//                 </button>
//                 <button disabled className="text-gray-300">
//                   <FaAngleLeft className="w-5 h-5" />
//                 </button>
//                 <button disabled className="text-gray-300">
//                   <FaAngleRight className="w-5 h-5" />
//                 </button>
//                 <button disabled className="text-gray-300">
//                   <LuArrowRightToLine className="w-5 h-5" />
//                 </button>
//               </div>

//               {/* Empty State */}
//               <div className="flex-1 flex items-center justify-center mb-24">
//                 <h2 className="text-gray-400 text-lg">No records</h2>
//               </div>

//               {/* Pagination */}
//             </div>
//           </Rnd>
//         </div>
//        \
//       </div>
//     </>
//   );
// };

// export default HealthRecords;


import { LuArrowLeftToLine, LuArrowRightToLine } from "react-icons/lu";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoMdAdd, IoMdRefresh } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import React, { useRef, useState } from "react";
import { Rnd } from "react-rnd";

const HealthRecords = () => {
  const [card1Position, setCard1Position] = useState({ x: 0, y: 0 });
  const [card2Position, setCard2Position] = useState({ x: 200, y: 100 });

  const card1Ref = useRef();
  const card2Ref = useRef();

  // Collision detection
  const isOverlapping = (rect1, rect2) => {
    return !(
      rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
    );
  };

  const handleCard2DragStop = (e, d) => {
    const card1Rect = card1Ref.current.resizableElement.current.getBoundingClientRect();
    const card2Rect = card2Ref.current.resizableElement.current.getBoundingClientRect();

    if (isOverlapping(card1Rect, card2Rect)) {
      // Adjust position if overlapping
      setCard2Position({ x: d.x + 100, y: d.y + 100 });
    } else {
      setCard2Position({ x: d.x, y: d.y });
    }
  };

  return (
    <div className="min-h-screen bg-[#e1e3eb] p-6">
      <div style={{ minHeight: 1200, position: "relative" }} className="w-full h-full">
        {/* Card 1 - Full width & height */}
        <Rnd
          ref={card1Ref}
          size={{ width: "50%", height: "50%" }}
          position={card1Position}
          onDragStop={(e, d) => setCard1Position({ x: d.x, y: d.y })}
          className="rounded-lg shadow-md bg-white border border-gray-200"
          dragHandleClassName="drag-header"
          enableResizing={false}
        >
          <div className="h-200 w-full overflow-hidden flex flex-col scale-[0.95]">
            <div className="bg-blue-50 drag-header text-[#3699FF] p-3 font-medium cursor-move">Medications</div>
            <div className="flex items-center justify-center gap-4 p-4">
              <input type="text" placeholder="Search" className="w-45 h-10 border border-gray-400 p-2" />
              <button onClick={() => window.location.reload()} title="Refresh">
                <IoMdRefresh className="h-5 w-5" />
              </button>
              <RxCross2 className="h-5 w-5" />
              <IoMdAdd className="h-5 w-5" />
            </div>
            <div className="bg-blue-50 p-3 mx-1 text-[#3699FF] font-medium rounded-md mb-2">
              <ul className="flex items-center justify-between mx-4 gap-4">
                <li className="text-gray-500 text-sm w-[50px]">S.No.</li>
                <li className="text-gray-500 text-sm w-[150px]">File Name</li>
                <li className="text-gray-500 text-sm w-[150px]">Document Type</li>
                <li className="text-gray-500 text-sm w-[150px]">Uploaded File</li>
                <li className="text-gray-500 text-sm w-[150px]">Uploaded Date</li>
                <li className="text-gray-500 text-sm w-[80px]">Action</li>
              </ul>
            </div>
            <div className="flex items-center justify-end gap-2 p-4 text-sm text-gray-600">
              <span>Items per page:</span>
              <select className="text-[#3699FF] underline bg-transparent">
                <option>5</option>
                <option>10</option>
                <option>20</option>
              </select>
              <span>0 of 0</span>
              <LuArrowLeftToLine className="w-5 h-5 text-gray-300" />
              <FaAngleLeft className="w-5 h-5 text-gray-300" />
              <FaAngleRight className="w-5 h-5 text-gray-300" />
              <LuArrowRightToLine className="w-5 h-5 text-gray-300" />
            </div>
            <div className="flex-1 flex items-center justify-center mb-24">
              <h2 className="text-gray-400 text-lg">No records</h2>
            </div>
          </div>
        </Rnd>

        {/* Card 2 - Drag & auto position fix */}
        <Rnd
          ref={card2Ref}
          size={{ width: "50%", height: "50%" }}
          position={card2Position}
          onDragStop={handleCard2DragStop}
          className="rounded-lg shadow-md bg-white border border-gray-200 absolute"
          dragHandleClassName="drag-header"
        >
          <div className="h-full w-full overflow-hidden flex flex-col">
            <div className="bg-blue-50 drag-header text-[#3699FF] p-3 font-medium cursor-move">Procedures</div>
            <div className="flex items-center justify-center gap-4 p-4">
              <input type="text" placeholder="Search" className="w-45 h-10 border border-gray-400 p-2" />
              <button onClick={() => window.location.reload()} title="Refresh">
                <IoMdRefresh className="h-5 w-5" />
              </button>
              <RxCross2 className="h-5 w-5" />
              <IoMdAdd className="h-5 w-5" />
            </div>
            <div className="bg-blue-50 p-3 mx-1 text-[#3699FF] font-medium rounded-md mb-2">
              <ul className="flex items-center justify-between mx-4 gap-4">
                <li className="text-gray-500 text-sm w-[50px]">S.No.</li>
                <li className="text-gray-500 text-sm w-[150px]">File Name</li>
                <li className="text-gray-500 text-sm w-[150px]">Document Type</li>
                <li className="text-gray-500 text-sm w-[150px]">Uploaded File</li>
                <li className="text-gray-500 text-sm w-[150px]">Uploaded Date</li>
                <li className="text-gray-500 text-sm w-[80px]">Action</li>
              </ul>
            </div>
            <div className="flex-1 flex items-center justify-center mb-24">
              <h2 className="text-gray-400 text-lg">No records</h2>
            </div>
          </div>
        </Rnd>

        
        
      </div>
    </div>
  );
};

export default HealthRecords;
