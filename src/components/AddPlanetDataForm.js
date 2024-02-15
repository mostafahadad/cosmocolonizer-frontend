import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, TextField, Button, CardActions, CardMedia } from '@mui/material';
import { getPlanets, updatePlanet } from '../Services/planetService';
import keycloak from "../keycloak";
import getPlanetImage from '../getPlanetImage';
import FormField from './FormField';

export default function AddPlanetDataForm({ planetId, onPlanetNameUpdate }) {
  const [planetData, setPlanetData] = useState({
    name: '',
    temperature: '',
    oxygenVolume: '',
    waterVolume: '',
    gravity: '',
    atmosphericPressure: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlanetData = async () => {
      try {
        const planets = await getPlanets(keycloak);
        const id = parseInt(planetId);
        const planet = planets.find(p => p.id === id);
        if (planet) {
          setPlanetData(planet);
          onPlanetNameUpdate(planet.name); 
        } else {
          console.error('Planet not found');
        }
      } catch (error) {
        console.error('Error fetching planet data', error);
      }
    };

    fetchPlanetData();
  }, [planetId, onPlanetNameUpdate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlanetData(prevData => ({
      ...prevData,
      [name]: value === '' ? null : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePlanet(keycloak, { ...planetData, id: planetId });
      alert('Planet data updated successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error updating planet data', error);
      alert('Error updating planet data. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px', marginTop: '-30px' }}>
      <Card style={{ display: 'flex', flexDirection: 'row', maxWidth: 600, margin: '20px', height: 'fit-content' }}>
        <CardContent style={{ flex: '1' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
              <FormField label="Temperature" fieldName="temperature" value={planetData.temperature} handleChange={handleChange}/>
              <FormField label="Oxygen Volume" fieldName="oxygenVolume" value={planetData.oxygenVolume} handleChange={handleChange}/>
              <FormField label="Water Volume" fieldName="waterVolume" value={planetData.waterVolume} handleChange={handleChange}/>
              <FormField label="Gravity" fieldName="gravity" value={planetData.gravity} handleChange={handleChange}/>
              <FormField label="Atmospheric Pressure" fieldName="atmosphericPressure" value={planetData.atmosphericPressure} handleChange={handleChange}/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
              <Button type="submit" variant="contained">Update Data</Button>
            </div>
          </form>
        </CardContent>
        <CardContent style={{ flex: '1' }}>
          <img src={getPlanetImage(planetData.name)} alt={planetData.name} style={{ width: '100%', height: 'auto' }} />
        </CardContent>
      </Card>
    </div>
  );
}