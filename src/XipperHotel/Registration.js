import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    "name": "",
    "email": "",
    "password": "",
    "mobileno": ""
  });

  const [error, setError] = useState('');

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async () => {
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/createuser', formData);
      console.log('Registration Success:', response.data);
      if(response.status == 200 ){
        navigate('/login-page')
      }

    } catch (err) {
      console.error('Registration Failed:', err);
      setError('Registration failed. Try again.');
    }
  };

  return (
    <div className='d-flex justify-content-center'>
      <div className='d-flex flex-column shadow p-3 mt-5' style={{ width: '350px', borderRadius: '5px' }}>
        <span className='fw-semibold mb-2'>Please Register Yourself</span>
        <TextField size='small' name="fullName" label="Full Name" variant="outlined" className='mb-2' onChange={handleChange} />
        <TextField size='small' name="email" label="Email" variant="outlined" className='mb-2' onChange={handleChange} />
        <TextField size='small' name="mobileno" label="Contact No" variant="outlined" className='mb-2' onChange={handleChange} />
        <TextField size='small' name="password" type="password" label="Enter Password" variant="outlined" className='mb-2' onChange={handleChange} />
        <TextField size='small' name="confirmPassword" type="password" label="Re-Enter Password" variant="outlined" onChange={handleChange} />

        {error && <span style={{ color: 'red', fontSize: '12px' }}>{error}</span>}

        <Button sx={{ width: '320px' }} className='mt-2' variant='contained' onClick={handleSubmit}>
          Register
        </Button>

        <span style={{ fontSize: '11px' }} className='mt-1'>
          Already have an account? <Link to='/login-page'>Please Login here</Link>
        </span>
      </div>
    </div>
  );
};

export default Registration;
