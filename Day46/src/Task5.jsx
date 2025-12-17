import { useState, useEffect } from "react";

function Task5() {
  const [count, setCount] = useState(0);

  // Update document title whenever count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // dependency array → runs on count change

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default Task5;
