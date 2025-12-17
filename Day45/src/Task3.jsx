import { useState } from "react";

function Task3() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(e.target.checked); // update state with checkbox value
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}       // controlled checkbox
          onChange={handleChange}
        />
        Accept Terms
      </label>

      <p>{isChecked ? "Checked" : "Not Checked"}</p>
    </div>
  );
}

export default Task3;
