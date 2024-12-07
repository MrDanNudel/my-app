import React, { useState } from "react";
import "./NewStudent.css";
import StudentForm from "./StudentForm";

function NewStudent(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveRegisteredStudentDataHandler = (enteredRegisteredStudentData) => {
    console.log(
      "Entered Registered Student Data:",
      enteredRegisteredStudentData
    );

    // No need to wrap the object in an array
    props.onRegisterdNewStudent(enteredRegisteredStudentData);

    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-registration">
      {!isEditing && (
        <button
          onClick={startEditingHandler}
          className="register-student-button"
        >
          Click to register!
        </button>
      )}
      {isEditing && (
        <StudentForm
          onSaveRegisteredStudentData={saveRegisteredStudentDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewStudent;
