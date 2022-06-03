import axios from "axios";
import endPoints from "../api";

const putProduct = async(body) =>{
    const config = {
        headers:{
            accept: '*/*',
            'Content-Type': 'application/json',
        }
        
    }
    const response = await axios.post(endPoints.products.putProduct, body, config);
    return response.data;
}


export{putProduct}