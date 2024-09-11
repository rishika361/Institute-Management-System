
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom'; 
import './home.css'; // Import custom styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



// Carousel images
const images = [
  '/carousel1.jpg',
  '/carousel2.jpg',
  '/carousel5.jpg',
  '/carousel4.jpg',
  '/carousel3.avif',
  '/carousel6.jpg'
];

// Sample student feedback data
const students = [
  {
    name: 'John Doe',
    photo: '/shop7.jpg',
    feedback: 'The Web Development course was fantastic! The combination of HTML, CSS, JavaScript, and React helped me build real-world projects. I particularly enjoyed the module on RESTful APIs. The hands-on projects gave me the confidence to start applying for web developer positions.'
  },
  {
    name: 'Jane Smith',
    photo: '/feedback.jpg',
    feedback: 'I took the Advanced CIT (Computer Information Technology) course, and it was truly worth the investment. The course covered networking, cloud computing, and advanced database management systems. The instructors were patient, and their practical knowledge helped bridge the gap between theory and real-world applications.'
  },
  {
    name: 'Sophia Johnson',
    photo: '/shop7.jpg',
    feedback: 'The Cyber Security course provided deep insights into real-world security challenges. I learned about ethical hacking, network security, and how to protect systems from cyber threats. The course also included simulated hacking scenarios, which were a game-changer for my understanding of vulnerabilities and defense mechanisms.'
  },
  {
    name: 'Bob Brown',
    photo: '/feedback.jpg',
    feedback: 'The Cyber Security course was a game-changer for me. It provided an in-depth understanding of how to defend against real-world cyber threats. The hands-on exercises, including penetration testing and ethical hacking, were highly engaging and practical. I feel much more confident in identifying vulnerabilities and implementing security measures in my current role.'
  },
  {
    name: 'Emily Davis',
    photo: '/shop7.jpg',
    feedback: 'The Data Science course at the institute exceeded my expectations. From Python programming to machine learning and data visualization, the course covered everything needed to dive into the field. The instructors also provided guidance on real-world datasets, which helped me understand data processing and modeling on a deeper level.'
  }
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    
      <div className="carousel-container">
        <div className="welcome-message">
          <h1>Welcome to our institute Tech Innovators !</h1>
          <p>Join Us at Tech Innovators and master the skills that shape the future. Explore our courses and start your journey to success today!</p>
        </div>

        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
        
      </div>
    );
};

const HappyStudents = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="happy-students-container">
      <h2 >Our Happy Students</h2>
      <Slider {...settings}>
        {students.map((student, index) => (
          <div key={index} className="student-feedback">
            <img src={student.photo} alt={student.name} className="student-photo" />
            <h3 className="student-name">{student.name}</h3>
            <p className="student-feedback-text">{student.feedback}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const courseData = [
  {
    title: "Web Development Mastery - From Frontend to Backend",
    category: "WEB DEVELOPMENT",
    level: "Beginner to Advanced",
    imageUrl: "/webdevlopment.jpg"
  },
  {
    title: "Mastering React - Building Dynamic User Interfaces",
    category: "REACT JS",
    level: "Beginner to Advanced",
    imageUrl: "/reactcourse.jpg",
  },
  {
    title: "Data Science Essentials - From Data to Insights",
    category: "DATA SCIENCE",
    level: "Beginner to Advanced",
    imageUrl: "/datascience.webp",
  },
  {
    title: "Advanced CIT - Mastering Computer Information Technology",
    category: "COMPUTER INFORMATION TECHNOLOGY",
    level: "Beginner to Advanced",
    imageUrl: "/AdvanceCIT.jpg",
  },
];

const CourseList = () => {
  return (
    <div className="container">
      <h1>Top Picks</h1>
      <div className="course-grid">
        {courseData.map((course) => (
          <div className="course-card" key={course.title}>
            <div className="course-banner">
              <img src={course.imageUrl} alt={course.category} />
            </div>
            <div className="course-content">
              <h2 className="course-title">{course.category}</h2>
              <p className="course-description">{course.title}</p>
              <div className="course-info">
              </div>
              <div className="course-level">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-diagram-3-fill" viewBox="0 0 16 16">
                  <path d="M6 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5zm6 5.75a.5.5 0 0 0-.5.5v2.75a.5.5 0 0 0 .5.5h2.75a.5.5 0 0 0 .5-.5v-2.75a.5.5 0 0 0-.5-.5h-2.75zM4 10.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v2.75a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-2.75zm-6 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v2.75a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-2.75z" />
                </svg>
                {course.level}
              </div>
            </div>
            <Link to="/admission"><button className="button">Enroll Now</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}




const InstituteStatus = () => {
  const [status, setStatus] = useState('');

  const openingTime = '08:00 AM';
  const closingTime = '06:00 PM';

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const currentTime = now.getHours() + (now.getMinutes() / 60);
      const openTime = 8;
      const closeTime = 18;

      if (currentTime >= openTime && currentTime < closeTime) {
        setStatus('Open Now');
      } else {
        setStatus('Closed');
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check status every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="institute-status">
      <div className="status-location-container">
        <div className="status-info">
          <h2>Institute Status</h2>
          <p><strong>Opening Time:</strong> {openingTime}</p>
          <p><strong>Closing Time:</strong> {closingTime}</p>
          <p><strong>Current Status:</strong> {status}</p>
        </div>
        <div className="location-info">
          <h2>Location📍</h2>
          <p>789 Learning Street,Pune,Maharashtra</p>
        </div>
      </div>
    </div>
  );
};


const HomePage = () => {
  return (
    <div className="home-page">
      <Carousel />
      <CourseList/>
      <HappyStudents />
      <InstituteStatus/>
    </div>
  );
};

export default HomePage;

