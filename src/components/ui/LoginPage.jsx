import { IoMdEye } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { TbMessage2Filled } from "react-icons/tb";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen bg-white relative">
      <div className="w-1/2 relative hidden md:block overflow-hidden">
        <img
          src="/loginImage.png"
          alt="Elderly person drinking coffee"
          className="w-150 h-full object-cover"
        />

        <div className="flex justify-end items-center gap-4 px-8 pt-6">
          <div className="flex items-center gap-2 bg-blue-100 rounded-full px-3 py-1 text-blue-500 text-sm">
            <span role="img" aria-label="phone">
              <IoCall />
            </span>
            Call +1 (877) 581-8810{" "}
            <span className="text-xs text-gray-500">(Available 24/7)</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-100 rounded-full px-3 py-1 text-blue-500 text-sm">
            <span role="img" aria-label="email">
              <TbMessage2Filled />
            </span>
            info@healthwealthsafe.com
          </div>
        </div>
        {/* Overlay shape */}
        <div className="relative top-0 left-00 w-full h-full bg-white/0 pointer-events-none" />

        {/* Overlayed text */}
        <div className="absolute top-0 left-135 w-full h-full flex flex-col justify-center items-start pl-16">
          <h2 className="text-4xl font-bold text-blue-500 mb-2">
            BETTER PATIENT
          </h2>
          <h3 className="text-3xl font-extrabold text-gray-700 mb-2">
            ENGAGEMENT
          </h3>
          <p className="text-gray-600 mb-1">
            Engage with your doctor in-between office visits
          </p>
          <a href="#" className="text-blue-500 underline text-base">
            Read more
          </a>
          
        </div>
       
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-between bg-blue-100">
      
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <div className="flex justify-center mb-4">
              <img src="/logo_latest.png" alt="Logo" className="w-45" />
            </div>
            <h2 className="text-center text-gray-700 font-semibold mb-6">
              Sign In To Health Wealth Safe
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="User Name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-500"
                >
                  <IoMdEye />
                </button>
              </div>
              <div className="text-right">
                <a href="#" className="text-sm text-blue-500 hover:underline">
                  Forgot Username or Password?
                </a>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  className="w-full py-2 bg-gray-300 text-white rounded cursor-not-allowed"
                  disabled
                >
                  Login
                </button>
                <button
                  type="button"
                  className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Sign Up
                </button>
              </div>
              <p className="text-sm text-center">
                Don’t have an account?{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Register
                </a>
              </p>
              <p className="text-sm text-center text-blue-500">
                <a href="#">How do I manage my data?</a>
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <img src="/appstore.png" alt="App Store" className="h-35" />
                <img src="/googleplay.png" alt="Google Play" className="h-35" />
              </div>
            </form>
            <p className="text-xs text-center text-gray-500 mt-6">
              © 2019 - 2025 - Health Wealth Safe Portal™
              <br />
              v7.8
            </p>
          </div>
        </div>

        {/* Footer */}
       
      </div>
    </div>
  );
};

export default LoginPage;
