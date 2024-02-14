import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(1000);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n - 1);
        setNumber(n => n - 1);
        setNumber(n => n - 5);
      }}>-7</button>
    </>
  )
}
