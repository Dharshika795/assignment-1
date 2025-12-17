import { useState, useEffect } from "react";

function Task4() {
  const [name, setName] = useState("");

  // useEffect runs whenever 'name' changes
  useEffect(() => {
    console.log("Name changed:", name);
  }, [name]);

  return (
    <div>
      <label>
        Enter your name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name..."
        />
      </label>

      <p>Your name is: {name}</p>
    </div>
  );
}

export default Task4;
