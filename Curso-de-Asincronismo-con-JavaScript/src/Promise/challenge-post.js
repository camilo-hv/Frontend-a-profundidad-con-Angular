import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi){
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "My New Product",
    "price": 10,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placehold.co/600x400"]
  }


fetchData(`${API}/products`, data)
.then(response => response.json())
.then(data => console.log(data));