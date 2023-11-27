import { Button, Stack } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { Link } from 'react-router-dom';
import AutoGrid from './Footer';
import './PastVisits.css';
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid() {
  return (
    <div>
    <div className='f'>
        <div>
        <Stack spacing={2} direction="row">
    <Link to="/ho">
      <Button variant="contained">Home</Button>
      </Link> 
      <Link to="/bo">
      <Button variant="contained">Bookings</Button>
      </Link>
      
    </Stack>
        </div>
        <h1>Your History with us</h1>
        <hr></hr>
            <div>
                <Paper sx={{p: 2, margin: 'auto', maxWidth: 800, flexGrow: 1,
                        backgroundColor: (theme) =>theme.palette.mode === 'dark' ? '#1A2027' : '#fff',}}>
                    <Grid container spacing={1.5}>
                        <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            <Img alt="complex" src="https://www.pandotrip.com/wp-content/uploads/2018/03/The-Great-Sphinx-Egypt.jpg" />
                        </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                            <Typography gutterBottom variant="arial" component="div">
                                <h2>Pyramid of Giza, Egypt</h2>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                5Days/4Nights
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Delhi(DEL) --- Cairo(CAI)
                            </Typography>
                            </Grid>
                            <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                For more Information
                            </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div">
                            
                            </Typography>
                        </Grid>
                        </Grid>
                    </Grid>
                    </Paper>
            </div>
            <br></br>
            <div>
                    <Paper
                    sx={{p: 2, margin: 'auto', maxWidth: 800, flexGrow: 1,
                        backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                            <Typography gutterBottom variant="arial" component="div">
                                <h2>Taj Mahal,India

                                </h2>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                3Days/2Nights
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Coimbatore(CBM) --- Delhi(DEL)
                            </Typography>
                            </Grid>
                            <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                For more Information
                            </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div">
                            
                            </Typography>
                        </Grid>
                        </Grid>
                        <Grid item>
                        <ButtonBase sx={{ width: 158, height: 158 }}>
                            <Img alt="complex" src="https://i.insider.com/5d38929736e03c2138374645?width=600&format=jpeg&auto=webp" />
                        </ButtonBase>
                        </Grid>
                    </Grid>
                    </Paper>
            </div>
            <br></br>
            <div>
                    <Paper
                    sx={{p: 2, margin: 'auto', maxWidth: 800, flexGrow: 1,
                        backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',}}>
                    <Grid container spacing={2}>
                        <Grid item>
                        <ButtonBase sx={{ width: 158, height: 158 }}>
                            <Img alt="complex" src="https://www.niagarafallstourism.com/site/assets/files/8781/nft_2023_summer_-_falls-80.jpg" />
                        </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                            <Typography gutterBottom variant="arial" component="div">
                                <h2>Niagra Falls, Canada</h2>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                4Days/3Nights
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Bangalore(BGL) --- Buffalo Niagara(BFL)
                            </Typography>
                            </Grid>
                            <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                For more Information
                            </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div">
                            
                            </Typography>
                        </Grid>
                        </Grid>
                    </Grid>
                    </Paper>
            </div>
           
            <br></br><br></br><br>
            </br>
        </div>
            <div>
                    <AutoGrid/>
            </div>
        </div>
    );
}