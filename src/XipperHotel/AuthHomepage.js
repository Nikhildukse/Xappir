import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Select from 'react-select';
import { TextField } from '@mui/material';
import moment from 'moment';
import { MenuItem, Card, CardContent } from "@mui/material";
import { BookingComp } from './BookingComp';
const AuthHomepage = () => {

  const [roomValue, setRoomValue] = React.useState(1)
  const [guestValue, setguestValue] = React.useState(1)
  const [cityVal, setCityVal] = React.useState()
  const [serch, setSearch] = React.useState(0)
  const [show, setShow] = React.useState(1)

  const [bookingobj, setBookingObj] = React.useState({
    cityName: '',
    ckeckindate: moment().format('YYYY-MM-DD'),
    checkoutedate: moment().add(1, 'days').format('YYYY-MM-DD'),
    rooms: '1',
    guest: '1',
    clientname: '',
    ammount: ''
  })

  console.log(bookingobj)

  const handleRoomsDec = () => {
    setRoomValue(roomValue - 1)
    setBookingObj({
      ...bookingobj,
      rooms: (roomValue - 1)
    })
  }

  const handleRoomsInc = () => {
    setRoomValue(roomValue + 1)
    setBookingObj({
      ...bookingobj,
      rooms: (roomValue + 1)
    })
  }

  const handleGuestDec = () => {
    setguestValue(guestValue - 1)
    setBookingObj({
      ...bookingobj,
      guest: (roomValue - 1)
    })
  }

  const handleGuestInc = () => {
    setguestValue(guestValue + 1)
    setBookingObj({
      ...bookingobj,
      guest: (roomValue + 1)
    })
  }

  const options = [
    {
      value: 1,
      label: 'Pune'
    },
    {
      value: 2,
      label: 'Mumbai'
    },
    {
      value: 3,
      label: 'Nagpur'
    },
    {
      value: 4,
      label: 'Dhule'
    },
    {
      value: 5,
      label: 'Vasai'
    }
  ]

  const hotelList = [
    {
      cityId: 1,
      hotelname: 'Redisun blue',
      price: 1000,
      image: ''
    },
    {
      cityId: 2,
      hotelname: 'Taj -Altaf',
      price: 1000,
      image: ''
    },
    {
      cityId: 2,
      hotelname: 'Ashok Inn',
      price: 1000,
      image: ''
    },
    {
      cityId: 3,
      hotelname: 'Arebian Taj',
      price: 1000,
      image: ''
    },
    {
      cityId: 3,
      hotelname: 'haldirams',
      price: 1000,
      image: ''
    },
    {
      cityId: 4,
      hotelname: 'City hotel',
      price: 1000,
      image: ''
    },
    {
      cityId: 4,
      hotelname: 'Le - meriadian',
      price: 1000,
      image: ''
    }
  ]



  const handleCity = (value) => {
    setCityVal(value.value)
    setBookingObj({
      ...bookingobj,
      cityName: (value.label)
    })
  }

  const filteredHotels = hotelList.filter((hotel) => hotel.cityId === cityVal);

  const handleSearch = () => {
    setSearch(1)
  }

  const handleObboking = (e) => {
    setBookingObj({
      ...bookingobj,
      [e.target.name]: e.target.value
    })
  }

  const handleBooknow = (e) => {
    setBookingObj({
      ...bookingobj,
      ammount: (e.target.value)
    })
    setShow(show + 1)
  }

  return (
    <div className='m-0 p-0'>
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

      <div className='d-flex justify-content-center mt-3'>
        <div className='shadow-sm' style={{ width: "100%", border: '0.5px solid gray', borderRadius: '5px' }}>
          <div className='row'>
            <div className='m-1 col-md-3' style={{ width: '200px' }}>
              <Select
                className='w-40'
                placeholder={'Select City'}
                options={options}
                value={options.value}
                onChange={(selectedcity) => handleCity(selectedcity)}
                isSearchable
              //menuPlacement={data.quotetabs !== 0 ? 'top' : 'bottom'}
              />

            </div>
            <div className='col-md-3 m-1'>
              <TextField
                onChange={handleObboking}
                name='ckeckindate'
                sx={{ width: '150px' }}
                type="date"
                size="small"
                id="username"
                variant="outlined"
                className="mb-2 me-2"
                defaultValue={moment().format('YYYY-MM-DD')}
              />
              <TextField
                onChange={handleObboking}
                name='checkoutedate'
                sx={{ width: '150px' }}
                type="date"
                size="small"
                id="username"
                variant="outlined"
                className="mb-2 me-2"
                defaultValue={moment().add(1, 'days').format('YYYY-MM-DD')}
              />
            </div>

            <div className='col-md-2 m-1'>
              <div className='m-1 d-flex justify-content-inline'>
                <p>Rooms</p>
                <div className='ms-2'>
                  <span> <button value={1} onClick={handleRoomsDec} className='fw-semibold ' style={{ border: '1px solid gray', width: '30px' }}> - </button> <span className='ms-1 me-1'> {roomValue} </span> <button onClick={handleRoomsInc} className='fw-semibold ' style={{ border: '1px solid gray', width: '30px' }}> + </button> </span>
                </div>
              </div>
            </div>

            <div className='col-md-2 m-1'>
              <div className='m-1 d-flex justify-content-inline'>
                <p>Guest</p>
                <div className='ms-3'>
                  <span> <button onClick={handleGuestDec} className='fw-semibold ' style={{ border: '1px solid gray', width: '30px' }}> - </button> <span className='ms-1 me-1'> {guestValue} </span> <button onClick={handleGuestInc} className='fw-semibold ' style={{ border: '1px solid gray', width: '30px' }}> + </button> </span>
                </div>
              </div>
            </div>
            <div className='col-md-2 m-1'>
              <div className='m-1 d-flex justify-content-inline'>
                <TextField
                  onChange={handleObboking}
                  label="Full Name"
                  name='clientname'
                  sx={{ width: '150px' }}

                  size="small"
                  id="username"
                  variant="outlined"
                  className="mb-2 me-2"

                />

              </div>
            </div>

            <div className='col-md-1 m-1'>
              <div className='m-1 d-flex justify-content-inline'>

                <div className='ms-3'>
                  <button onClick={handleSearch}>SEARCH</button>
                </div>
              </div>
            </div>


          </div>

        </div>

      </div>
      {
        show == 1 && (
          <div className='d-flex justify-content-center mt-3'>
            <div className='shadow-sm' style={{ width: "90%", border: '0.5px solid gray', borderRadius: '5px' }}>
              <div style={{ padding: "20px" }}>
                {
                  serch == 1 && (
                    <div>
                      {filteredHotels.length > 0 ? (
                        filteredHotels.map((hotel, index) => (
                          <Card key={index} sx={{ marginBottom: 2 }}>
                            <CardContent>
                              <Typography variant="h6">{hotel.hotelname}</Typography>
                              <Typography variant="body2">Price: ₹{hotel.price}</Typography>
                            </CardContent>
                            <div style={{ marginLeft: '1000px' }}>
                              <Button variant='contained' className='mb-2' value={hotel.price} onClick={handleBooknow}>Book Now</Button>
                            </div>
                          </Card>
                        ))
                      ) : (
                        <Typography>No hotels found for the selected city.</Typography>
                      )}
                    </div>
                  )
                }
              </div>
            </div>

          </div>
        )
      }
      {
        show == 2 && (
          <BookingComp bookingobj={bookingobj} />
        )
      }

    </div>
  )
}

export default AuthHomepage