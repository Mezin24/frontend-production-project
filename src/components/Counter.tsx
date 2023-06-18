import { useState } from 'react';
import './Counter.scss';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button className='btn' onClick={increment}>
        increment
      </button>
    </div>
  );
};
export default Counter;
