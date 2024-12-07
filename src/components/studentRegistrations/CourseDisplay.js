import React from "react";
import "./CourseDisplay.css";
import CourseDate from "./CourseDate";
import CourseDateDisplay from "./CourseDateDisplay";

function CourseDisplay(props) {
  const { courseName, courseDate, courseImg } = props;
  console.log("Course Name:", courseName);
  console.log("Course Date:", courseDate);
  console.log("Course Image:", courseImg);

  // Find the course the studnt is signed up for

  return (
    <div
      className="Course_description"
      style={{
        backgroundImage: `
        linear-gradient(
        rgb(10, 137, 91,0.1), rgb(27, 29, 136,0.1)) ,
        url(${courseImg})`, // Dynamically set the background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px", // Example height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>{courseName}</h2>

      <CourseDateDisplay courseDate={courseDate}></CourseDateDisplay>
    </div>
  );
}

export default CourseDisplay;
