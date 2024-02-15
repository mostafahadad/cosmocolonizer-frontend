import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import getPlanetImage from '../getPlanetImage';
import PlanetDetail from './PlanetDetail';

export default function Planet({planet, username}) {
  const isAllowedToInsertData = username !== 'viewer1' && username !== 'viewer2'
  return (
    <Card sx={{ width: 250, margin: '30px', marginTop: '20px'}}>
       <CardMedia
        sx={{ width: '100%', maxHeight:200 }}
        component="img"  
        src={getPlanetImage(planet.name)} 
        alt={planet.name} 
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {planet.name}
        </Typography>
        <PlanetDetail label="Temperature" value={planet.temperature} />
        <PlanetDetail label="Oxygen Volume" value={planet.oxygenVolume} />
        <PlanetDetail label="Water Volume" value={planet.waterVolume} />
        <PlanetDetail label="Gravity" value={planet.gravity} />
        <PlanetDetail label="Atmospheric Pressure" value={planet.atmosphericPressure} />
      </CardContent>

      { isAllowedToInsertData &&
      <CardActions style={{ justifyContent: 'center', marginTop: -20}}>
        <Link to={`/addPlanetData/${planet.id}`}> 
          <Button size="medium" variant="contained">Insert Data</Button>
        
        </Link>
      </CardActions>
      }
    </Card>
  );
}


