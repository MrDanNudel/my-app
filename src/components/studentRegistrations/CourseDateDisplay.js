import React from "react";
import "./CourseDateDisplay.css";

function CourseDateDisplay(props) {
  const { courseDate } = props;
  return <div className="course_date_display">{courseDate.toDateString()}</div>;
}

export default CourseDateDisplay;
