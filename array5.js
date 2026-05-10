const prompt = require("prompt-sync")({ sigint: true });

let bahan = [
    'Gula', 'Minyak', 'Beras', 'Tepung', 
];

bahan.splice(1, 1);
bahan.push('kopi');
console.log(bahan);




