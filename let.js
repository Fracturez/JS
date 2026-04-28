const prompt = require("prompt-sync")({sigint: true})

diulang = true;

do{
    let bulan = parseInt(prompt('Masukkan bulan (1-12) : '))
    const namaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    if (bulan >= 1 && bulan <= 12) {
        console.log(namaBulan[bulan - 1]);
    } else {
        console.log('Bulan tidak valid');
    }
    diulang = prompt('Ulangi lagi? (y/n) : ') === 'y';
} while (diulang); 
    