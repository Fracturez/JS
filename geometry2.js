//npm install prompt-sync 
const prompt = require("prompt-sync")();

console.log("=== Bangun Ruang ===");
console.log("1. Kubus");
console.log("2. Balok");
console.log("3. Prisma Segitiga");
console.log("4. Limas");
console.log("5. Tabung");
console.log("6. Kerucut");
console.log("7. Bola");

let pilihan = parseInt(prompt("Pilih bangun ruang (1-7): "));

if (pilihan === 1) { // Kubus
    let s = parseFloat(prompt("Masukkan sisi kubus: "));
    let volume = Math.pow(s, 3);
    let luas = 6 * Math.pow(s, 2);
    console.log(`Volume Kubus = ${volume}`);
    console.log(`Luas Permukaan Kubus = ${luas}`);

} else if (pilihan === 2) { // Balok
    let p = parseFloat(prompt("Masukkan panjang: "));
    let l = parseFloat(prompt("Masukkan lebar: "));
    let t = parseFloat(prompt("Masukkan tinggi: "));
    let volume = p * l * t;
    let luas = 2 * (p * l + p * t + l * t);
    console.log(`Volume Balok = ${volume}`);
    console.log(`Luas Permukaan Balok = ${luas}`);

} else if (pilihan === 3) { // Prisma Segitiga
    let alas = parseFloat(prompt("Masukkan alas segitiga: "));
    let tinggiSegitiga = parseFloat(prompt("Masukkan tinggi segitiga: "));
    let tinggiPrisma = parseFloat(prompt("Masukkan tinggi prisma: "));
    let luasAlas = 0.5 * alas * tinggiSegitiga;
    let kelilingAlas = alas + tinggiSegitiga + Math.sqrt(Math.pow(alas, 2) + Math.pow(tinggiSegitiga, 2));
    let volume = luasAlas * tinggiPrisma;
    let luas = 2 * luasAlas + kelilingAlas * tinggiPrisma;
    console.log(`Volume Prisma Segitiga = ${volume}`);
    console.log(`Luas Permukaan Prisma Segitiga = ${luas}`);

} else if (pilihan === 4) { // Limas
    let sisiAlas = parseFloat(prompt("Masukkan panjang sisi alas persegi: "));
    let tinggi = parseFloat(prompt("Masukkan tinggi limas: "));
    let luasAlas = Math.pow(sisiAlas, 2);
    let volume = (1/3) * luasAlas * tinggi;
    let luasSelubung = 2 * sisiAlas * Math.sqrt(Math.pow((sisiAlas/2), 2) + Math.pow(tinggi, 2));
    let luas = luasAlas + luasSelubung;
    console.log(`Volume Limas = ${volume}`);
    console.log(`Luas Permukaan Limas = ${luas}`);

} else if (pilihan === 5) { // Tabung
    let r = parseFloat(prompt("Masukkan jari-jari tabung: "));
    let t = parseFloat(prompt("Masukkan tinggi tabung: "));
    let volume = Math.PI * Math.pow(r, 2) * t;
    let luas = 2 * Math.PI * r * (r + t);
    console.log(`Volume Tabung = ${volume}`);
    console.log(`Luas Permukaan Tabung = ${luas}`);

} else if (pilihan === 6) { // Kerucut
    let r = parseFloat(prompt("Masukkan jari-jari kerucut: "));
    let t = parseFloat(prompt("Masukkan tinggi kerucut: "));
    let s = Math.sqrt(Math.pow(r, 2) + Math.pow(t, 2));
    let volume = (1/3) * Math.PI * Math.pow(r, 2) * t;
    let luas = Math.PI * r * (r + s);
    console.log(`Volume Kerucut = ${volume}`);
    console.log(`Luas Permukaan Kerucut = ${luas}`);

} else if (pilihan === 7) { // Bola
    let r = parseFloat(prompt("Masukkan jari-jari bola: "));
    let volume = (4/3) * Math.PI * Math.pow(r, 3);
    let luas = 4 * Math.PI * Math.pow(r, 2);
    console.log(`Volume Bola = ${volume}`);
    console.log(`Luas Permukaan Bola = ${luas}`);

} else {
    console.log("Pilihan tidak valid!");
}
