import axios from "axios";
import keycloak from "../keycloak";

export const getPlanets = async(keycloak) => {
    try{
        const response = await axios.get('http://localhost:5115/planet/getplanets', {
            headers: {
                'Authorization': `Bearer ${keycloak.token}`
            }
        })
        return response.data
    }

    catch(error){
        console.error('Error fetching planets', error)
        throw error
    }
}

export const updatePlanet = async(keycloak, planet) => {
    try{
        const response = await axios.put(`http://localhost:5115/planet/updateplanet/${planet.id}`, planet, {
            headers: {
                'Authorization': `Bearer ${keycloak.token}`
            }
        })
        return response.data
    }
    catch(error){
        console.error('Error updating planet', error)
        throw error
    }
}

export const getEvaluation = async(keycloak) => {
    try{
        const response = await axios.get("http://localhost:5115/planet/suggestbestplanet", {
            headers: {
                'Authorization': `Bearer ${keycloak.token}`
            }
        })
        return response.data
    }
    catch(error){
        console.error('Error fetching evaluation', error)
        throw error
    }
}