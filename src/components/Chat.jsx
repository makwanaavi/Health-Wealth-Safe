import React, { useState, useRef, useEffect } from "react";
import { IoLinkSharp, IoSend } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  // Send message handler
  const handleSend = () => {
    if (inputMessage.trim() === "") return;
    setMessages((prev) => [
      ...prev,
      {
        type: "text",
        content: inputMessage,
        user: "Raj Yadav",
        time: new Date().toLocaleString(),
      },
    ]);
    setInputMessage("");
  };

  // Keyboard event: send on Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  // Clear messages and input
  const handleClear = () => {
    // setMessages([]);
    setInputMessage("");
  };

  // Handle file upload
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMessages((prev) => [
        ...prev,
        {
          type: "file",
          content: `Uploaded: ${file.name}`,
          user: "Raj Yadav",
          time: new Date().toLocaleString(),
        },
      ]);
    }
    // Reset file input so same file can be uploaded again if needed
    e.target.value = "";
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full h-[700px] p-2 bg-gray-100">
      <div className="bg-blue-100 rounded shadow-md h-full flex flex-col">
        <div className="p-3 text-[#3699FF] font-semibold">Chat Panel</div>
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-white">
          <div className="flex flex-col gap-4">
            {messages.map((msg, idx) => (
              <div key={idx} className="flex flex-col items-end">
                <span className="text-xs text-gray-600 font-semibold mb-1">
                  {msg.user}
                </span>
                <div className="bg-[#3699FF] text-white px-4 py-2 rounded-lg max-w-xs text-sm shadow">
                  {msg.content}
                </div>
                <span className="text-[11px] text-gray-400 mt-1">
                  {msg.time}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
        {/* Input Section */}
        <div className="p-3 flex gap-2 items-center bg-white">
          <div className="relative w-full">
            <input
              type="text"
              id="messageInput"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              className={`peer w-full border-b border-gray-500 px-2 pt-6 pb-2 text-sm bg-transparent focus:outline-none focus:border-blue-500`}
              placeholder=" "
            />
            <label
              htmlFor="messageInput"
              className={`absolute left-2 top-2 text-gray-500 text-sm transition-all duration-200 
        peer-placeholder-shown:top-4 
        peer-placeholder-shown:text-base 
        peer-placeholder-shown:text-gray-400 
        peer-focus:top-2 
        peer-focus:text-sm 
        peer-focus:text-blue-500`}
            >
              Type Message...
            </label>
          </div>
          {/* Hidden file input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleUpload}
            className="hidden"
          />
          <button
            type="button"
            className="bg-[#3699FF] flex items-center gap-2 text-white px-4 py-2 rounded text-sm"
            title="Upload File"
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
          >
            <IoLinkSharp className="w-4 h-4" />
            Upload
          </button>
          <button
            onClick={handleClear}
            className="bg-[#3699FF] flex items-center gap-2 text-white px-4 py-2 rounded text-sm"
          >
            <MdDelete className="w-4 h-4" />
            Clear
          </button>
          <button
            onClick={handleSend}
            className="bg-[#3699FF] flex items-center gap-2 text-white px-4 py-2 rounded text-sm"
          >
            <IoSend className="w-4 h-4" />
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
