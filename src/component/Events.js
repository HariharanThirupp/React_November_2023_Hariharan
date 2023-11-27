import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import './Events.css';
import { Link } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import AutoGrid from './Footer';
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid() {
  return (
    <div>
    <div className='i'>
        <div className='q'>
    
        <Stack spacing={2} direction="row">
    <Link to="/ho">
      <Button variant="contained">Home</Button>
      </Link> 
      <Link to="/vi">
      <Button variant="contained">Your Travels</Button>
      </Link>
      
    </Stack>
            <hr></hr>
        </div>
        <h1>Upcoming Global Events</h1>
            <div>
                <Link>
                    <Paper
                    sx={{p: 2, margin: 'auto', maxWidth: 800, flexGrow: 1,
                        backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',}}>
                    <Grid container spacing={2}>
                        <Grid item>
                        <ButtonBase sx={{ width: 158, height: 158 }}>
                            <Img alt="complex" src="https://www.skillboxes.com/media/event_cover/WTgyN2RUQjMwZ3lkVG8vaklLUCtzQT09/anUvZklscG9wVElZc1h0aTRJZmtGZz09/resize/1200x630/1699164725NIT1rf3Co2WTv7XK.jpg" />
                        </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                            <Typography gutterBottom variant="arial" component="div">
                                <h2>Era's Tour</h2>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                               2-JAN-2024
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Los Angeles, America
                            </Typography>
                            </Grid>
                            <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                
                            </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div">
                            
                            </Typography>
                        </Grid>
                        </Grid>
                    </Grid>
                    </Paper></Link>
            </div>
            <br></br>
            <div>
                <Link>
                    <Paper
                    sx={{p: 2, margin: 'auto', maxWidth: 800, flexGrow: 1,
                        backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                            <Typography gutterBottom variant="arial" component="div">
                                <h2>Christmas in Rome</h2>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                20-DEC-2023 to 31-DEC-2023
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Rome, Italy
                            </Typography>
                            </Grid>
                            <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                
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
                            <Img alt="complex" src="https://www.italymagazine.com/sites/default/files/2022-12/piazza-navona-christmas-market-rome.jpg" />
                        </ButtonBase>
                        </Grid>
                    </Grid>
                    </Paper></Link>
            </div>
            <br></br>
            <div>
                <Link>
                    <Paper
                    sx={{p: 2, margin: 'auto', maxWidth: 800, flexGrow: 1,
                        backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',}}>
                    <Grid container spacing={2}>
                        <Grid item>
                        <ButtonBase sx={{ width: 158, height: 158 }}>
                            <Img alt="complex" src="https://bl-i.thgim.com/public/migration_catalog/article18354515.ece/alternates/LANDSCAPE_1200/Devotees%20prepare%20rice%20dishes%20to%20offer%20to%20the%20Hindu%20Sun%20God%20as%20they%20attend%20Pongal%20celebrations%20early%20morning%20in%20Mumbai%2C%20India%2C%20January%2014%2C%202017.%20REUTERSShailesh%20Andrade" />
                        </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                            <Typography gutterBottom variant="arial" component="div">
                                <h2>Pongal, Madurai(India)</h2>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                            15-JAN-2023 to 18-JAN-2023
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            
                            </Typography>
                            </Grid>
                            <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                              
                            </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div">
                            
                            </Typography>
                        </Grid>
                        </Grid>
                    </Grid>
                    </Paper></Link>
            </div>
            <br></br>
            <div>
                <Link>
                <Paper
                    sx={{p: 2, margin: 'auto', maxWidth: 800, flexGrow: 1,
                        backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',}}>
                    <Grid container spacing={2}>
                        
                        <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                            <Typography gutterBottom variant="arial" component="div">
                                <h2>Chinese New Year</h2>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                10-FEB-2024
                            </Typography>
                            <Typography variant="body2" color="text.secondary">

                            </Typography>
                            </Grid>
                            <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                              
                            </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div">
                            
                            </Typography>
                        </Grid>
                        <Grid item>
                        <ButtonBase sx={{ width: 158, height: 158 }}>
                            <Img alt="complex" src="https://assets.editorial.aetnd.com/uploads/2010/02/lunarnewyearfestival.jpg" />
                        </ButtonBase>
                        </Grid>
                        </Grid>
                    </Grid>
                    </Paper>
                </Link>
            </div>
            <br></br>
            
        </div>
        <div>
            <AutoGrid/>
        </div>
        </div>
  );
}