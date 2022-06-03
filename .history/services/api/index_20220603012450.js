const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
    auth: {
        login: `${API}/api/${VERSION}/auth/login`,
        profile: `${API}/api/${VERSION}/auth/profile`
    },
    categories:{
        getCategories: `${API}/api/${VERSION}/categories`,
        postCategories: `${API}/api/${VERSION}/categories`,
        getCategorie: (id) =>  `${API}/api/${VERSION}/categories/${id}`,
        putCategorie: (id) =>  `${API}/api/${VERSION}/categories/${id}`,
        getCategorieProducts: (id) =>  `${API}/api/${VERSION}/categories/${id}/products`
    },
    files:{
        postFiles:  `${API}/api/${VERSION}/files/upload`,
        getFile: (filename) =>  `${API}/api/${VERSION}/files/${filename}`,
    },
    products: {
        getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset} `,
        putProducts:  `${API}/api/${VERSION}/products/`,
        getProduct: (id) =>  `${API}/api/${VERSION}/products/${id}`,
        updateProduct: (id) =>  `${API}/api/${VERSION}/products/${id}`,
        deleteProduct: (id) =>  `${API}/api/${VERSION}/products/${id}`,
    },
    users: {
        getUsers:  `${API}/api/${VERSION}/users/`,
        postUsers:  `${API}/api/${VERSION}/users/`,
        getProduct: `${API}/api/${VERSION}/users/is-available`,
    }

};

export default endPoints;