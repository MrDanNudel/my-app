import React, { useState } from "react";
import RegisterdStudent from "./components/studentRegistrations/RegisteredStudent";
import Navbar from "./components/studentRegistrations/Navbar";
import NewStudent from "./components/studentRegistrations/NewStudent";
import CourseDisplay from "./components/studentRegistrations/CourseDisplay";
import "./App.css";

const DUMMY_REGISTERED_STUDENTS = [
  { id: "1", studentName: "itzik norov", course: "CSS" },
  { id: "2", studentName: "max passmanik", course: "Fullstack" },
  { id: "3", studentName: "David Sukner", course: "QA" },
  { id: "4", studentName: "yan shopin", course: "Cyber" },
  { id: "5", studentName: "michael milman", course: "Cyber" },
];

const DUMMY_COURSES = [
  {
    id: "1",
    courseName: "Fullstack",
    courseDate: new Date(2024, 10, 8),
    img: "/pics/fullStack.webp",
  },
  {
    id: "2",
    courseName: "CSS",
    courseDate: new Date(2024, 1, 8),
    img: "/pics/css.jpg",
  },
  {
    id: "3",
    courseName: "QA",
    courseDate: new Date(2024, 1, 10),
    img: "/pics/it.jpeg",
  },
  {
    id: "4",
    courseName: "Cyber",
    courseDate: new Date(2024, 12, 20),
    img: "/pics/cyber.png",
  },
];

function App() {
  const [registeredStudents, setRegisteredStudents] = useState(
    DUMMY_REGISTERED_STUDENTS
  );

  const addStudentHandler = (registeredStudent) => {
    // Adding the new student to the registered students list
    setRegisteredStudents((prevStudents) => [
      registeredStudent,
      ...prevStudents,
    ]);
  };

  return (
    <div>
      <section className="main-heading">
        <h1 id="welcome-text">Student Registration Guide</h1>
        <p id="intro-text">Your one-stop for student registration!</p>
      </section>

      <Navbar className="search-by" />

      <div className="flex-container-course-display">
        {DUMMY_COURSES.map((course, index) => (
          <div className="flex-item-course-display" key={index}>
            <CourseDisplay
              courseName={course.courseName}
              courseDate={course.courseDate}
              courseImg={course.img}
            />
          </div>
        ))}
      </div>

      <NewStudent onRegisterdNewStudent={addStudentHandler} />
      <RegisterdStudent
        registerdStudents={registeredStudents}
        avaliableCourses={DUMMY_COURSES}
      />
    </div>
  );
}

export default App;
