import keycloak from "../keycloak"
import { useEffect, useState } from "react";
import { addUser } from "../Services/userService";
import { getPlanets } from "../Services/planetService"; 
import Planet from "../components/Planet";
import NavBar from "../components/NavBar";

function HomePage({username}){
    const logout = () => {
        keycloak.logout()
    }

    const [planets, setPlanets] = useState([])

    useEffect(() => {
        if (keycloak.authenticated) {
            addUser(keycloak).then(userData => {
                console.log("User data:", userData);
            }).catch(error => {
                console.error("Error adding user:", error);
            });
            
            getPlanets(keycloak).then(planetData => {
                console.log("Planet data:", planetData);
                setPlanets(planetData)
            }).catch(error => {
                console.error("Error fetching planets:", error);
            });
        }
    }, [keycloak, keycloak.authenticated]);

    return(
    <div>
        <NavBar username={username} onLogout={logout} />
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
            {planets.map(planet => (
                <Planet username={username} key={planet.id} planet={planet} />
            ))}
        </div>
    </div>
    )
}

export default HomePage