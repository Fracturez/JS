const input = require("prompt-sync")({sigint: true});

let angka = [
    10, 20, 30, 40, 50
];
let total = 0; 

for (let i = 0; i < angka.length; i++ ) {
    total += angka[i]
}

console.log("Total angka", total); 



