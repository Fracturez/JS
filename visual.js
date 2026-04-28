// Import prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

let x = parseInt(prompt("Masukkan nilai x: "));
let y = parseInt(prompt("Masukkan nilai y: "));
let z = parseInt(prompt("Masukkan nilai z: "));

let k = x + y - z;
let j = (x * y) - (z + x);

console.log("k =", k);
console.log("j =", j);


