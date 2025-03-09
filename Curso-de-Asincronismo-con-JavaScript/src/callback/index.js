function sum(num1, num2){
    return num1 + num2;
}

function calc(num1,num2, callBack){
    //La funcion callBack se puede llamar de cualquier manera
    return callBack(num1, num2);
}

console.log(calc(2,2, sum));

setTimeout(function(){
    console.log('Hola JavaScript');}, 5000)



