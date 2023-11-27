import { Button, Grid, Link, TextField } from '@mui/material';
import Axios from 'axios';  // Import Axios
import * as React from 'react';

import './Regi.css';

function Regi() {
  const registerUser = async () => {
    try {
      
      const userData = {
        firstname: 'John',
        lastname:'Doe',
        email: 'john.doe@example.com',
        password: '123',
        
      };

      
      const response = await Axios.post('https://api.example.com/register', userData);
      
      console.log(response.data);

    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className='body4'>
      <br></br><br></br><br></br><br></br><br></br>
      <Grid container spacing={8}>
        <Grid item md={4}>

        </Grid>

        <Grid item md={4}>
          <div className='box1'>
            <br></br><br></br>
            <h2>Register</h2>
            <br></br>
            <TextField id="outlined-basic" label="First Name" variant="outlined" required /><br></br><br></br>
            <TextField id="outlined-basic" label="Last Name" variant="outlined" required /><br></br><br></br>
            <TextField id="outlined-basic" label="Email" variant="outlined" required /><br></br><br></br>
            <TextField id="outlined-basic" label="Password" variant="outlined" required /><br></br><br></br>
            <TextField id="outlined-basic" label="Re-Enter Password" variant="outlined" required /><br></br><br></br>
            <Link to="/ho" onClick={registerUser}>
            <Button variant="contained" >Register</Button>
            </Link>
            <br></br><br></br>
            <h4>
              Already have an Account
              <Link to='/lo'>Sign In</Link>
            </h4>
            <br></br><br></br>

          </div>
        </Grid>

      </Grid>
    </div>
  );
}

export default Regi;
