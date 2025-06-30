import React from "react";

const LoadingScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 bg-white rounded-full animate-ping"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
