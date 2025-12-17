import { useEffect } from "react";

function Task2() {
  useEffect(() => {
    console.log("Component Loaded");
  }, []); // empty dependency array → runs only once on mount

  return (
    <div>
      <h2>Check the console!</h2>
    </div>
  );
}

export default Task2;
