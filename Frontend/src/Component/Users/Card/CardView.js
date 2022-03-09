import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  // const userData = JSON.parse(localStorage.getItem('userInfo'));

  return (
    <>
  {/* {userData ? <h1>{userData.data.name}</h1> :  */}
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4, lg:4 }}>
            <Grid item xs={8} md={4} lg={3}>
        <Card sx={{ maxWidth: 345 }}>
         <img src="/product-image/1.jpg" alt="" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </Grid>

        <Grid item xs={8} md={4} lg={3}>
        <Card sx={{ maxWidth: 345 }}>
         <img src="/product-image/1.jpg" alt="" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </Grid>

        <Grid item xs={8} md={4} lg={3}>
        <Card sx={{ maxWidth: 345 }}>
         <img src="/product-image/1.jpg" alt="" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </Grid>


        <Grid item xs={8} md={4} lg={3}>
        <Card sx={{ maxWidth: 345 }}>
         <img src="/product-image/1.jpg" alt="" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </Grid>


        
        </Grid>
  {/* } */}
  </>
      );
    }
    
