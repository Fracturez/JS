//npm install prompt-sync
const prompt = require("prompt-sync")({sigint: true})

let diulang = true
do{ 
    let waktu = Number(prompt("Masukin waktu (detik): "));
    let jam = parseInt(waktu / 3600);
    let sisa = (waktu  % 3600);
    let menit = parseInt(sisa / 60);
    let detik = sisa % 60;

    console.log(`${jam}j : ${menit}m : ${detik}d :`);
    jawaban = prompt("Mau ulang? (y/n) ");
    diulang = jawaban == "y" || jawaban == "Y" ? true : false
} while(diulang)







    
