import React, { useState } from "react";
import "./StudentForm.css";
import "./NewStudent";

function StudentForm(props) {
  const [enteredStudentName, setEnterStudentName] = useState("");
  const [enteredStudentCourse, setEnteredStudentCourse] = useState("");
  const [enteredCourseDate, setEnterCourseDate] = useState("");

  function dateFormating(date) {
    console.log("The date we got : " + date);

    const year = date.getFullYear(); // Full 4-digit year
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Correctly handle 1-based months
    const day = String(date.getDate()).padStart(2, "0"); // Ensures 2 digits for day

    return `${year}-${month}-${day}`;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredStudentName || !enteredStudentCourse || !enteredCourseDate) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    const registeredStudent = {
      studentName: enteredStudentName,
      course: enteredStudentCourse,
      date: enteredCourseDate,
    };

    // Pass the student data back to the parent
    props.onSaveRegisteredStudentData(registeredStudent);

    // Clear the form after submission
    setEnterStudentName("");
    setEnteredStudentCourse("");
    setEnterCourseDate("");
  };

  const studentNameChangeHandler = (event) => {
    setEnterStudentName(event.target.value);
  };

  const studentCourseChangeHandler = (event) => {
    var enteredCourse = event.target.value;
    console.log("you choose : " + enteredCourse);
    setEnteredStudentCourse(enteredCourse);
    setEnterCourseDate(dateFormating(props.courses[enteredCourse].courseDate));
  };

  const studentCourseDateChangeHandler = (event) => {
    setEnterCourseDate(event.target.value);
  };

  return (
    <form onSubmit={submitHandler} className="student-form">
      <h2 className="form-title">Student Registration</h2>

      <div className="new-registration__controls">
        <div className="new-registration__control">
          <label className="form-label">Student Name</label>
          <input
            type="text"
            required
            onChange={studentNameChangeHandler}
            value={enteredStudentName}
            className="student-name form-input"
            placeholder="Enter student name..."
          />
        </div>

        <div className="new-registration__control">
          <label className="form-label">Course Name</label>
          <select
            className="course-selection form-input"
            defaultValue=""
            value={enteredStudentCourse}
            onChange={studentCourseChangeHandler}
            required
          >
            <option value="" disabled>
              Please choose a course
            </option>
            <option value="fullstack">Fullstack course</option>
            <option value="css">CSS course</option>
            <option value="cyber">Cyber course</option>
            <option value="qa">QA course</option>
          </select>
        </div>

        <div className="new-registration__control">
          <label className="form-label">Course Start Date</label>
          <input
            type="date"
            className="date-display"
            onChange={studentCourseDateChangeHandler}
            value={enteredCourseDate}
            disabled
          />
        </div>
      </div>

      <div className="form-actions">
        <button type="button" onClick={props.onCancel} className="cancel-btn">
          Cancel
        </button>
        <button type="submit" className="submit-btn">
          Register
        </button>
      </div>
    </form>
  );
}

export default StudentForm;
