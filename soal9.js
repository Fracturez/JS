// npm install prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

let alas, tinggi, sisi1, sisi2, luas, keliling;

alas = parseFloat(prompt('Alas    : '));
tinggi = parseFloat(prompt('Tinggi  : '));
sisi1 = parseFloat(prompt('Sisi 1  : '));
sisi2 = parseFloat(prompt('Sisi 2  : '));

luas = 0.5 * alas * tinggi;
keliling = alas + sisi1 + sisi2;

console.log(`Luas      : ${luas} cm²`);
console.log(`Keliling  : ${keliling} cm`);