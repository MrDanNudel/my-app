import React, { useState } from "react";
import "./NewStudent.css";
import StudentForm from "./StudentForm";

function NewStudent(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveRegisteredStudentDataHandler = (enteredRegisteredStudentData) => {
    console.log(
      "Entered Registered Student Data:" +
        JSON.stringify(enteredRegisteredStudentData)
    );
    const registerdStudentData = {
      ...enteredRegisteredStudentData,

      id: (Math.floor(Math.random() * 10) + 1).toString(),
    };
    console.log(
      "this is the enteredStudentData After Object change : " +
        JSON.stringify(registerdStudentData)
    );

    // No need to wrap the object in an array
    props.onRegisterdNewStudent(registerdStudentData);

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
          courses={props.courses}
          onSaveRegisteredStudentData={saveRegisteredStudentDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewStudent;
