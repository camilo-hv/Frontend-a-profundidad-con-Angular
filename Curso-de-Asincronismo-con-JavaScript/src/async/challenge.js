import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi){
    const response = await fetch(urlApi)
    const data = await response.json()
    return data;
}

const anotherFn = async () => {
    try{
        const products = await fetchData(`${API}/products`);
        const product = await fetchData(`${API}/products/${products[0].id}`);
        const category = await fetchData(`${API}/categories/${product.category.id}`);
    
        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch{
        console.log('Error');
    }
}

anotherFn(API);
