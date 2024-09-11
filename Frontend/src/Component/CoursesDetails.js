

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Form, Modal, Button, Col, Image } from 'react-bootstrap';
import Course from './Course'; // Correctly import the Course component
import './Courses.css'; // Assuming custom CSS for additional styling
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
function CoursesDetails() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    {
      name: "React Development",
      duration: "8 weeks",
      fees: "$499",
      description: "Learn the fundamentals of React and build dynamic web applications.",
      instructor: "John Doe",
      rating: 4.8,
      syllabus: "JSX, Components, State, Props, Hooks",
      image: "react.jpeg",
    },
    {
      name: "Java Programming",
      duration: "10 weeks",
      fees: "$599",
      description: "Master Java programming from basics to advanced concepts.",
      instructor: "Jane Smith",
      rating: 4.7,
      syllabus: "OOP, Collections, Streams, Multithreading",
      image: "Java.jpeg",
    },
    {
      name: "Full Stack Web Development",
      duration: "12 weeks",
      fees: "$799",
      description: "Become a full-stack web developer by mastering both frontend and backend technologies.",
      instructor: "David Brown",
      rating: 4.9,
      syllabus: "HTML, CSS, JavaScript, React, Node.js, Express, MongoDB",
      image: "web.jpeg",
    },
    {
      name: "Data Science with Python",
      duration: "10 weeks",
      fees: "$699",
      description: "Learn data science and machine learning using Python and its libraries.",
      instructor: "Emma Wilson",
      rating: 4.8,
      syllabus: "Pandas, NumPy, Scikit-Learn, Matplotlib, TensorFlow",
      image: "python.jpeg",
    },
    {
      name: "Android App Development",
      duration: "8 weeks",
      fees: "$499",
      description: "Build native Android apps using Java and Kotlin.",
      instructor: "Lucas Gray",
      rating: 4.6,
      syllabus: "Java, Kotlin, Android Studio, Firebase",
      image: "android.jpeg",
    },
    {
      name: "Cyber Security",
      duration: "6 weeks",
      fees: "$399",
      description: "Learn the fundamentals to maintain data security.",
      instructor: "Ajay Mishra",
      rating: 4.6,
      syllabus: "Networking, Encryption, Threats, Firewalls",
      image: "cyber.jpeg",
    },
    {
      name: ".NET Development",
      duration: "10 weeks",
      fees: "$599",
      description: "Learn to build powerful applications using .NET framework and C#.",
      instructor: "Mark Johnson",
      rating: 4.7,
      syllabus: ".NET Core, C#, ASP.NET MVC, Entity Framework, LINQ",
      image: "net.jpeg",
    },
  ];

  const companyLogos = [
    { src: 'wipro.jpg', alt: 'Wipro', link: 'https://www.wipro.com' },
    { src: 'mahindra.jpg', alt: 'Mahindra', link: 'https://www.mahindra.com' },
    { src: 'hightech.jpg', alt: 'HighTech', link: 'https://www.hightech.com' },
    { src: 'accenture.jpg', alt: 'Accenture', link: 'https://www.accenture.com' },
    { src: 'yash.jpg', alt: 'Yash', link: 'https://www.yash.com' },
    { src: 'tcs.jpg', alt: 'TCS', link: 'https://www.tcs.com' },
   { src: 'glycon.jpg', alt: 'Glycon', link: 'https://www.glycon.com' },
    { src: 'ontech.jpg', alt: 'OnTech', link: 'https://www.ontech.com' },
    { src: 'apple.jpg', alt: 'Apple', link: 'https://www.apple.com' },
    { src: 'coditas.jpg', alt: 'Coditas', link: 'https://www.coditas.com' },
    { src: 'keo.jpg', alt: 'KEO', link: 'https://www.keo.com' },
    { src: 'qualitypng.png', alt: 'Quality', link: 'https://www.quality.com' }
  ];
  

  const handleShow = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  return (
    <div className="container-fluid">
      <header className="text-center mb-4">
        <br></br><br></br>
        <h1 className="main-heading">Explore Our Courses</h1>
        <br></br>
        <h2 className="sub-heading">Get started with a course tailored to your needs</h2>
      </header>

      <section className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search for courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 search-bar"
        />
<Row className="course-row">
  {filteredCourses.slice(0, 4).map((course, index) => (
    <Course
      key={index}
      {...course}
      onApply={() => handleShow(course)} // Ensure 'onApply' is passed correctly
    />
  ))}
</Row>

<Row className="course-row">
  {filteredCourses.slice(4).map((course, index) => (
    <Course
      key={index}
      {...course}
      onApply={() => handleShow(course)} // Use 'onApply' instead of 'onClick'
    />
  ))}
</Row>
      </section>

      <section className="company-logos text-center my-5">
        <h3>Our Tie-Ups Companies</h3>
        <div className="company-logos">
      <div className="logo-container">
        {companyLogos.map((logo, index) => (
          <div className="logo-item" key={index}>
            <a href={logo.link} target="_blank" rel="noopener noreferrer">
              <img src={logo.src} alt={logo.alt} />
            </a>
          </div>
        ))}
      </div>
    </div>
      </section>

      {selectedCourse && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedCourse.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedCourse.image} alt={selectedCourse.name} className="img-fluid mb-3" />
            <h5>Instructor: {selectedCourse.instructor}</h5>
            <p><strong>Duration:</strong> {selectedCourse.duration}</p>
            <p><strong>Fees:</strong> {selectedCourse.fees}</p>
            <p><strong>Rating:</strong> {selectedCourse.rating} ★</p>
            <p><strong>Syllabus:</strong> {selectedCourse.syllabus}</p>
            <p>{selectedCourse.description}</p>


{/* ********************************************************* */}
            {/* add addmission form url */}
            <button class="enroll-btn">
            <Link to="/admission">Entrol Now</Link>
            </button> </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default CoursesDetails;
