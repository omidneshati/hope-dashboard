import { useState } from 'react';

function useCounter({ initialValue = 0 }: { initialValue: number }) {
  const [num, setNum] = useState(initialValue);

  const increase = () => {
    setNum((v) => v + 1);
  };
  const decrease = () => {
    setNum((v) => v - 1);
  };

  return { num, increase, decrease };
}

export default useCounter;
