import React, { useState } from 'react';
import { getEvaluation } from '../Services/planetService';
import { Button, Card, CardContent, Typography, Grid, Box } from '@mui/material';

export default function Evaluation({ keycloak, username }) {
    const [evaluationResult, setEvaluationResult] = useState(null);
    const [showResults, setShowResults] = useState(false);

    // Check if the user is not superadmin
    if (username !== "superadmin") {
        return (
            <Typography variant="h6" style={{ textAlign: 'center', marginTop: '20px', color: 'red' }}>
                {username} does not have access to the evaluation.
            </Typography>
        );
    }

    const handleClick = () => {
        if (keycloak && keycloak.authenticated) {
            getEvaluation(keycloak).then(data => {
                setEvaluationResult(data);
                setShowResults(true);
            }).catch(error => {
                console.error('Error in evaluation', error);
            });
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            {!showResults &&
                <Button variant="contained" color="primary" onClick={handleClick} sx={{ marginBottom: '20px' }}>
                    Evaluate Planets
                </Button>
            }
            {showResults && evaluationResult && (
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} md={4}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <CardContent>
                                <Typography variant="h5" component="div"  style={{ marginBottom: '20px' }}>
                                    {evaluationResult.bestPlanet.name}
                                </Typography>
                                {evaluationResult.bestPlanet.imageUrl && (
                                    <img src={evaluationResult.bestPlanet.imageUrl} alt={evaluationResult.bestPlanet.name} style={{ width: '100%', height: 'auto' }} />
                                )}
                                <Typography>
                                    Temperature: {evaluationResult.bestPlanet.temperature}°C
                                </Typography>
                                <Typography>
                                    Oxygen Volume: {evaluationResult.bestPlanet.oxygenVolume}
                                </Typography>
                                <Typography>
                                    Water Volume: {evaluationResult.bestPlanet.waterVolume}
                                </Typography>
                                <Typography>
                                    Gravity: {evaluationResult.bestPlanet.gravity}
                                </Typography>
                                <Typography>
                                    Atmospheric Pressure: {evaluationResult.bestPlanet.atmosphericPressure}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Evaluation Explanation
                                </Typography>
                                {evaluationResult.explanation.split('\n').map((line, index) => (
                                    <Typography key={index}>{line}</Typography>
                                ))}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            )}
        </Box>
    );
}
