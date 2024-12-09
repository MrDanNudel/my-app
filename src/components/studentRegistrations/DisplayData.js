import React, { useState } from "react";
import "./DisplayData.css";

const DisplayData = ({ courses, students }) => {
  // State to manage the selected course
  const [selectedCourse, setSelectedCourse] = useState("fullstack");

  // Handle course selection
  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value.toLowerCase());
  };

  // Filter students based on the selected course
  const filteredStudents = students.filter(
    (student) => student.course.toLowerCase() === selectedCourse
  );
  const textDisplay = "  Display by";

  return (
    <div className="display-data">
      {/* Select Input */}
      <label htmlFor="course-select" className="filter-label">
        {textDisplay}
      </label>

      <select
        className="course-select"
        value={selectedCourse}
        onChange={handleCourseChange}
      >
        {Object.keys(courses).map((courseKey) => (
          <option
            key={courses[courseKey].id}
            value={courses[courseKey].courseName.toLowerCase()}
          >
            {courses[courseKey].courseName}
          </option>
        ))}
      </select>

      {/* Table */}
      <table className="data-table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Course Name</th>
            <th>Course Start Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.studentName}</td>
                <td>{student.course}</td>
                <td>
                  {new Date(
                    courses[student.course.toLowerCase()].courseDate
                  ).toLocaleDateString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No students registered for this course</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayData;
