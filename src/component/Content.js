
import { Button, CardActionArea, CardActions, Rating, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import './Content.css';
import AutoGrid from './Footer';
export default function MultiActionAreaCard() {
  return (
    <div className='body3'>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='body'>
            <br></br><br></br>
            <Card sx={{ maxWidth: 1000 }}>
            <CardActionArea>
                <CardMedia component="img" height="250"
                image="https://www.wtravelmagazine.com/wp-content/uploads/2022/01/30.189.1-Hegra-experience-Saudi-Arabias-UNESCO-World-Heritage-Site.jpg" alt="Saudhi Arabia"/>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Saudi Arabia
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Tourism in Saudi Arabia still largely involves religious pilgrimages, there is growth in the leisure tourism sector.
                Saudi Arabia has a variety of museums ranging from historical museums, archeological museums, and cultural and scientific museumsIt is a nation-wide tourism initiative that aims at attracting local and international tourists. The seasons are organized in many Saudi cities at different times throughout the year
                </Typography>
                </CardContent>
            </CardActionArea>
            <div className='rate'>
                <Stack spacing={1} justifyContent={'right'}>
                <Rating name="half-rating-read" defaultValue={5.0} precision={0.5} readOnly />
                </Stack>
            </div>
            <CardActions>
            <Button size="medium" color="secondary">
                    Schedule
                </Button>
                <Button size="medium" color="secondary">
                    Details
                </Button>
                <Button size="medium" color="secondary">
                    Contact 
                </Button>
                <Button size="medium" color="secondary">
                    Share 
                </Button>
            </CardActions>
            
                <hr></hr>
                    
            <CardActionArea>
                <CardMedia
                component="img"
                height="300"
                image="http://t2.gstatic.com/images?q=tbn:ANd9GcRvbinIiu0QjdozRmIC1GB6fdLHaVkT6J6fmlGse0RZzSnjuFuNpXYTC1nUONRP3As5cIeG"
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Amsterdam, Netherlands
                </Typography>
                <Typography variant="body2" color="text.secondary">
                </Typography>
                </CardContent>
            </CardActionArea>
            <div className='rate'>
                <Stack spacing={1} justifyContent={'right'}>
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                </Stack>
            </div>
            <CardActions>
                <Button size="medium" color="secondary">
                    Schedule
                </Button>
                <Button size="medium" color="secondary">
                    Details
                </Button>
                <Button size="medium" color="secondary">
                    Contact 
                </Button>
                <Button size="medium" color="secondary">
                    Share 
                </Button>
            </CardActions>
            <hr></hr>
            <CardActionArea>
                <CardMedia
                component="img"
                height="300"
                image="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR-Nbu9wv3UudluGjs3pegVs46lOqI2HypmBuqYA-uwoNrijCxMN-neFaEgwqlrbr4Y"
                alt="green iguana"          />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Varanasi, India
                </Typography>
                <Typography variant="body2" color="text.secondary">
                
                </Typography>
                </CardContent>
            </CardActionArea>
            <div className='rate'>
                <Stack spacing={1} justifyContent={'right'}>
                <Rating name="half-rating-read" defaultValue={5.0} precision={0.5} readOnly />
                </Stack>
            </div>
            <CardActions>
                <Button size="medium" color="secondary">
                    Schedule
                </Button>
                <Button size="medium" color="secondary">
                    Details
                </Button>
                <Button size="medium" color="secondary">
                    Contact 
                </Button>
                <Button size="medium" color="secondary">
                    Share 
                </Button>
            </CardActions>
            <hr></hr>
            <CardActionArea>
                <CardMedia
                component="img"
                height="300"
                image="https://www.andbeyond.com/wp-content/uploads/sites/5/tigers-nest-paro-bhutan.jpg"
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Paro, Bhutan
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Paro is a town and seat of Paro District, in the Paro Valley of Bhutan. It is a historic town with many sacred sites and historical buildings scattered throughout the area. It is also home to Paro International Airport, Bhutan's sole international airport. Paro International Airport is served by Drukair.
                </Typography>
                </CardContent>
            </CardActionArea>
            <div className='rate'>
                <Stack spacing={1} justifyContent={'right'}>
                <Rating name="half-rating-read" defaultValue={4.0} readOnly />
                </Stack>
            </div>
            <CardActions>
                <Button size="medium" color="secondary">
                    Schedule
                </Button>
                <Button size="medium" color="secondary">
                    Details
                </Button>
                <Button size="medium" color="secondary">
                    Contact 
                </Button>
                <Button size="medium" color="secondary">
                    Share 
                </Button>
            </CardActions>
            <hr></hr>
            <CardActionArea>
                <CardMedia
                component="img"
                height="300"
                image="https://www.elevatebali.com/storage/8Ekg79L7uQKTbmkycZwD8g7IIv9JT2-metaNjM1YTI2MTI5YjA2ODcxMjc5NTM4MS5qcGc=-.jpg"
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Bali, Indonesia
                </Typography>
                <Typography variant="body2" color="text.secondary">
Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller offshore islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan to the southeast.                </Typography>
                </CardContent>
            </CardActionArea>
            <div className='rate'>
                <Stack spacing={1} justifyContent={'right'}>
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                </Stack>
            </div>
            <CardActions>
                <Button size="medium" color="secondary">
                    Schedule
                </Button>
                <Button size="medium" color="secondary">
                    Details
                </Button>
                <Button size="medium" color="secondary">
                    Contact 
                </Button>
                <Button size="medium" color="secondary">
                    Share 
                </Button>
            </CardActions>
            </Card>
            
        </div>
        <br></br>
        <hr></hr>
        <div>
            <AutoGrid/>
        </div>
    </div>
    
  );
}