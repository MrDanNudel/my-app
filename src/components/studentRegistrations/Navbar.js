import React from "react";
import "./Navbar.css";

function Navbar({
  findMostRegisteredCourse,
  displayDataRef,
  onManagerAreaClick,
  onHomeClick,
  resetPageFlag,
}) {
  const handleClick = (event) => {
    event.stopPropagation(); // Prevent the event from bubbling up
  };

  const handleHomeClick = (event) => {
    handleClick(event);
    onHomeClick(); // Navigate to the main page
    resetPageFlag(true); // Reset the main page state when the home button is clicked
  };

  return (
    <div className="search-students-by-nav-bar">
      {/* Manager Area */}
      <span
        className="spacer"
        onClick={(event) => {
          handleClick(event);
          onManagerAreaClick(); // Trigger the manager area logic
        }}
      >
        Manager Area
      </span>

      {/* Home */}
      <span className="spacer" onClick={handleHomeClick}>
        Home
      </span>
    </div>
  );
}

export default Navbar;
