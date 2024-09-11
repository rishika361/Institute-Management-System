
import React from 'react';
import Faculty from './Faculty';
import './AboutUs.css'; 
const AboutUs = () => {

  const instituteDetails = {
    name: 'Tech Innovators Institute',
    description: 'Tech Innovators Institute is a premier educational institution dedicated to shaping the future of IT professionals. Our diverse range of courses, including Java, Python, Web Development, React, and Android Development, equips students with the essential skills and practical experience required to thrive in the fast-paced tech industry. We foster a dynamic and collaborative learning environment, guided by expert faculty, to ensure our students stay ahead of technological trends. At Tech Innovators Institute, we are committed to empowering students to lead in the digital era and drive innovation across the technology landscape.',
    location: '789 Learning Street, Pune, Maharashtra, India',
    image: '/images/logo.avif'
  };
  
  
  const facultyMembers = [
    {
      name: 'Mr. Rajesh Sharma',
      title: 'Senior Instructor - Web Development',
      bio: 'Mr. Sharma has over 10 years of experience in web technologies, specializing in front-end development, JavaScript frameworks, and responsive design. He has successfully led numerous projects and workshops, helping students and professionals stay updated with the latest industry trends and best practices.',
      image: '/images/rajesh-sharma.jpg',
    },

   {
        name: 'Mr. Rahul Verma',
        title: 'Junior Instructor - Java Programming',
        bio: 'Mr. Verma is responsible for teaching core Java programming concepts and assisting with hands-on projects to help students build a strong foundation in Java development.',
        image: '/images/rahul-verma.jpg',
    },

      {
        name: 'Ms. Priya Mehta',
        title: 'Senior Instructor - Python Programming',
        bio: 'Ms. Mehta specializes in Python programming and automation, with 8 years of experience in data science, web development, and automation technologies, providing real-world insights to her students.',
        image: '/images/priya-mehta.webp',
      }
  
    
    ];
    

  

  return (

    <div className="about-us">
      <h1>About Us</h1>
      
      <section className="institute-details">
        <h2>{instituteDetails.name}</h2>
        <p>{instituteDetails.description}</p>
        <p><strong>Location:</strong> {instituteDetails.location}</p>
      </section>

      <section className="faculty-members">
        <h2>Meet Our Faculty</h2>
        {facultyMembers.map((faculty, index) => (
          <Faculty key={index} faculty={faculty} />
        ))}
      </section>

    </div>
  );

};

export default AboutUs;
