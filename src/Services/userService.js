import axios from "axios";
import keycloak from "../keycloak";

const API_URL = 'http://localhost:5115/user/adduser'

export const addUser = async (keycloak) => {
    try{
        const response = await axios.post(API_URL, {}, {
            headers: {
                'Authorization': `Bearer ${keycloak.token}`
            }
        })
        return response.data
    }
    catch (error){
        console.error('Error adding user:', error);
        throw error;
    }
}