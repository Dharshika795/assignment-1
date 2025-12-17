import { useState } from "react";

function Task5() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isMatch = password === confirmPassword && password !== "";

  return (
    <div>
      <h2>Create Account</h2>

      <div>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Confirm Password:{" "}
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
      </div>

      <p>
        {confirmPassword
          ? isMatch
            ? "Passwords match ✅"
            : "Passwords do not match ❌"
          : ""}
      </p>
    </div>
  );
}

export default Task5;
