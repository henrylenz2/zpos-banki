import React, { useState } from 'react';
import './AppCounter.css'
const AppCounter = () => {
 const [count, setCount] = useState(0)

 const decrement = () => {
   setCount(count - 1)
 }
 const increment = () => {
setCount(count + 1)
 }
  
  return (
    <div>
      <p>The count is: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default AppCounter;
