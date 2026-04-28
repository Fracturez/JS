const prompt = require("prompt-sync")({sigint: true})

let diulang = true;

do {
    let nilai = parseInt(prompt('Masukkan nilai (0-100) : '))

        if (nilai >= 80)
    console.log('A');
    else if (nilai >= 70)
    console.log('B');
    else if (nilai >= 60)
    console.log('C');
    else if (nilai >= 50)
    console.log('D');
    else
    console.log('E');
    diulang = prompt('Ulangi lagi? (y/n) : ') === 'y';
} while (diulang);

