import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function SwitchLanguageToggle() {
  const { i18n } = useTranslation();
  const { language: currentLanguage, changeLanguage } = i18n;
  const enBtn = useRef<HTMLButtonElement>(null);
  const faBtn = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex gap-1 p-1 bg-gray-800 border rounded-md w-min">
      <button
        type="button"
        className={`${
          currentLanguage === 'en' ? 'bg-white text-black' : 'bg-none text-white'
        } px-2 rounded-l-sm`}
        ref={enBtn}
        onClick={() => {
          enBtn.current?.setAttribute('disabled', 'disabled');
          faBtn.current?.removeAttribute('disabled');
          changeLanguage('en');
        }}>
        EN
      </button>
      <button
        type="button"
        className={`${
          currentLanguage === 'fa' ? 'bg-white text-black' : 'bg-none text-white'
        } px-2 rounded-r-sm`}
        ref={faBtn}
        onClick={() => {
          faBtn.current?.setAttribute('disabled', 'disabled');
          enBtn.current?.removeAttribute('disabled');
          changeLanguage('fa');
        }}>
        FA
      </button>
    </div>
  );
}
