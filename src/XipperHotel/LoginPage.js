import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({

        "email": "",
        "password": "",

    });

    const handleLogin = async () => {

        try {
            const response = await axios.post('http://localhost:8080/api/login', formData);
            console.log('Registration Success:', response.data);
            if (response.status == 200) {
                navigate('/welcome-xipper')
            } else {
                alert('please enter valid credential')
            }


        } catch (err) {
            console.error('Registration Failed:', err);
            setError('Registration failed. Try again.');
        }
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <div className='d-flex flex-column shadow p-3 mt-5' style={{ width: '350px', borderRadius: '5px' }}>
                    <span className='fw-semibold mb-2'> Please Login </span>
                    <TextField size='small' id="username" name='email' label="Username" variant="outlined" className='mb-2' onChange={handleChange} />
                    <TextField size='small' id="password" label="Password" name='password' variant="outlined" onChange={handleChange} />

                    <Button sx={{ width: '320px' }} className='mt-2' variant='contained' onClick={handleLogin}>Login</Button>

                    <span style={{ fontSize: '11px' }} className='mt-1'>you dont have account    <Link to={'/register-page'}> Register your self</Link> </span>
                </div>
            </div>

        </div>
    )
}

export default LoginPage