// import React from 'react';
// import './navigation.css';
// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <img src="logo2.jpg" alt="Institute Logo" className="logo-img" />
//       </div>
//       <ul className="nav-links">
//         <li><a href="#home">Home</a></li>
//         <li><a href="#courses">Courses</a></li>
//         <li><a href="#admission">Admission</a></li>
//         <li><a href="#contact">Contact Us</a></li>
//         <li><a href="#feedback">Feedback</a></li>
//         <li><a href="#signup">Sign Up</a></li>
//         <li><a href="#login">Login</a></li>
//         <li><a href="#about">About Us</a></li>
//       </ul>
//     </nav>
//   );
// };
// export default Navbar;
import React from 'react';
import './navigation.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo2.jpg" alt="Institute Logo" className="logo-img" />
      </div>
      <ul className="nav-links">
        {/* Use Link instead of <a> */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/admission">Admission</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
