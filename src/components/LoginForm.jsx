import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const LoginForm = ({ t }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="w-full max-w-md mx-auto space-y-4">
      <input
        type="text"
        placeholder={t.username}
        className="w-full rounded focus:outline-none"
      />
      <hr />
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={t.password}
          className="w-full rounded focus:outline-none"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-3 flex items-center text-gray-500"
        >
          {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
        </button>
      </div>
      <hr />
      <div className="text-right">
        <a href="#" className="text-sm text-blue-500 hover:underline">
          {t.forgot}
        </a>
      </div>
      <div className="flex gap-30  justify-between items-center mx-20 mt-10">
        <button
          className="py-2 bg-gray-300 w-30  text-white rounded px-3 text-sm"
          disabled
        >
          {t.login}
        </button>
        <button className="py-2 bg-blue-500 w-30 text-white rounded hover:bg-blue-600 px-3 text-sm">
          {t.signup}
        </button>
      </div>

      <p className="text-sm text-start">
        {t.dontHave}{" "}
        <a href="#" className="text-blue-600 hover:underline">
          {t.register}
        </a>
      </p>
      <p className="text-sm text-start text-blue-500">
        <a href="#">{t.manageData}</a>
      </p>
      <div className="flex items-center mb-10">
        <img
          src="/appstore.png"
          alt="App Store"
          className="h-40 w-125 cursor-pointer"
        />
        <img
          src="/googleplay.png"
          alt="Google Play"
          className="h-30 w-125 cursor-pointer"
        />
      </div>
      <p className="text-xs text-center text-gray-500 mt-6">
        {t.copyright}
        <br />
        <br />
        <br />
        {t.version}
      </p>
    </form>
  );
};

export default LoginForm;
