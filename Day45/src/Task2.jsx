import { useState } from "react";

function Task2() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value.toUpperCase()); // convert to uppercase
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type here..."
        value={text}      // controlled input
        onChange={handleChange}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default Task2;
