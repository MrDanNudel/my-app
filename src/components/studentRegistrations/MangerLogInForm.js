import React, { useState } from "react";

const ManagerLogInForm = ({
  handleManagerLogin,
  setIsModalOpen,
  setIsManagerLoggedIn,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleManagerLogin(username, password); // Call the function passed from App.js
  };

  return (
    <div className="login-form">
      <h2>Manager Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
        <button type="button" onClick={() => setIsModalOpen(false)}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ManagerLogInForm;
