import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const BookingComp = (props) => {
    const navigate = useNavigate()
    const { bookingobj } = props
    console.log(bookingobj)

    const handlePaynow = () => {
        const userResponse = window.confirm(`Payment of RS ${bookingobj.ammount} is done. Do you want to check in to the hotel now?`);

        if (userResponse) {
            localStorage.setItem("bookingDetails", JSON.stringify(bookingobj));

            navigate('/check-in-hotel')
        } else {
            // User clicked "No"
            console.log("User declined to check in.");
        }
    }
    return (
        <div>
            <div style={{ marginLeft: '100px', marginTop: '30px' }}>
                <p>Booking Details</p>

                <div>
                    <div>Customer Name : {bookingobj.clientname}</div>
                    <div>City: {bookingobj.cityName}</div>
                    <div>Check-In Date: {bookingobj.ckeckindate}</div>
                    <div>Check-Out Date: {bookingobj.checkoutedate}</div>
                    <div>Guests: {bookingobj.guest}</div>
                    <div>Rooms: {bookingobj.rooms}</div>
                    <div>Total Ammount : {bookingobj.ammount}</div>
                </div>

                <p className='mt-5'>Pay Now and Conform your booking</p>

                <div>
                    <Button variant='contained' onClick={handlePaynow}>Pay Now {bookingobj.ammount}</Button>
                </div>
            </div>
        </div>
    )
}
