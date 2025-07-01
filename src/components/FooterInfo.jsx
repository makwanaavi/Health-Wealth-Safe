const FooterInfo = ({ t }) => (
  <div className="absolute bottom-10 right-10 flex gap-12">
    <span className="text-xs text-gray-500 mb-1">
      {t.address} <a href="#" className="text-blue-500 underline">{t.athens}</a>, {t.unitedStates}
    </span>
    <div className="flex gap-6 text-xs text-blue-500">
      <a href="https://api.healthwealthsafe.net/policies/patient_user_privacy_policy.html" target="_blank" className="hover:underline">{t.privacy}</a>
      <a href="https://api.healthwealthsafe.net/policies/patient_user_terms_of_use.html" target="_blank" className="hover:underline">{t.terms}</a>
      <a href="#" className="hover:underline">{t.intake}</a>
    </div>
  </div>
);

export default FooterInfo;
