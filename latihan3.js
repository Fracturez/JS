//npm install prompt-sync
const prompt = require("prompt-sync")({sigint: true})

let x = Number(prompt("Masukin angka 1: "));
let y = Number(prompt("Masukin angka 2: "));

//cara satu dengan menambah variable baru
//let z  = y;
//y = x;
//x = z;
//cara dua dengan aritmatika

// x = y + x; 
// y = x - y;
// x = x - y;

//cara ketiga dengan XOR
x = x ^ y; 
y = x ^ y; 
x = x ^ y;


console.log(`${x}, ${y}`); 

