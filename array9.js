const prompt = require("prompt-sync")({ sigint: true });

let angka = [
    1, 2, 3, 4, 5, 6, 7, 8,
];
let genap = angka.filter( n => n % 2 === 0); 
console.log(genap);


