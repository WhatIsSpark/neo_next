"use client";

import { useState, useEffect } from "react";

export default async function Counter() {
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
