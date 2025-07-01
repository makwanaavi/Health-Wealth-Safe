import { IoCall } from "react-icons/io5";
import { TbMessage2Filled } from "react-icons/tb";
import FooterInfo from "./FooterInfo";
import { MdEmail } from "react-icons/md";

const LeftBanner = ({ t }) => (
  <div className="relative hidden w-450 md:block overflow-hidden">
    <img
      src="/loginImage.png"
      alt="Banner"
      className="w-150 h-full object-cover"
    />
    <div className="absolute top-0 left-185 w-full h-full flex flex-col justify-center items-start pl-16">
      <h2 className="text-5xl font-semibold text-[#3699FF] mb-2">
        {t.betterPatient}
      </h2>
      <h3 className="text-4xl font-semibold text-gray-700 mb-2">
        {t.engagement}
      </h3>
      <p className="text-gray-600 text-sm mb-1">{t.engageText}</p>
      <a href="#" className="text-[#3699FF] text-base">
        {t.readMore}
      </a>
    </div>
    <div className="absolute top-6 right-0 flex gap-6 bg-white mr-14">
      <div className="flex items-center gap-2 px-6 font-medium py-2.5 bg-blue-100 rounded-full text-[#3699FF] text-sm hover:text-white hover:bg-[#3699FF]">
        <IoCall className="w-5 h-5" />
        {t.call} +1 (877) 581-8810 <span>{t.available}</span>
      </div>
      <div className="flex items-center gap-2 font-medium bg-blue-100 rounded-full px-3 py-1 text-[#3699FF] text-sm hover:text-white hover:bg-[#3699FF]">
        <MdEmail className="w-5 h-5" /> {t.info}
      </div>
    </div>
    <FooterInfo t={t} />
  </div>
);

export default LeftBanner;
