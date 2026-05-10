const prompt = require("prompt-sync")({ sigint: true });

let angka = [
    1,2,4,5
];

angka.splice(2, 0, 3);
console.log(angka);


