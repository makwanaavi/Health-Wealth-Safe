import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import countryCodes from "../CountryCodes.json";

const SignUp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    mobile: "",
    email: "",
    // Step 2 fields:
    username: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    gender: "",
  });

  const [agreements, setAgreements] = useState({
    newsletter: false,
    terms: false,
  });
  const [errors, setErrors] = useState({
    mobile: false,
    terms: false,
    passwordMatch: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [countryCode, setCountryCode] = useState("+91"); // Default to India

  // Helper to get min/max length for selected country code
  const getMobileLength = (code) => {
    // You can expand this mapping as needed for more accurate validation
    // Example: { "+91": 10, "+1": 10, "+44": 10, ... }
    // Default to 10 if not found
    const map = {
      "+91": 10, // India
      "+1": 10, // US/Canada
      "+44": 10, // UK
      "+81": 10, // Japan
      "+61": 9, // Australia
      "+971": 9, // UAE
      "+880": 10, // Bangladesh
      "+92": 10, // Pakistan
      "+86": 11, // China
    };
    return map[code] || 10;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    // Remove spaces for mobile input
    if (name === "mobile") {
      // newValue = value.replace(/\s+/g, "");
    }
    setFormData({
      ...formData,
      [name]: newValue,
    });

    // Validate mobile number on change
    if (name === "mobile") {
      const requiredLength = getMobileLength(countryCode);
      setErrors({
        ...errors,
        mobile: !/^\d+$/.test(newValue) || newValue.length !== requiredLength,
      });
    }
    // Validate password match
    if (name === "confirmPassword" || name === "password") {
      setErrors({
        ...errors,
        passwordMatch:
          name === "confirmPassword"
            ? newValue !== formData.password
            : formData.confirmPassword !== newValue,
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

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
    // Optionally, clear mobile error when changing country
    setErrors({
      ...errors,
      mobile: false,
    });
    // Optionally, clear mobile input if length doesn't match new country
    // setFormData({ ...formData, mobile: "" });
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

  const isAccountFormValid = () => {
    return (
      formData.username.trim() &&
      formData.password &&
      formData.confirmPassword &&
      formData.password === formData.confirmPassword &&
      formData.birthDate &&
      formData.gender
    );
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      setStep(2);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAccountFormValid()) {
      localStorage.setItem(
        "signupData",
        JSON.stringify({ ...formData, ...agreements })
      );
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
            {step === 1 && (
              <form className="space-y-4" onSubmit={handleNext}>
                <h2 className="text-xl font-bold text-center mb-6 text-gray-800">
                  Account Information
                </h2>
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
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={handleCountryCodeChange}
                    className="border border-gray-300 rounded-md  px-2 focus:outline-none focus:ring-green-400 focus:border-green-400 text-base"
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.dial_code}>
                        {country.code} {country.dial_code}
                      </option>
                    ))}
                  </select>
                  <input
                    id="mobile"
                    name="mobile"
                    type="text"
                    required
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/\s+/g, "");
                    }}
                    maxLength={getMobileLength(countryCode)}
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-400 focus:border-green-400 text-base"
                  />
                  {/* If you use PhoneInput component, update it similarly */}
                  {/* <PhoneInput
                    formData={formData}
                    errors={errors}
                    handleInputChange={handleInputChange}
                  /> */}
                </div>
                {errors.mobile && (
                  <p className="text-red-500 text-sm">
                    Mobile number must be {getMobileLength(countryCode)} digits
                    and contain only numbers.
                  </p>
                )}
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
            )}
            {step === 2 && (
              <form
                onSubmit={handleSubmit}
                // className="z-10 w-full max-w-md p-8 rounded-2xl shadow-xl"
              >
                <h2 className="text-xl font-bold text-center px-12 mb-6 text-gray-800">
                  Account Information
                </h2>
                <input
                  type="text"
                  name="username"
                  placeholder="Username *"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <div className="relative mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password *"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-3 right-3 cursor-pointer text-gray-500"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </span>
                </div>
                <div className="relative mb-4">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password *"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                  <span
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute top-3 right-3 cursor-pointer text-gray-500"
                  >
                    {showConfirmPassword ? "🙈" : "👁️"}
                  </span>
                </div>
                {formData.confirmPassword &&
                  formData.password !== formData.confirmPassword && (
                    <p className="text-red-500 text-sm mb-2">
                      Passwords do not match
                    </p>
                  )}
                {/* Birth Date field with visible label */}
                <input
                  type="text"
                  id="birthDate"
                  name="birthDate"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                  }}
                  placeholder="Birth Date *"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                >
                  <option value="">Gender *</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="text-sm text-blue-600 underline"
                  >
                    back
                  </button>
                  <button
                    type="submit"
                    disabled={!isAccountFormValid()}
                    className="bg-green-400 hover:bg-green-500 text-white font-semibold px-5 py-2 rounded-full transition"
                  >
                    Create Account
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
