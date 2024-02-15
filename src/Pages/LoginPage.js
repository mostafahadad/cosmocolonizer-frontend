import keycloak from "../keycloak";
import React from "react";
import { Button, Typography } from '@mui/material';
import Background from '../images/background.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function LoginPage() {
    const login = () => {
        keycloak.login();
    };

    const backgroundStyle = {
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '97vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div style={backgroundStyle}>
            <Card sx={{ textAlign: 'center', width: 550, mb:10}}> 
                <CardContent>
                <Typography variant="h4" gutterBottom>
                    Welcome to Cosmo Colonizer
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Join us in our mission to find the best planet for humanity's next chapter. Your expertise will help shape the future of space colonization.
                </Typography>
                <Button variant="contained" color="primary" onClick={login}>
                    Login to Start Your Journey
                </Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default LoginPage;
