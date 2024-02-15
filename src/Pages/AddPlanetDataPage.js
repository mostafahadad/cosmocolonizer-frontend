import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import AddPlanetDataForm from '../components/AddPlanetDataForm';
import NavBar from '../components/NavBar';
import keycloak from "../keycloak";

function AddPlanetDataPage({ username }) {
  const { id } = useParams();
  const [planetName, setPlanetName] = useState('');

  // Callback function to update the planet name
  const updatePlanetName = (name) => {
    setPlanetName(name);
  };

  const logout = () => {
    keycloak.logout();
  };

  return (
    <div>
      <NavBar username={username} onLogout={logout} />
      <Typography variant="h4" component="h1" style={{ textAlign: 'center', margin: '20px 0' }}>
        {planetName}
      </Typography>
      <AddPlanetDataForm planetId={id} onPlanetNameUpdate={updatePlanetName} />
    </div>
  );
}

export default AddPlanetDataPage;
