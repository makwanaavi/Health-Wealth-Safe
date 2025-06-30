import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#0073a8]">
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Outer glowing blue ring */}
        <div className="absolute w-32 h-32 rounded-full bg-blue-500 opacity-30 blur-xl" />

        {/* Inner animated white circle with glow */}
        <div className="w-12 h-12 bg-white rounded-full animate-pulseScale shadow-xl shadow-white/30" />
      </div>
    </div>
  );
};

export default LoadingScreen;
