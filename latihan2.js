//npm install prompt-sync
//inputan hari
const prompt = require("prompt-sync")({sigint: true})

let diulang = true
do{ 
    let hari = Number(prompt("Masukin hari: "));
    let tahun = parseInt(hari / 360);
    let sisa = (hari  % 360);
    let bulan = parseInt(sisa / 30);
    let minggu = parseInt((sisa % 30) / 7);
    let sisa2 = (sisa % 30) % 7;
    let hari2 = sisa2 % 7;
    console.log(`${tahun}th : ${bulan}bl : ${minggu}mg : ${hari2}h :`);
    
    jawaban = prompt("Mau ulang? (y/n) ");
    diulang = jawaban == "y" || jawaban == "Y" ? true : false
} while(diulang)
