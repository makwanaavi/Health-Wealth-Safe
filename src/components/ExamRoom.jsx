import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { AiOutlinePaperClip, AiOutlineDelete } from "react-icons/ai";
import { IoMdRefresh } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const ExamRoom = () => {
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    const newMessage = {
      text: input,
      sender: "Raj Yadav",
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col bg-[#f5f5f5]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.4, type: "spring" }}
    >
      {/* Header */}
      <header className="bg-gray-200 px-4 py-3 flex justify-between items-center shadow">
        <FaBars
          className="text-[#3699FF] text-xl cursor-pointer"
          onClick={() => setLeftOpen(!leftOpen)}
        />
        <h1 className="text-xl font-medium text-gray-800">--- Exam Room ---</h1>
        <FaBars
          className="text-[#3699FF] text-xl cursor-pointer"
          onClick={() => setRightOpen(!rightOpen)}
        />
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <AnimatePresence>
          {leftOpen && (
            <motion.aside
              className=" bg-white flex flex-col w-100"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              <div className="flex bg-gray-200 justify-between items-center">
                <div className="p-4 font-semibold text-gray-700 ">Rooms</div>
                <IoMdRefresh className="mr-3 w-5 h-5" />
              </div>
              <div className="flex-1 overflow-y-auto px-4 space-y-3 py-2">
                {[
                  "6280",
                  "1434",
                  "2126",
                  "3640",
                  "4092",
                  "2673",
                  "9013",
                  "4599",
                  "2227",
                ].map((room) => (
                  <div
                    key={room}
                    className="flex justify-between items-center text-sm"
                  >
                    <span>{room} - Raj</span>
                    <button className=" px-4 py-2 text-sm text-blue-600 rounded border border-gray-200">
                      JOIN
                    </button>
                  </div>
                ))}
              </div>
              <div className=" p-4 mb-80 text-center text-sm text-gray-600 bg-[#F5F5F5]">
                Room Users
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Center Content */}
        <main className="flex-1 flex items-center justify-center px-4">
          <p className="text-gray-600 text-lg text-center">
            You haven't join any room please join room to start video call.
          </p>
        </main>

        {/* Right Sidebar (Chat Panel) */}
        <AnimatePresence>
          {rightOpen && (
            <motion.aside
              className="w-100 bg-white  flex flex-col"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              {/* Header */}
              <div className="p-3 bg-[#E5E7EB]">
                <div className="text-md font-semibold text-gray-800">
                  Chat with Staff
                </div>
              </div>
              <div className="text-xl text-[#3699FF] bg-[#E1F0FF] p-4">
                Chat Panel
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
                {messages.map((msg, idx) => (
                  <div key={idx} className="text-right">
                    <div className="text-xs text-gray-600 font-medium">
                      {msg.sender}
                    </div>
                    <div className="inline-block bg-[#3699FF] text-white px-4 py-2 rounded text-sm max-w-[75%]">
                      {msg.text}
                    </div>
                    <div className="text-[11px] text-gray-500 mt-1">
                      {msg.date}, {msg.time}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Box */}
              <div className="p-3 flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Type Message"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  className="flex-1 border-b rounded px-3 py-2 text-sm outline-none"
                />
                {/* Paperclip for file attach */}
                <label className="cursor-pointer">
                  <AiOutlinePaperClip className="text-[#3699FF] text-lg" />
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      if (e.target.files.length > 0) {
                        alert(`Attached: ${e.target.files[0].name}`);
                        e.target.value = "";
                      }
                    }}
                  />
                </label>
                {/* Delete only input value */}
                <AiOutlineDelete
                  className="text-[#3699FF] text-lg cursor-pointer"
                  onClick={() => setInput("")}
                  title="Clear input"
                />
                <button onClick={sendMessage}>
                  <FiSend className="text-[#3699FF] text-xl cursor-pointer" />
                </button>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="bg-[#e7e7e7] py-3 text-sm text-center text-black">
        Having trouble with video call? Call us at <a>+1 (877) 581-8810</a>{" "}
        (Available 24/7)
      </footer>
    </motion.div>
  );
};

export default ExamRoom;
