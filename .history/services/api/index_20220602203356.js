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
    products: {
        getProducts:  `${API}/api/${VERSION}/products/`,
        postProducts:  `${API}/api/${VERSION}/products/`,
        getProduct: (id) =>  `${API}/api/${VERSION}/products/${id}`,
        putProduct: (id) =>  `${API}/api/${VERSION}/products/${id}`,
        deleteProduct: (id) =>  `${API}/api/${VERSION}/products/${id}`,
    },

};