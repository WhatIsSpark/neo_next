"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>当前计数: {count}</p>
      <button onClick={countUp}>增加</button>
    </div>
  );
}
