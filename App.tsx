import * as React from 'react';
import { useState } from 'react';
import './style.css';
import { CounterProps } from './types';

export default function App() {
  return (
    <div>
      <Counter initCount={2} />
    </div>
  );
}

function Counter({ initCount }: CounterProps) {
  const [count, setCount] = useState<number>(initCount);

  function handleBtnClick(e: React.MouseEvent<HTMLButtonElement>): void {
    setCount((count) => {
      return count + 1;
    });
  }

  return (
    <div>
      <h1>Counter value : {count}</h1>
      <button onClick={handleBtnClick}>Increment</button>
    </div>
  );
}
