import React from 'react';
import { Form } from 'react-bootstrap';

const ErrorMessage = ({ message }) => {
  return (
    <Form.Control.Feedback type="invalid">
      {message}
    </Form.Control.Feedback>
  );
};

export default ErrorMessage;
