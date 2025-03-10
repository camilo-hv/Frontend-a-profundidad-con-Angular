const PROMISE = new Promise(function (resolve, reject){
    resolve('Ey!');
});


const COWS = 9;

const COUNTCOWS = new Promise(function(resolve, reject){
    if(COWS > 10){
        resolve(`We have ${COWS} on the farm`);
    } else {
        reject("There is no cows on the farm");
    }
});

COUNTCOWS.then((result) => {//Resolve
    console.log(result);
}).catch((error) => {//Reject
    console.log(error);
}).finally(() => {//Finalización de la ejecución
    console.log("Finally")
});