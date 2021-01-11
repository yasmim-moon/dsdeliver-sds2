import axios from "axios";
import { OrderPlayload } from "./Orders/types";

const  API_URL = 'http://localhost:8080';
//requisação nessa url que irá buscar os produtos
const mapboxToken = process.env.REACT_APP_ACESS_TOKEN_MAP_BOX;

export function fetcProducts(){
    return axios(`${API_URL}/products`)
    //conctenar uma variavel com uma string
}

export function fetchLocalMapBox(local: string){
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export function saveOrder(payload: OrderPlayload){
    return axios.post(`${API_URL}/orders`, payload)
}
//process.env.REACT_APP_API_URL;