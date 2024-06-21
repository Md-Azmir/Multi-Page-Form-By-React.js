import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Navigation from './components/Navigation';
import './styles.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: ''
  });
  const [change,setChange]=useState(false)
  function handleSubmit(){
    setChange(!change)
    alert('Form submitted successfully!');
  }

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('formData'));
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [change]);

  return (
    <div className='app'>
    <Navigation formData={formData}/>
    <Routes>
          <Route path="/" exact element={<Step1 formData={formData} setFormData={setFormData}/>} />
          <Route path="/step2" element={<Step2 formData={formData} setFormData={setFormData}/>} />
          <Route path="/step3" element={<Step3 formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>} />
    </Routes>
    </div>
  );
};

export default App;
