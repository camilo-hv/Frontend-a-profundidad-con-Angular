function greeting() { 
    let userName = 'Camilo';
    function displayName() {
       return `Hello, ${userName}!`;
    }
    return displayName;
}

const Fn = greeting();
console.log(Fn);
console.log(Fn());