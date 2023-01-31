import { useState } from 'react';
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';

import style from './TestComp.module.css';

function TestComp() {
  const [num, setNum] = useState(0);
  const { t } = useTranslation();

  const increaseNum = () => setNum((v) => v + 1);

  return (
    <div>
      <h1>Test</h1>
      <h2>{num}</h2>
      <button type="button" onClick={increaseNum}>
        Click ME
      </button>
      <div>
        <i>{t('key')}</i>
        <span className={style.testWritMode}>Omid Neshati</span>
      </div>
    </div>
  );
}

export default TestComp;
