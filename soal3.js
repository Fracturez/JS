// npm install prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

let sisi, volume, luas;

sisi = parseFloat(prompt('Sisi : '));
volume = sisi ** 3;
luas = 6 * sisi ** 2;

console.log(`Volume          : ${volume} cm³`);
console.log(`Luas Permukaan  : ${luas} cm²`);