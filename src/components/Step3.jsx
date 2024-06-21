import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Step3 = ({ formData ,handleSubmit}) => {
  const navigate=useNavigate();
  const handleBack = () => {
    navigate('/step2');
  };

  return (
    <div className="step">
      <h2>Step 3: Confirmation</h2>
      <Card>
        <Card.Body>
          <Card.Title>Review Your Information</Card.Title>
          <Card.Text>
            <strong>Name:</strong> {formData.name}<br />
            <strong>Email:</strong> {formData.email}<br />
            <strong>Phone:</strong> {formData.phone}<br />
            <strong>Address Line 1:</strong> {formData.addressLine1}<br />
            <strong>Address Line 2:</strong> {formData.addressLine2}<br />
            <strong>City:</strong> {formData.city}<br />
            <strong>State:</strong> {formData.state}<br />
            <strong>Zip Code:</strong> {formData.zipCode}
          </Card.Text>
          <Button variant="secondary" onClick={handleBack}>
            Back
          </Button>
          <Button variant="primary" className="ml-2" onClick={handleSubmit}>
            Submit
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Step3;
