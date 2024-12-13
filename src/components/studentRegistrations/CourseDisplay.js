import React, { useState } from "react";
import "./CourseDisplay.css";
import CourseDateDisplay from "./CourseDateDisplay";

function CourseDisplay(props) {
  const { courseName, courseDate, courseImg, courseDescription } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle the modal visibility
  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <div>
      {/* Course Card */}
      <div
        className="Course_description"
        style={{
          backgroundImage: `linear-gradient(rgb(10, 137, 91, 0.1), rgb(27, 29, 136, 0.1)), url(${courseImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={toggleModal}
      >
        <h2>{courseName}</h2>
        <CourseDateDisplay courseDate={courseDate}></CourseDateDisplay>
      </div>

      {/* Modal for Description */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={toggleModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{courseName}</h2>
              <button onClick={toggleModal} className="close-btn">
                X
              </button>
            </div>
            <p>{courseDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseDisplay;
