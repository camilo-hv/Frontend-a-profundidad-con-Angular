// instalar XMLHttpRequest - npm i xmlhttprequest
const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelas.co/api/v1';

function fetchData(urlApi, callBack){
    let xhhtp = new XMLHttpRequest();
    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function (event){
        if (xhttp.readyState === 4 && xhttp.status === 200){
    // 0 → Se ha inicializado.
    // 1 → Loading (cargando).
    // 2 → Se ha cargado.
    // 3 → Procesamiento si existe alguna descarga.
    // 4 → Completado.
                callBack(null, JSON.parse(xhhtp.responseText));
        }
        else {
            const error = new Error('Error' + urlApi);
            return callBack(error, null);
        }
    }
    xhttp.send();
}