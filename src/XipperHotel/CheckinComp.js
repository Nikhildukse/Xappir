import { AppBar, Box, Button, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios';
const CheckinComp = () => {
    const [error, setError] = useState()
    const localdata = JSON.parse(localStorage.getItem('bookingDetails') || '{}');
    const [status, setStatus] = useState()
    const [apiData , setApidata ] = useState({})
    const [formData, setFormData] = useState({

        "clientname": localdata.clientname,
        "ckeckindate": localdata.ckeckindate,
        "checkoutedate": localdata.checkoutedate,
        "guest": localdata.guest,
        "rooms": localdata.rooms,
        "adharno1": "",
        "adharno2": ""


    });
    console.log(apiData)
    const handleCheckin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/check-in', formData);
            console.log('Registration Success:', response.data);
            alert(`your Check in successful and Room No is ${101}`)
            setStatus(response.status)
            setApidata(response.data)

        } catch (err) {
            console.error('Registration Failed:', err);
            setError('Registration failed. Try again.');
        }
    }
    const handleAdhar = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            "clientname": localdata.clientname,
            "ckeckindate": localdata.ckeckindate,
            "checkoutedate": localdata.checkoutedate,
            "guest": localdata.guest,
            "rooms": localdata.rooms,

        })
    }
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            XIPPER
                        </Typography>
                        <Button color="inherit"><AccountCircleIcon /></Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <div>
                <p className='mt-2 fs-4'>Check In Hotel Online With Aadhar Number</p>

                <div>
                    <p className='ms-2'>Enter Adhar Number</p>

                    <TextField
                        onChange={handleAdhar}
                        name='adharno1'
                        sx={{ width: '200px' }}
                        label='Guest-1 '
                        size="small"
                        id="username"
                        variant="outlined"
                        className="mb-2 me-2 ms-2"

                    />
                    <TextField
                        onChange={handleAdhar}
                        name='adharno2'
                        sx={{ width: '200px' }}
                        label='Guest-2 '
                        size="small"
                        id="username"
                        variant="outlined"
                        className="mb-2 me-2 ms-2"

                    />
                </div>
                <div>{apiData.id}</div>
                <Button onClick={handleCheckin} className='m-2' variant='contained'>Check-In</Button>
            </div>
            {
                status == 200 && (
                    <div>
                       <div>{apiData?.id}</div>
                    </div>
                )
            }
        </div>
    )
}

export default CheckinComp