// Nama Soal :  Buatlah untuk memasukkan nilai siswa dengan inputan siswa dan nilai (rentang nilai 0-100) kemudian tentukan 
// grade dari siswa tersebut yaitu  A=90-100, B=80-90, C=70-80, D=60-70, E<60, dan hasilnya ditampilkan di konsol

// Tanggal Pembuatan : 10 Agustus 2025
// Nama Pembuat - Kelas : M.ADITYA ALDEVARA PRATAMA - X PPLG 2

// Input nama siswa dan nilai 
let namaSiswa = "Rina";
let nilai = 85;

// Fungsi menentukan grade berdasarkan nilai
function tentukanGrade(nilai) {
    if (nilai >= 90 && nilai <= 100) {
        return "A";
    } else if (nilai >= 80 && nilai < 90) {
        return "B";
    } else if (nilai >= 70 && nilai < 80) {
        return "C";
    } else if (nilai >= 60 && nilai < 70) {
        return "D";
    } else if (nilai < 60 && nilai >= 0) {
        return "E";
    } else {
        return "Nilai tidak valid";
    }
}

// Dapatkan grade
let grade = tentukanGrade(nilai);

// Tampilkan hasil
console.log("Nama Siswa: " + namaSiswa);
console.log("Nilai: " + nilai);
console.log("Grade: " + grade);

