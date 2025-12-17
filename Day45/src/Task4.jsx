import { useState } from "react";

function Task4() {
  const [country, setCountry] = useState("");

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <label>
        Choose a country:{" "}
        <select value={country} onChange={handleChange}>
          <option value="">--Select--</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
          <option value="Canada">Canada</option>
        </select>
      </label>

      {country && <p>You selected: {country}</p>}
    </div>
  );
}

export default Task4;
