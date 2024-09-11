

 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import AboutUs from './Component/AboutUs';

 import CoursesDetails from './Component/CoursesDetails';
import Footer from './Component/footer';
 import Navbar from './Component/navigation';
 import Contact from './Component/Contact';
 import Feedback from './Component/Feedback';

import HomePage from './Component/home';
 import AdmissionPage from './Component/AdmissionPage1';
import Login from './Component/Login';
import Register from './Component/Register';

function App() {
  return (
    <div>
    
{/* <HomePage/> */}
{/* <Navbar/> */}
{/* <AboutUs/> */}
{/* <AdmissionPage/> */}
{/* <CoursesDetails/> */}
{/* <Footer/> */}


      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesDetails />} />
        <Route path="/admission" element={<AdmissionPage/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
