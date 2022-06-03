import axios from "axios";
import endPoints from "../api";

const addProduct = async (body) => {
    const config = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post(endPoints.products.putProducts, body, config);
    return response.data;
  };

  const deleteProduct = async (id) =>{
      const response = await axios.delete(endPoints.products.deleteProduct(id));
      return response.data
  }

  const updateProduct = async (id) => {
    const config = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.put(endPoints.products.updateProduct(id), body, config);
    return response.data;
  };
  
  export { addProduct, deleteProduct, updateProduct};