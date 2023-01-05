import { useState } from 'react';

import style from './TestComp.module.css';

function TestComp() {
  const [num, setNum] = useState(0);

  const increaseNum = () => setNum((v) => v + 1);

  return (
    <div>
      <h1>Test</h1>
      <h2>{num}</h2>
      <button type="button" onClick={increaseNum}>
        Click ME
      </button>
      <p className={style.testWritMode}>Omid Neshati</p>
    </div>
  );
}

export default TestComp;
