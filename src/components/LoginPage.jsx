import { useState } from "react";
import { translations } from "./translations";
import LeftBanner from "./LeftBanner";
import LanguageSelector from "./LanguageSelector";
import LoginForm from "./ui/LoginForm";

const LoginPage = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const t = translations[language];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white relative">
      <LeftBanner t={t} />
      <div className="w-full md:w-1/2 flex flex-col justify-between bg-blue-100 min-h-[60vh]">
        <LanguageSelector
          open={open}
          setOpen={setOpen}
          language={language}
          setLanguage={setLanguage}
          translations={translations}
        />
        <div className="flex flex-1 items-center justify-center px-4 py-8 md:py-0">
          <div className="w-full max-w-md">
            <div className="flex justify-center m-2">
              <img src="/logo_latest.png" alt="Logo" className="w-28 md:w-40" />
            </div>
            <h2 className="text-center text-gray-400 font-normal mb-6 text-xs md:text-base">
              {t.signIn}
            </h2>
            <LoginForm t={t} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
