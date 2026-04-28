const prompt = require("prompt-sync")({sigint: true})
let diulang = true
do{ 

    let jarak = Number(prompt("Masukin jarak centimeter: "));
    let km = parseInt(jarak / 100000);
    let sisa = (jarak  % 100000); 
    let meter = (jarak  % 100); 
    let cm = jarak / 100;

    console.log(`${km} km : ${meter} m : ${cm} cm :`);
    jawaban = prompt("Mau ulang? (y/n) ");
    diulang = jawaban == "y" || jawaban == "Y" ? true : false

} while(diulang)