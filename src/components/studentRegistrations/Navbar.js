import React from "react";
import "./Navbar.css";

function Navbar({ registeredStudents, courses }) {
  // Function to find the most registered course
  const findMostRegisteredCourse = () => {
    const courseCount = {};

    // Count the number of students per course
    registeredStudents.forEach((student) => {
      if (courseCount[student.course]) {
        courseCount[student.course]++;
      } else {
        courseCount[student.course] = 1;
      }
    });

    // Find the course with the highest number of registrations
    let mostRegisteredCourse = "";
    let maxRegistrations = 0;

    for (const [courseName, count] of Object.entries(courseCount)) {
      if (count > maxRegistrations) {
        mostRegisteredCourse = courseName;
        maxRegistrations = count;
      }
    }

    // Show an alert with the result
    alert(
      `The most registered course is "${mostRegisteredCourse}" with ${maxRegistrations} registered students.`
    );
  };

  return (
    <div className="search-students-by-nav-bar">
      <span className="spacer">student name</span>
      <span className="spacer">course name</span>

      {/* Add onClick event handler to display the alert */}
      <span className="spacer" onClick={findMostRegisteredCourse}>
        most registered
      </span>
    </div>
  );
}

export default Navbar;
