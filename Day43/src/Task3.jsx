import { useState } from "react";

function Task3() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default Task3;
