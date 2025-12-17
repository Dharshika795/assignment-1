import { useState, useEffect } from "react";

function Task3() {
  const [count, setCount] = useState(0);

  // useEffect with count as dependency runs whenever count changes
  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default Task3;
