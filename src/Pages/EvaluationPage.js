import NavBar from "../components/NavBar"
import keycloak from "../keycloak";
import Evalutation from "../components/Evaluation";
import { Typography } from "@mui/material";

export default function EvaluationPage({username}){
    const logout = () => {
        keycloak.logout();
      };

    return(
        <div>
            <NavBar username={username} onLogout={logout}/>
            <Typography variant="h6" style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
                The best planet for colonization is: 
            </Typography>
            <Evalutation keycloak={keycloak} username={username} />
        </div>
    )
}