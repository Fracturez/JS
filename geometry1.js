//npm install prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

console.log("=== Bangun Datar ===");
console.log("1. Persegi");
console.log("2. Persegi Panjang");
console.log("3. Segitiga");
console.log("4. Jajar Genjang");
console.log("5. Trapesium");
console.log("6. Belah Ketupat");
console.log("7. Layang-layang");
console.log("8. Lingkaran");

let pilihan = parseInt(prompt("Pilih bangun datar (1-8): "));

if (pilihan === 1) {
  // Persegi
  let s = parseFloat(prompt("Masukkan sisi: "));
  console.log("Luas =", s * s);
  console.log("Keliling =", 4 * s);

} else if (pilihan === 2) {
  // Persegi Panjang
  let p = parseFloat(prompt("Masukkan panjang: "));
  let l = parseFloat(prompt("Masukkan lebar: "));
  console.log("Luas =", p * l);
  console.log("Keliling =", 2 * (p + l));

} else if (pilihan === 3) {
  // Segitiga
  let a = parseFloat(prompt("Masukkan alas: "));
  let t = parseFloat(prompt("Masukkan tinggi: "));
  let b = parseFloat(prompt("Masukkan sisi b: "));
  let c = parseFloat(prompt("Masukkan sisi c: "));
  console.log("Luas =", 0.5 * a * t);
  console.log("Keliling =", a + b + c);

} else if (pilihan === 4) {
  // Jajar Genjang
  let a = parseFloat(prompt("Masukkan alas: "));
  let t = parseFloat(prompt("Masukkan tinggi: "));
  let b = parseFloat(prompt("Masukkan sisi miring: "));
  console.log("Luas =", a * t);
  console.log("Keliling =", 2 * (a + b));

} else if (pilihan === 5) {
  // Trapesium
  let a = parseFloat(prompt("Masukkan sisi a: "));
  let b = parseFloat(prompt("Masukkan sisi b: "));
  let c = parseFloat(prompt("Masukkan sisi c: "));
  let d = parseFloat(prompt("Masukkan sisi d: "));
  let t = parseFloat(prompt("Masukkan tinggi: "));
  console.log("Luas =", 0.5 * (a + b) * t);
  console.log("Keliling =", a + b + c + d);

} else if (pilihan === 6) {
  // Belah Ketupat
  let d1 = parseFloat(prompt("Masukkan diagonal 1: "));
  let d2 = parseFloat(prompt("Masukkan diagonal 2: "));
  let s = parseFloat(prompt("Masukkan sisi: "));
  console.log("Luas =", 0.5 * d1 * d2);
  console.log("Keliling =", 4 * s);

} else if (pilihan === 7) {
  // Layang-layang
  let d1 = parseFloat(prompt("Masukkan diagonal 1: "));
  let d2 = parseFloat(prompt("Masukkan diagonal 2: "));
  let p = parseFloat(prompt("Masukkan sisi p: "));
  let q = parseFloat(prompt("Masukkan sisi q: "));
  console.log("Luas =", 0.5 * d1 * d2);
  console.log("Keliling =", 2 * (p + q));

} else if (pilihan === 8) {
  // Lingkaran
  let r = parseFloat(prompt("Masukkan jari-jari: "));
  console.log("Luas =", Math.PI * r * r);
  console.log("Keliling =", 2 * Math.PI * r);

} else {
  console.log("Pilihan tidak valid.");
}