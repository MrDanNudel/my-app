// MainComponent.js
import React, { useState } from "react";
import ManagerLogInForm from "./MangerLogInForm";

function MainComponent() {
  const [showLoginForm, setShowLoginForm] = useState(false); // Track form visibility

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm); // Toggle the login form visibility
  };

  const [loggedIn, setLoggedIn] = useState(false); // Track login state

  const handleLogout = () => {
    setLoggedIn(false); // Set logged out state to false
  };

  return (
    <div>
      <div className="manager-era" onClick={toggleLoginForm}>
        {/* Replace this with your 'Manager Era' clickable area */}
        <h2>Manager Era</h2>
      </div>

      {/* Show Manager Log In Form when showLoginForm is true */}
      {showLoginForm && !loggedIn && (
        <ManagerLogInForm setLoggedIn={setLoggedIn} />
      )}

      {/* Display content when logged in */}
      {loggedIn && (
        <div>
          <h1>Welcome, Manager!</h1>
          <button onClick={handleLogout}>Log Out</button>
          {/* You can add more content here for when the user is logged in */}
        </div>
      )}
    </div>
  );
}

export default MainComponent;
