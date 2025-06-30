import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

const LoginForm = ({ t }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const canLogin = username && password;

  const handleLogin = (e) => {
    e.preventDefault();
    if (canLogin) {
      localStorage.setItem("username", JSON.stringify(username));
      localStorage.setItem("password", JSON.stringify(password));
      setShowAlert(true);
    }
  };

  const handleAgreeAndContinue = () => {
    setShowAlert(false);
    setTimeout(() => {
      navigate("/dashboard");
    }, 3000);
  };

  return (
    <form className="w-full max-w-md mx-auto space-y-4" onSubmit={handleLogin}>
      <input
        type="text"
        placeholder={t.username}
        className="w-full rounded focus:outline-none"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <hr />
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={t.password}
          className="w-full rounded focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
      <div className="flex gap-4 justify-between items-center mx-20 mt-10">
        <button
          type="submit"
          className={`py-2 w-30 text-white rounded px-3 text-sm flex items-center justify-center gap-2 ${
            canLogin ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300"
          }`}
          disabled={!canLogin}
        >
          {t.login}
        </button>

        <Link
          to="/sign-up"
          type="submit"
          className="py-2 bg-blue-500 w-30 text-center text-white rounded hover:bg-blue-600 px-3 text-sm"
        >
          {t.signup}
        </Link>
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
      <div className="flex items-center mb-10 text-start">
        <a
          href="https://apps.apple.com/us/app/health-wealth-safe/id1432361018"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/appstore.png"
            alt="App Store"
            className="h-40 w-125 cursor-pointer"
          />
        </a>

        <a
          href="https://play.google.com/store/apps/details?id=com.ephibank&hl=en_US&gl=US&pli=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/googleplay.png"
            alt="Google Play"
            className="h-30 w-125 cursor-pointer"
          />
        </a>
      </div>
      <p className="relative top-20  text-xs text-center text-gray-500">
        {t.copyright}
        <br />
        <br />
        {t.version}
      </p>

      {/* Alert Popup */}
      {showAlert && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md max-w-md w-full text-center">
            <p className="text-sm text-gray-800">
              If you think you or someone you care for is having a medical or
              mental <br />
              health emergency, call 911 or go to the nearest hospital. Do not
              attempt to access emergency care through this website.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleAgreeAndContinue}
              >
                Agree and Continue
              </button>
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setShowAlert(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default LoginForm;
