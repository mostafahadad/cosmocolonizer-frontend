import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import { useKeycloak } from '@react-keycloak/web';
import AddPlanetDataPage from './Pages/AddPlanetDataPage';
import EvaluationPage from './Pages/EvaluationPage';

function App(){
  const { keycloak } = useKeycloak();
  return(
    <BrowserRouter>
      <Routes>
        <Route 
          path="/login"
          element={keycloak.authenticated ? <Navigate replace to="/" /> : <LoginPage />}
        />
        <Route 
          path="/"
          element={keycloak.authenticated ? <HomePage username={keycloak.tokenParsed.preferred_username}/> : <Navigate to="/login" />}
        />
        <Route 
          path="/addPlanetData/:id"
          element={keycloak.authenticated ? <AddPlanetDataPage username={keycloak.tokenParsed.preferred_username}/> : <Navigate to="/login" />}
        />
        <Route 
          path="/evaluation"
          element={keycloak.authenticated ? <EvaluationPage username={keycloak.tokenParsed.preferred_username}/> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;