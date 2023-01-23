import { useTranslation } from 'react-i18next';

export default function SwitchLanguageToggle() {
  const { i18n } = useTranslation();
  const { language: currentLanguage, changeLanguage } = i18n;

  return (
    <div className="flex gap-1 p-1 bg-gray-800 border rounded-md w-min">
      <button
        type="button"
        className={`${
          currentLanguage === 'en' ? 'bg-white text-black' : 'bg-none text-white'
        } px-2 rounded-l-sm`}
        onClick={() => changeLanguage('en')}
        disabled={currentLanguage === 'en'}>
        EN
      </button>
      <button
        type="button"
        className={`${
          currentLanguage === 'fa' ? 'bg-white text-black' : 'bg-none text-white'
        } px-2 rounded-r-sm`}
        onClick={() => changeLanguage('fa')}
        disabled={currentLanguage === 'fa'}>
        FA
      </button>
    </div>
  );
}
