// Nama Soal :  Terdapat inputan suatu huruf dari A-Z, tentukan apakah huruf yang diinput tersebut termasuk vokal  atau 
// konsonan atau bukan berupa huruf 

// Tanggal Pembuatan : 10 Agustus 2025
// Nama Pembuat - Kelas : M.ADITYA ALDEVARA PRATAMA - X PPLG 2

// Input huruf 
let inputHuruf = 'E';

// Fungsi untuk cek apakah karakter adalah huruf A-Z atau a-z
function isHuruf(char) {
    return /^[a-zA-Z]$/.test(char);
}

// Ubah input ke uppercase supaya lebih mudah dibandingkan
let huruf = inputHuruf.toUpperCase();

if (!isHuruf(huruf)) {
    console.log("Input bukan berupa huruf");
} else {
    // Cek apakah vokal
    if ("AEIOU".includes(huruf)) {
        console.log(huruf + " adalah huruf vokal");
    } else {
        console.log(huruf + " adalah huruf konsonan");
    }
}