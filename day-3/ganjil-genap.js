//membuat program untuk menentukan apakah sebuah angka adalah bilangan genap atau ganjil

const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukan angka: ', (jawaban) => {
    const angka = parseInt(jawaban);

    if (angka % 2 === 0) {
        console.log(`${angka} adalah bilangan genap.`)
    } else {
        console.log(`${angka} adalah bilangan ganjil.`)
    }
    rl.close();
})