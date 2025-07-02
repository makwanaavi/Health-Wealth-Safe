import React, { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoMdAdd, IoMdRefresh } from "react-icons/io";
import { LuArrowLeftToLine, LuArrowRightToLine } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { Rnd } from "react-rnd";

const Devices = () => {
  const [card1Position, setCard1Position] = useState({ x: 0, y: 0 });

  const card1Ref = useRef();

  // Collision detection

  return (
    <div>
      <Rnd
        ref={card1Ref}
        size={{ width: "90%", height: "50%" }}
        position={card1Position}
        onDragStop={(e, d) => setCard1Position({ x: d.x, y: d.y })}
        className="rounded-lg shadow-md bg-white border border-gray-200"
        dragHandleClassName="drag-header"
        enableResizing={false}
      >
        <div className="h-200 w-full overflow-hidden flex flex-col">
          <div className="bg-blue-50 drag-header text-[#3699FF] p-3 font-medium cursor-move">
            Devices
          </div>
          <div className="flex items-center justify-center gap-4 p-4">
            <input
              type="text"
              placeholder="Search"
              className="w-45 h-10 border border-gray-400 p-2"
            />
            <button onClick={() => window.location.reload()} title="Refresh">
              <IoMdRefresh className="h-5 w-5" />
            </button>
            <RxCross2 className="h-5 w-5" />
            <IoMdAdd className="h-5 w-5" />
          </div>
          <div className=" border-b border-gray-400 p-3 mx-1 text-[#3699FF] font-medium rounded-md mb-2">
            <ul className="flex items-center justify-between mx-4 gap-4">
              <li className="text-gray-500 text-sm w-[50px]">S.No.</li>
              <li className="text-gray-500 text-sm w-[150px]">File Name</li>
              <li className="text-gray-500 text-sm w-[150px]">Document Type</li>
            </ul>
          </div>
          <h2 className="text-gray-400 text-center">No records</h2>
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
        </div>
      </Rnd>
    </div>
  );
};

export default Devices;
