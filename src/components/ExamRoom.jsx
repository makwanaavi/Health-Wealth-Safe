import { FaBars } from "react-icons/fa";

const ExamRoom = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Top Navigation Bar */}
      <header className="bg-gray-200 shadow px-4 py-3 flex justify-between items-center">
        <FaBars className="text-[#3699FF] text-xl cursor-pointer" />
        <h1 className="text-center text-2xl font-normal text-gray-800">
          --- Exam Room ---
        </h1>
        <FaBars className="invisible md:visible text-[#3699FF] text-xl cursor-pointer" />
      </header>

      {/* Content Area */}
      <main className="flex-1 flex items-center justify-center text-center px-4">
        <p className="text-gray-500 text-lg">
          You haven't join any room please join room to start video call.
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-[#e7e7e7] py-4 text-sm text-center text-black">
        Having trouble with video call? Call us at <a>+1 (877) 581-8810</a>{" "}
        (Available 24/7)
      </footer>
    </div>
  );
};

export default ExamRoom;
