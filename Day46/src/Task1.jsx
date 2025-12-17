import { useEffect, useState } from "react";

function Task1() {
  const [count, setCount] = useState(0);

  // useEffect with no dependency array runs on every render
  useEffect(() => {
    console.log("Rendered!");
  });

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Task1;
