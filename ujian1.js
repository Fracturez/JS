// npm install prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

console.log("Pilih Menu");
console.log("1. Cerdas Cerdas Cerdas Cerdas");
console.log("2. Cetak kata 'Cerdas' ke bawah");
console.log("3. Pilihan A B C D");
console.log("4. 1 2 3 4 5 = 15");
console.log("5. 1 + 2 + 3 + 4 + 5 = 15");
console.log("6. Format penjumlahan ke bawah");
console.log("7. 1 + 3 + 5 = 9");
console.log("8. 2 + 4 + 6 + 8 + 10 = 30");
console.log("9. Cetak tabel angka");
console.log("10. Cetak tabel huruf a");
console.log("11. Segitiga bintang naik");
console.log("12. Segitiga bintang turun");
console.log("13. Segitiga naik turun (5 baris)");
console.log("14. Segitiga naik turun (7 baris)");
console.log("15. Segitiga naik");
console.log("16. Segitiga naik turun");
console.log("17. Cetak huruf a-e");

let pilih = parseInt(prompt("Masukkan nomor soal: "));

switch (pilih) {
    case 1:
        console.log("Cerdas ".repeat(4));
        break;

    case 2:
        for (let i = 0; i < 4; i++) console.log("Cerdas");
        break;

    case 3:
        let opsi = ["A", "B", "C", "D"];
        for (let i = 0; i < opsi.length; i++) {
            console.log(opsi[i] + ". Cerdas");
        }
        break;

    case 4:
        let jumlah4 = 0, teks4 = "";
        for (let i = 1; i <= 5; i++) {
            jumlah4 += i;
            teks4 += i + " ";
        }
        console.log(teks4 + "= " + jumlah4);
        break;

    case 5:
        let jumlah5 = 0, teks5 = "";
        for (let i = 1; i <= 5; i++) {
            jumlah5 += i;
            if (i < 5) teks5 += i + " + ";
            else teks5 += i;
        }
        console.log(teks5 + " = " + jumlah5);
        break;

    case 6:
        let jumlah6 = 0;
        for (let i = 1; i <= 5; i++) {
            console.log(i);
            jumlah6 += i;
        }
        console.log("—+");
        console.log(jumlah6);
        break;

    case 7:
        let jumlah7 = 0, teks7 = "";
        for (let i = 1; i <= 5; i += 2) {
            jumlah7 += i;
            if (i < 5) teks7 += i + " + ";
            else teks7 += i;
        }
        console.log(teks7 + " = " + jumlah7);
        break;

    case 8:
        let jumlah8 = 0, teks8 = "";
        for (let i = 2; i <= 10; i += 2) {
            jumlah8 += i;
            if (i < 10) teks8 += i + " + ";
            else teks8 += i;
        }
        console.log(teks8 + " = " + jumlah8);
        break;

    case 9:
        for (let i = 1; i <= 5; i++) console.log("1 2 3 4 5"); 
        break;

    case 10:
        for (let i = 1; i <= 5; i++) console.log("a a a a a");
        break;
    
    }

