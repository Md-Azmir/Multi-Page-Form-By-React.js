import React from 'react';
import {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import ErrorMessage from './ErrorMessage';
import { useNavigate } from 'react-router-dom';

const Step1 = ({ formData, setFormData }) => {
  const { name, email, phone } = formData;
  const [errors, setErrors] = useState({});
  const navigate=useNavigate();
  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is required and must be valid';
      valid = false;
    }
    if (!phone.trim() || !/^[0-9]{10}$/.test(phone)) {
      newErrors.phone = 'Phone is required and must be a 10-digit number';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleNext = () => {
    if (validateForm()) {
      navigate('/step2')
    }
  };

  return (
    <div className="step">
      
      <h2>Step 1: Personal Information</h2>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            isInvalid={!!errors.name}
          />
          <ErrorMessage message={errors.name} />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            isInvalid={!!errors.email}
          />
          <ErrorMessage message={errors.email} />
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="tel"
            value={phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            isInvalid={!!errors.phone}
          />
          <ErrorMessage message={errors.phone} />
        </Form.Group>

        { <Button variant="primary" onClick={handleNext}>
          Next
        </Button> }
      </Form>
    </div>
  );
};

export default Step1;
