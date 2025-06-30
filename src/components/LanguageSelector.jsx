import { IoEarth } from "react-icons/io5";
import { HiLanguage } from "react-icons/hi2";
import { RiEnglishInput } from "react-icons/ri";

const LanguageSelector = ({
  language,
  setLanguage,
  open,
  setOpen,
  translations,
}) => {
  const handleLanguageSelect = (lang) => {
    setOpen(false);
    setLanguage(lang);
  };

  return (
    <div className="relative z-50">
      <button
        className="absolute top-4 right-4 md:top-6 md:right-10 text-blue-600 flex gap-2 items-center"
        onClick={() => setOpen(!open)}
      >
        <IoEarth className="w-5 h-5" />
        {language === "en" ? translations.en.english : translations.hi.hindi}
      </button>
      {open && (
        <div className="absolute top-12 right-0 md:top-16 md:right-10 bg-white shadow-md rounded text-black w-28">
          <div
            className="px-4 py-2 flex gap-2 items-center hover:bg-gray-100 cursor-pointer"
            onClick={() => handleLanguageSelect("en")}
          >
            <RiEnglishInput /> {translations.en.english}
          </div>
          <div
            className="px-4 py-2 flex gap-2 items-center hover:bg-gray-100 cursor-pointer"
            onClick={() => handleLanguageSelect("hi")}
          >
            <HiLanguage /> {translations.hi.hindi}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
