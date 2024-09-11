import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admissionpage.css'; // Include custom CSS for additional styling
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AdmissionPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [courseName, setCourseName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [admissionDate, setAdmissionDate] = useState('');
  const [cardDetails, setCardDetails] = useState({});
  const [upiDetails, setUpiDetails] = useState({});
  const [cashDetails, setCashDetails] = useState({ amount: '' });
  const [error, setError] = useState('');

  const navigate = useNavigate();
 const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !mobileNumber || !studentClass || !courseName || !address || !paymentMethod) {
      alert("Please fill all the required fields.");
      return;
    }

    // Create an object to hold all the form data
    const formData = {
      fullName,
      email,
      mobileNumber,
      studentClass,
      courseName,
      address,
      paymentMethod,
      admissionDate,
      cardDetails: paymentMethod === 'Card' ? cardDetails : null,
      upiDetails: paymentMethod === 'UPI' ? upiDetails : null,
      cashDetails: paymentMethod === 'Cash' ? cashDetails : null
    };

    try {
      // Send form data to backend using axios
    //   const response = await axios.post('http://localhost:8989/admissions/add', formData); // Replace with your backend URL
    //   if (response.status === 200) {
    //     alert('Admission is successfully done.');
    //     window.location.href = '/'; // redirect to homepage
    //   } else {
    //     alert('There was an issue with your admission.');

    //   }
    // } catch (error) {
    //   console.error('Error submitting admission:', error);
    //   alert('Error submitting the admission form.');
    // }
    await axios.post('http://localhost:8989/admissions/add', formData);
    alert('Admission is successfully done.!');
    navigate('/'); // Redirect to homepage
    console.log(formData.data)
  } catch (error) {
    console.error('There was an error submitting the form!', error);
    alert('Error submitting the admission form');
  }
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    setError('');
    setCardDetails({});
    setUpiDetails({});
    setCashDetails({ amount: '' });
  };

  const handleCardPayment = () => {
    if (!cardDetails.cardNumber || !cardDetails.expirationDate || !cardDetails.cvv) {
      setError('All fields are required for card payment.');
      return;
    }
    alert('Card payment successful!');
    setError('');
  };

  const handleUPIPayment = () => {
    if (!upiDetails.upiId || !upiDetails.amount) {
      setError('All fields are required for UPI payment.');
      return;
    }
    alert('UPI payment successful!');
    setError('');
  };

  const handleCashPayment = () => {
    if (!cashDetails.amount) {
      setError('Amount is required for cash payment.');
      return;
    }
    alert('Cash payment successful!');
    setError('');
  };

  return (
    <div className="admissionpage-container">
      <h1><b>Admission Form</b></h1>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Mobile Number:
          <input type="tel" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
        </label>
        <label>
          Class:
          <input type="text" value={studentClass} onChange={(e) => setStudentClass(e.target.value)} />
        </label>
        <label>
          Course Name:
          <select value={courseName} onChange={(e) => setCourseName(e.target.value)}>
            <option value="">Select a course</option>
            <option value="Full Stack Java Programming">Full Stack Java Programming</option>
            <option value="Full Stack Python">Full Stack Python</option>
            <option value="Full Stack Dot Net">Full Stack Dot Net</option>
            <option value="Full Stack Web Development">Full Stack Web Development</option>
            <option value="React Development">React Development</option>
            <option value="Android App Development">Android App Development</option>
            <option value="Data Science With Python">Data Science With Python</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Advance CIT">Advance CIT</option>
          </select>
        </label>
        <label>
          Address:
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <label>
          Payment Method:
          <div>
            <label>
          
              <input type="radio" value="Card" checked={paymentMethod === 'Card'} onChange={handlePaymentMethodChange} />
              Card
              
            </label>
            <label>
              <input type="radio" value="UPI" checked={paymentMethod === 'UPI'} onChange={handlePaymentMethodChange} />
              UPI
            </label>
            <label>
              <input type="radio" value="Cash" checked={paymentMethod === 'Cash'} onChange={handlePaymentMethodChange} />
              Cash
              
            </label>
            
          </div>
        </label>
      
        {paymentMethod === 'Card' && (
          <div>
            <input
              type="text" placeholder="Card Number" value={cardDetails.cardNumber || ''}
              onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
            />
            <input
              type="text" placeholder="Expiration Date" value={cardDetails.expirationDate || ''}
              onChange={(e) => setCardDetails({ ...cardDetails, expirationDate: e.target.value })}
            />
            <input
              type="text" placeholder="CVV" value={cardDetails.cvv || ''}
              onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
            />
            <button type="button" onClick={handleCardPayment}>Pay with Card</button>
          </div>
        )}
        {paymentMethod === 'UPI' && (
          <div>
            <input
              type="text" placeholder="UPI ID" value={upiDetails.upiId || ''}
              onChange={(e) => setUpiDetails({ ...upiDetails, upiId: e.target.value })}
            />
            <input
              type="number" placeholder="Amount" value={upiDetails.amount || ''}
              onChange={(e) => setUpiDetails({ ...upiDetails, amount: e.target.value })}
            />
            <button type="button" onClick={handleUPIPayment}>Pay with UPI</button>
          </div>
        )}
        {paymentMethod === 'Cash' && (
          <div>
            <input
              type="number" placeholder="Amount" value={cashDetails.amount || ''}
              onChange={(e) => setCashDetails({ ...cashDetails, amount: e.target.value })}
            />
            <button type="button" onClick={handleCashPayment}>Confirm Cash Payment</button>
          </div>
        )}
        {error && <p className="error-message">{error}</p>}
        <br></br>
        <label>
          Admission Date:
          <input type="date" value={admissionDate} onChange={(e) => setAdmissionDate(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AdmissionPage;
