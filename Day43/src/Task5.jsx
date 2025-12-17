import { useState } from "react";

function Task5() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: "100vh",
        padding: "20px"
      }}
    >
      <button onClick={() => setBgColor("lightblue")}>
        Change Background
      </button>
    </div>
  );
}

export default Task5;
