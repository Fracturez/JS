// npm install prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

let a, b, t, s1, s2, luas, keliling;

a = parseFloat(prompt('Sisi atas      : '));
b = parseFloat(prompt('Sisi bawah     : '));
t = parseFloat(prompt('Tinggi         : '));
s1 = parseFloat(prompt('Sisi miring 1  : '));
s2 = parseFloat(prompt('Sisi miring 2  : '));

luas = 0.5 * (a + b) * t;
keliling = a + b + s1 + s2;

console.log(`Luas      : ${luas} cm²`);
console.log(`Keliling  : ${keliling} cm`);