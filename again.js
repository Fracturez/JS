//npm install prompt-sync
const prompt = require("prompt-sync")({ sigint: true});

let warna = prompt(`masukan warna: `);

if (warna == 'merah') {
    console.log("dilarang masuk"); 
} else if ('warna == hijau') {
    console.log('silakan masuk');
} else {
    console.log('warna tidak dikenali');
}
