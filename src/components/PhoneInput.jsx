import { useEffect, useState } from "react";

const PhoneInput = ({ formData, errors, handleInputChange }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [number, setNumber] = useState("");
  const [apiError, setApiError] = useState("");

  // Fetch country data from free API
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        const countryList = data
          .map((country) => {
            const code =
              country.idd?.root && country.idd?.suffixes
                ? country.idd.root + country.idd.suffixes[0]
                : null;

            return {
              name: country.name.common,
              code,
              flag: country.flags?.svg,
            };
          })
          .filter((country) => country.code !== null)
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountries(countryList);
        // Default India or first country
        setSelectedCountry(
          countryList.find((c) => c.code === "+91") || countryList[0]
        );
      });
  }, []);

  // Keep number in sync with formData.mobile (strip country code)
  useEffect(() => {
    if (selectedCountry) {
      const code = selectedCountry.code;
      if (formData.mobile.startsWith(code)) {
        setNumber(formData.mobile.slice(code.length));
      } else {
        setNumber(formData.mobile);
      }
    }
  }, [formData.mobile, selectedCountry]);

  // Check phone API when number changes and is valid
  useEffect(() => {
    if (
      selectedCountry &&
      number.length >= 10 &&
      /^\d+$/.test(number)
    ) {
      const phone = (selectedCountry.code || "") + number;
      fetch(`https://api.healthwealthsafe.net/api/checkPhone?phone=${encodeURIComponent(phone)}&userId=`)
        .then(res => res.json())
        .then(data => {
          if (data.exists) {
            setApiError("This phone number is already registered.");
          } else {
            setApiError("");
          }
        })
        .catch(() => setApiError("Could not verify phone number."));
    } else {
      setApiError("");
    }
  }, [number, selectedCountry]);

  const handleNumberChange = (e) => {
    setNumber(e.target.value.replace(/[^0-9]/g, ""));
    handleInputChange({ 
      target: {
        name: "mobile",
        value:
          (selectedCountry?.code || "") + e.target.value.replace(/[^0-9]/g, ""),
      },
    });
  };

  const handleCountryChange = (e) => {
    const found = countries.find((c) => c.code === e.target.value);
    setSelectedCountry(found);
    // Update formData.mobile with new country code and current number
    handleInputChange({
      target: {
        name: "mobile",
        value: (found?.code || "") + number,
      },
    });
  };

  return (
    <div>
      <div className="relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center">
          {selectedCountry && (
            <>
              <img
                src={selectedCountry.flag}
                alt={selectedCountry.name}
                className="w-5 h-5 rounded mr-1"
              />
              <select
                value={selectedCountry.code}
                onChange={handleCountryChange}
                className="bg-transparent text-gray-700 text-sm font-medium focus:outline-none"
              >
                {countries.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.code}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
        <input
          id="mobile"
          name="mobile"
          type="tel"
          required
          placeholder="Mobile Number"
          value={number}
          onChange={handleNumberChange}
          className="focus:ring-green-400 focus:border-green-400 block w-full pl-28 text-base border-gray-300 rounded-md py-2 px-3"
        />
      </div>
      {apiError && (
        <p className="mt-1 text-sm text-red-600 font-medium">{apiError}</p>
      )}
      {!apiError && (errors.mobile ? (
        <p className="mt-1 text-sm text-red-600 font-medium">
          Mobile Number is required
        </p>
      ) : (
        <p className="mt-1 text-xs text-gray-500">Mobile Number is required</p>
      ))}
    </div>
  );
};

export default PhoneInput;
