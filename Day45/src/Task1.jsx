import { useState } from "react";

function Task1() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}               // controlled input value
        onChange={(e) => setName(e.target.value)} // update state on change
      />
      <p>Hello, {name}</p>
    </div>
  );
}

export default Task1;
