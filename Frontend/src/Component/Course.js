import React from 'react';
import {Button, Col } from 'react-bootstrap';

function Course({ name, duration, fees, description, image, onApply }) {
  return (
    <Col md={3} className="mb-4"> {/* Use md={3} for 4 columns per row */}
      <div className="card shadow-sm h-100">
        <img src={image} alt={name} className="card-img-top" />
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text"><strong>Duration:</strong> {duration}</p>
          <p className="card-text"><strong>Fees:</strong> {fees}</p>
          <p className="card-text">{description}</p>
          <Button variant="primary" onClick={onApply}>Apply Now</Button>
        </div>
      </div>
    </Col>
  );
}

export default Course;
