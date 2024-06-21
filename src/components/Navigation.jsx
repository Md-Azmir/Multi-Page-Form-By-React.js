import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Navigation = ({ formData }) => {
  const { name, email, phone, addressLine1, city, state, zipCode } = formData;

  return (
    <div className="navigation">
      <Link to="/" className="mr-2">
        <Button variant="outline-primary" disabled={!name || !email || !phone}>
          Personal Info
        </Button>
      </Link>
      <Link to="/step2" className="mr-2">
        <Button variant="outline-primary" disabled={!addressLine1 || !city || !state || !zipCode}>
          Address Info
        </Button>
      </Link>
      <Link to="/step3">
        <Button variant="outline-primary" disabled={!name || !email || !phone || !addressLine1 || !city || !state || !zipCode}>
          Confirmation
        </Button>
      </Link>
    </div>
  );
};

export default Navigation;
