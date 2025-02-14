// variables
var a; // declarando
var b = 'bb'; // declaramos / asignamos
b = 'b'; // reasignacio
var a = 'aa'; // redeclaracion

// Global Scope
var fruit = ' Apple'; //Global
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}

bestFruit();


function countries(){
    country = 'Colombia'
    console.log(country);
}

countries();
console.log(country);

