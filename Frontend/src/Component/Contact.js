
import React, { useState } from 'react';// If using react-router-dom for navigation
import './Contact.css'; // Import the CSS file
 import { useNavigate } from 'react-router-dom'; // If using react-router-dom for navigation
import axios from 'axios'; // For making HTTP requests

const Contact = () => {

     const navigate = useNavigate();
    const [contact, setContact] = useState({
      name: '',
      email: '',
      message: '',
      phoneNumber: ''
    });
  
    const handleChange = (e) => {
      setContact({ ...contact, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // Sending the POST request to the backend
        await axios.post('http://localhost:8989/contacts/add', contact);
        alert('Thanks for Contacting Us, We Will Get Back to You');
         navigate('/'); // Redirect to homepage
      } catch (error) {
        console.error('There was an error submitting the form!', error);
        alert('Failed to send message. Please try again later.');
      }
    };
  

    return (
        <div className="contact-container">
            <div className="contact-row">
                <div className="contact-info">
                    <h1>Get in touch:</h1>
                    <p>Fill in the form to start a conversation</p>

                    <div className="contact-detail">
                        <svg
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="bi bi-chat-fill contact-icon"
                            width="24"
                            height="24"
                        >
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.092.532 4.057 1.457 5.794L0 24l6.312-1.657A11.949 11.949 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.817a9.805 9.805 0 01-5.308-1.554l-.379-.231-3.741.982.997-3.648-.246-.37A9.82 9.82 0 012.183 12C2.183 6.612 6.612 2.183 12 2.183S21.817 6.612 21.817 12 17.388 21.817 12 21.817zM17.47 14.992l-1.48-.421a1.09 1.09 0 00-.914.129l-.648.396c-1.157-.594-2.03-1.476-2.616-2.616l.396-.648a1.09 1.09 0 00.129-.914l-.421-1.48a1.088 1.088 0 00-1.065-.787h-1.69a1.09 1.09 0 00-1.09 1.09c0 4.317 3.509 7.826 7.826 7.826a1.09 1.09 0 001.09-1.09v-1.69a1.089 1.089 0 00-.787-1.065z"></path>
                        </svg>
                        <div>WhatsApp Us: +123 456 7890</div>
                    </div>

                    <div className="contact-detail">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            className="bi bi-telephone-fill contact-icon"
                            width="24"
                            height="24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>
                        <div>+91 1234567890</div>
                    </div>

                    <div className="contact-detail">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            className="bi bi-envelope-fill contact-icon"
                            width="24"
                            height="24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        <div>info@abcd.org</div>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                       
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            className="form-control "
                            value={contact.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group ">
                        
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="form-control "
                            value={contact.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group ">
                        
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Message"
                            className="form-control "
                            value={contact.message}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        
                        <input
                            type="tel"
                            name="phoneNumber"
                            id="phoneNumber"
                            placeholder="Telephone Number"
                            className="form-control "
                            value={contact.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="submit-button "
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;