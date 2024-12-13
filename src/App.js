import React, { useState, useRef } from "react";
import RegisteredStudent from "./components/studentRegistrations/RegisteredStudent";
import Navbar from "./components/studentRegistrations/Navbar";
import NewStudent from "./components/studentRegistrations/NewStudent";
import CourseDisplay from "./components/studentRegistrations/CourseDisplay";
import "./App.css";
import ManagerLogInForm from "./components/studentRegistrations/MangerLogInForm";
import DisplayData from "./components/studentRegistrations/DisplayData";

const DUMMY_REGISTERED_STUDENTS = [
  { id: "1", studentName: "Itzik Norov", course: "css" },
  { id: "2", studentName: "Max Passmanik", course: "Fullstack" },
  { id: "3", studentName: "David Sukner", course: "QA" },
  { id: "4", studentName: "Yan Shopin", course: "Cyber" },
  { id: "5", studentName: "Michael Milman", course: "Cyber" },
];

const ALL_COURSES = {
  fullstack: {
    id: "1",
    courseName: "Fullstack",
    courseDate: new Date(2024, 10, 8),
    img: "/pics/fullStack.webp",
    description:
      "The Fullstack course covers both front-end and back-end development, equipping you with the skills to build complete web applications. You'll learn HTML, CSS, JavaScript, Node.js, and more.",
  },
  css: {
    id: "2",
    courseName: "CSS",
    courseDate: new Date(2024, 1, 8),
    img: "/pics/css.jpg",
    description:
      "This CSS course will teach you how to design and style web pages with advanced CSS techniques. You'll master layout systems like Flexbox and Grid, as well as animations and responsive design.",
  },
  qa: {
    id: "3",
    courseName: "QA",
    courseDate: new Date(2024, 1, 10),
    img: "/pics/it.jpeg",
    description:
      "The QA course focuses on quality assurance practices, teaching you how to test and debug software applications effectively. You'll learn manual and automated testing techniques.",
  },
  cyber: {
    id: "4",
    courseName: "Cyber",
    courseDate: new Date(2024, 12, 20),
    img: "/pics/cyber.png",
    description:
      "This course dives into cybersecurity, covering topics like network security, encryption, penetration testing, and risk management to help you become a skilled cybersecurity professional.",
  },
};

function App() {
  const [registeredStudents, setRegisteredStudents] = useState(
    DUMMY_REGISTERED_STUDENTS
  );
  const displayDataRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isManagerLoggedIn, setIsManagerLoggedIn] = useState(
    localStorage.getItem("managerLoggedIn") === "true"
  );
  const [isMainPage, setIsMainPage] = useState(true);

  // Add Student Handler
  const addStudentHandler = (registeredStudent) => {
    setRegisteredStudents((prevStudents) => [
      registeredStudent,
      ...prevStudents,
    ]);
  };

  // Home Click handler
  const onHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMainPage(true); // Navigate to main page
  };

  // Manager Area Click handler
  const onManagerAreaClick = () => {
    if (!isManagerLoggedIn) {
      setIsModalOpen(true); // Open login modal if not logged in
    } else {
      setIsMainPage(false); // Navigate to manager's area if logged in
    }
  };

  // Handle manager login
  const handleManagerLogin = (username, password) => {
    if (username === "admin" && password === "admin123") {
      setIsManagerLoggedIn(true);
      localStorage.setItem("managerLoggedIn", "true");
      setIsModalOpen(false); // Close login modal
      setIsMainPage(false); // Show manager's area
    } else {
      alert("Invalid username or password!");
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsManagerLoggedIn(false);
    localStorage.removeItem("managerLoggedIn");
    setIsMainPage(true); // Go back to main page after logout
  };

  const closeModalHandler = () => setIsModalOpen(false);

  return (
    <div>
      <section className="main-heading">
        <h1 id="welcome-text">fast learning code acadamy</h1>
        <p id="intro-text">Your one-stop for learning how to code!</p>
      </section>

      <Navbar
        onManagerAreaClick={onManagerAreaClick} // Button click to open login modal or manager's area
        onHomeClick={onHomeClick} // Navigate to main page
        resetPageFlag={setIsMainPage} // Reset the main page state on home button click
      />

      {/* Conditional rendering for main page or manager's area */}
      {isMainPage ? (
        <React.Fragment>
          <div className="flex-container-course-display">
            {Object.values(ALL_COURSES).map((course, index) => (
              <div className="flex-item-course-display" key={index}>
                <CourseDisplay
                  courseName={course.courseName}
                  courseDate={course.courseDate}
                  courseImg={course.img}
                  courseDescription={course.description} // Pass the description
                />
              </div>
            ))}
          </div>
          <NewStudent
            onRegisterdNewStudent={addStudentHandler}
            courses={ALL_COURSES}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div ref={displayDataRef}>
            <DisplayData courses={ALL_COURSES} students={registeredStudents} />
          </div>
          <RegisteredStudent
            registerdStudents={registeredStudents}
            avaliableCourses={Object.values(ALL_COURSES)}
          />
        </React.Fragment>
      )}

      {/* Login Modal */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={closeModalHandler}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <ManagerLogInForm
              setIsModalOpen={setIsModalOpen}
              setIsManagerLoggedIn={setIsManagerLoggedIn}
              handleManagerLogin={handleManagerLogin}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
