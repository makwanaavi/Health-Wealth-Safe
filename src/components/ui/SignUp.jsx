import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "../PhoneInput";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    mobile: "",
    email: "",
  });
  const [agreements, setAgreements] = useState({
    newsletter: false,
    terms: false,
  });
  const [errors, setErrors] = useState({
    mobile: false,
    terms: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate mobile number on change
    if (name === "mobile") {
      setErrors({
        ...errors,
        mobile: !/^\d+$/.test(value) || value.length < 10,
      });
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setAgreements({
      ...agreements,
      [name]: checked,
    });

    // Validate terms checkbox
    if (name === "terms") {
      setErrors({
        ...errors,
        terms: !checked,
      });
    }
  };

  const isFormValid = () => {
    return (
      formData.firstName.trim() &&
      formData.lastName.trim() &&
      formData.mobile.trim() &&
      formData.email.trim() &&
      !errors.mobile &&
      agreements.terms
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      localStorage.setItem("signupData", JSON.stringify({ ...formData, ...agreements }));
      // In a real app, you would send data to your backend here
      navigate("/dashboard");
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/sign-up.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-500 to-blue-400 opacity-70 backdrop-blur-sm z-0"></div>
      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="text-center text-4xl font-extrabold text-white mb-4 drop-shadow">
            Welcome to{" "}
            <span className="text-green-400">Health Wealth Safe</span>
          </h1>
          <p className="text-center text-base font-normal text-white mb-8 drop-shadow">
            Create a HWS Bank Account to{" "}
            <span className="text-green-200 font-semibold">
              TRACK, MONITOR, MANAGE, and STORE
            </span>
            your health all in one place.
          </p>
        </div>
        <div className="relative w-full max-w-2xl mx-auto">
          <div
            className="rounded-2xl bg-white shadow-2xl px-10 py-10 w-full"
            style={{ minHeight: 540 }}
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-400 focus:border-green-400 text-base"
              />
              <input
                id="middleName"
                name="middleName"
                type="text"
                placeholder="Middle Name"
                value={formData.middleName}
                onChange={handleInputChange}
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-400 focus:border-green-400 text-base"
              />
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-400 focus:border-green-400 text-base"
              />
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-400 focus:border-green-400 text-base"
              />
              {/* Phone Api*/}
              <PhoneInput
                formData={formData}
                errors={errors}
                handleInputChange={handleInputChange}
              />
              <div className="flex items-center mt-2">
                <input
                  id="newsletter"
                  name="newsletter"
                  type="checkbox"
                  checked={agreements.newsletter}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-green-500 border-gray-300 rounded focus:ring-green-400"
                />
                <label
                  htmlFor="newsletter"
                  className="ml-2 block text-sm text-gray-700"
                >
                  I would like to receive newsletters from HWS about new
                  products and features that will help me keep track of my
                  health.
                </label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  checked={agreements.terms}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-green-500 border-gray-300 rounded focus:ring-green-400"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-700"
                >
                  I agree to HWS{" "}
                  <a href="#" className="text-blue-600 underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 underline">
                    Privacy Policy
                  </a>
                </label>
              </div>
              {errors.terms && (
                <p className="mt-1 text-sm text-red-600 font-medium">
                  You need to accept this agreement
                </p>
              )}
              <div className="flex justify-between items-center mt-6">
                <Link
                  to="/"
                  className="text-blue-700 text-sm underline hover:text-blue-900"
                >
                  back
                </Link>
                <button
                  type="submit"
                  disabled={!isFormValid()}
                  className={`rounded-full px-10 py-2 text-base font-semibold shadow ${
                    isFormValid()
                      ? "bg-green-400 text-white hover:bg-green-500"
                      : "bg-green-200 text-white cursor-not-allowed"
                  }`}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
