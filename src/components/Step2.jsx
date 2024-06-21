import React from 'react';
import { Form, Button } from 'react-bootstrap';
import ErrorMessage from './ErrorMessage';
import { useNavigate } from 'react-router-dom';

const Step2 = ({ formData, setFormData }) => {
  const { addressLine1, addressLine2, city, state, zipCode } = formData;
  const [errors, setErrors] = React.useState({});
  const navigate=useNavigate();
  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!addressLine1.trim()) {
      newErrors.addressLine1 = 'Address Line 1 is required';
      valid = false;
    }
    if (!city.trim()) {
      newErrors.city = 'City is required';
      valid = false;
    }
    if (!state.trim()) {
      newErrors.state = 'State is required';
      valid = false;
    }
    if (!zipCode.trim() || !/^[0-9]{5}$/.test(zipCode)) {
      newErrors.zipCode = 'Zip Code is required and must be a 5-digit number';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleNext = () => {
    if (validateForm()) {
      navigate('/step3')
    }
  };

  const handleBack = () => {
    navigate('/')
  };

  return (
    <div className="step">
      <h2>Step 2: Address Information</h2>
      <Form>
        <Form.Group controlId="addressLine1">
          <Form.Label>Address Line 1</Form.Label>
          <Form.Control
            type="text"
            value={addressLine1}
            onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
            isInvalid={!!errors.addressLine1}
          />
          <ErrorMessage message={errors.addressLine1} />
        </Form.Group>

        <Form.Group controlId="addressLine2">
          <Form.Label>Address Line 2</Form.Label>
          <Form.Control
            type="text"
            value={addressLine2}
            onChange={(e) => setFormData({ ...formData, addressLine2: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            value={city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            isInvalid={!!errors.city}
          />
          <ErrorMessage message={errors.city} />
        </Form.Group>

        <Form.Group controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            value={state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
            isInvalid={!!errors.state}
          />
          <ErrorMessage message={errors.state} />
        </Form.Group>

        <Form.Group controlId="zipCode">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control
            type="text"
            value={zipCode}
            onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
            isInvalid={!!errors.zipCode}
          />
          <ErrorMessage message={errors.zipCode} />
        </Form.Group>

        <Button variant="secondary" onClick={handleBack}>
          Back
        </Button>
        <Button variant="primary" className="ml-2" onClick={handleNext}>
          Next
        </Button>
      </Form>
    </div>
  );
};

export default Step2;
