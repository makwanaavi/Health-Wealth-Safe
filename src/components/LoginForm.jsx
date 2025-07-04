import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import ManageDataModal from "./ManageDataModal"; // <-- import your modal component

const LoginForm = ({ t }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showManageDataModal, setShowManageDataModal] = useState(false);
  const navigate = useNavigate();
  const canLogin = username && password;

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    if (canLogin) {
      setLoading(true);
      try {
        const res = await fetch(
          "https://api.healthwealthsafe.net/api/web/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
          }
        );
        const data = await res.json();
        if (res.ok) {
          localStorage.setItem(
            "token",
            (data.data && data.data.token) || data.token || ""
          );
          // Set persistent login flag
          localStorage.setItem("isLoggedIn", "true");
          // Extract user info from API response (data.data)
          const userData = data.data || data.user || data;
          localStorage.setItem(
            "loginData",
            JSON.stringify({
              firstName: userData.name
                ? userData.name.trim().split(" ")[1] || ""
                : "",
              lastName: userData.name
                ? userData.name.trim().split(" ")[2] || ""
                : "",
              email: userData.email || "",
              phone: userData.phone || "",
              username: userData.username || userData.usernme || username,
              mrn:
                userData.medical_record_no ||
                userData.username ||
                userData.usernme ||
                username,
              doctor: userData.doc_name || "",
            })
          );
          setShowAlert(true);
        } else {
          setError(data.message || "Login failed");
        }
        // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError("Network error");
      } finally {
        setLoading(false);
      }
    }
  };
  const handleAgreeAndContinue = () => {
    setShowAlert(false);
    navigate("/dashboard");
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
        <a href="#" className="text-sm text-[#3699FF] hover:underline">
          {t.forgot}
        </a>
      </div>
      {error && <div className="text-red-500 text-sm text-center">{error}</div>}
      <div className="flex gap-4 justify-between items-center mx-20 mt-10">
        <button
          type="submit"
          className={`py-2 w-30 text-white rounded px-3 text-sm flex items-center justify-center gap-2 ${
            canLogin ? "bg-[#3699FF] hover:bg-[#3699FF]/90" : "bg-gray-300"
          }`}
          disabled={!canLogin || loading}
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            t.login
          )}
        </button>

        <Link
          to="/sign-up"
          type="submit"
          className="py-2 bg-[#3699FF] w-30 text-center text-white rounded px-3 text-sm"
        >
          {t.signup}
        </Link>
      </div>

      <p className="text-sm text-start">
        {t.dontHave}{" "}
        <a href="#" className="text-[#3699FF] hover:underline">
          {t.register}
        </a>
      </p>
      <p className="text-sm text-start text-[#3699FF]">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setShowManageDataModal(true);
          }}
        >
          {t.manageData}
        </a>
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
        <div className="fixed inset-0 bg-[#0071B3]/40  flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md  w-150 text-center">
            <p className="text-base text-gray-800" style={{ margin: "12px" }}>
              If you think you or someone you care for is having a medical or
              mental <br />
              health emergency, call 911 or go to the nearest hospital. Do not
              attempt to access emergency care through this website.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <button
                className="px-4 py-2 bg-[#3699FF] text-white rounded hover:bg-[#3699FF]/80"
                onClick={handleAgreeAndContinue}
              >
                Agree and Continue
              </button>
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-[#3699FF] hover:text-white"
                onClick={() => setShowAlert(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showManageDataModal && (
        <ManageDataModal onClose={() => setShowManageDataModal(false)} />
      )}
    </form>
  );
};

export default LoginForm;
