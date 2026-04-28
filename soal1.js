//npm install prompt-sync

const prompt = require('prompt-sync')({ sigint: true });
let sisi, luas, keliling;
sisi = parseFloat(prompt('sisi : '));
luas = sisi * sisi;
keliling = 4 * sisi;

console.log(`luas     : ${luas} cm²` );
console.log(`keliling : ${keliling} cm` );