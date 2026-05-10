const prompt = require("prompt-sync")({ sigint: true });

let angka = [
    1, 2, 3, 4
];
let kali = angka.map(num => num * 2);
console.log("Hasil dikali dua:  ", kali);

