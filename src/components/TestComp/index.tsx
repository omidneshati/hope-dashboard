import { useState } from 'react';

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
    </div>
  );
}

export default TestComp;
