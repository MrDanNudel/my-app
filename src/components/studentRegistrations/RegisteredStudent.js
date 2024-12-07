import React from "react";
import "./RegisterdStudent.css";
import CourseDate from "./CourseDate";

function RegisterdStudent(props) {
  const { registerdStudents, avaliableCourses } = props;

  return (
    <table className="registration-table">
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Course</th>
          <th>Course Start Date</th>
        </tr>
      </thead>
      <tbody>
        {registerdStudents.map((student) => {
          // Find the course the student is signed up for
          const selectedCourse = avaliableCourses.find(
            (course) =>
              course.courseName.toLowerCase() === student.course.toLowerCase()
          );

          // If no course is found, set the course date to "N/A"
          const courseStartDate = selectedCourse
            ? selectedCourse.courseDate.toLocaleDateString()
            : "N/A";

          return (
            <tr key={student.id}>
              <td>{student.studentName}</td>
              <td>{student.course}</td>
              <td>{courseStartDate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default RegisterdStudent;