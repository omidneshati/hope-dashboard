import { useState } from 'react';
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';

import style from './TestComp.module.css';

function TestComp() {
  const [num, setNum] = useState(0);
  const { t } = useTranslation();

  const increaseNum = () => setNum((v) => v + 1);

  const langs = ['en', 'fa'];

  return (
    <div>
      <h1>Test</h1>
      <h2>{num}</h2>
      <button type="button" onClick={increaseNum}>
        Click ME
      </button>
      <div className="border-2 border-black space-x-1 p-5">
        {langs.map((lang) => {
          return (
            <button
              className="p-1 border border-cyan-900"
              key={lang}
              type="button"
              onClick={() => changeLanguage(lang)}>
              {lang}
            </button>
          );
        })}
      </div>
      <div>
        <i>{t('key')}</i>
        <span className={style.testWritMode}>Omid Neshati</span>
      </div>
    </div>
  );
}

export default TestComp;
