const PRODUCTS = 'products';
const CATEGORIES = 'categories';

// fetch all products
export const getProducts = () => {
    let products = JSON.parse(localStorage.getItem(PRODUCTS));

    if (!products) {
        products = [];
    } else {
        console.log('products', products);
        products = JSON.parse(products);
    }

    return products;
}

export const fetchProductsApi = () => {
    return JSON.parse(localStorage.getItem('products')) || [];
};