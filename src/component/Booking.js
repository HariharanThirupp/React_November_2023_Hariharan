import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Booking.css';
import SwapHorizontalCircleSharpIcon from '@mui/icons-material/SwapHorizontalCircleSharp';
import { Link } from 'react-router-dom';
import AutoGrid from './Footer';
import { Stack } from '@mui/material';
const FlightBookingComponent = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);

  const handleSearch = () => {
    // Implement your flight search logic here
    console.log('Searching for flights...');
  };

  return (
    <div>
    <div className='d' >
      <div className='n'>
      <Stack spacing={2} direction="row">
    <Link to="/ho">
      <Button variant="contained">Home</Button>
      </Link> 
      <Link to="/vi">
      <Button variant="contained">Past Travels</Button>
      </Link>
      
    </Stack>
            <hr></hr>
      </div>
        <div className='ali'>
      <h2>Flight Booking</h2>
      <br></br>
      <br></br>
      <br></br>
      <TextField
        label="Origin"
        variant="outlined"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
      />
      <SwapHorizontalCircleSharpIcon fontSize='large'/>
      <TextField
        label="Destination"
        variant="outlined"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <p></p>
      <TextField
        label="Departure Date"
        type="date"
        variant="outlined"
        value={departureDate}
        onChange={(e) => setDepartureDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Return Date"
        type="date"
        variant="outlined"
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Passengers"
        type="number"
        variant="outlined"
        value={passengerCount}
        onChange={(e) => setPassengerCount(e.target.value)}
      />
      <p>

      </p>
      <Link to="/ho">
      <Button variant="contained" onClick={handleSearch}>
        Back
      </Button></Link>
      <Button variant="contained" onClick={handleSearch}>
        Search Flights
      </Button>
      </div>
      
    </div>
      <div>
      <AutoGrid/></div>
      </div>
  );
};

export default FlightBookingComponent;
