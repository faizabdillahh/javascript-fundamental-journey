// membuat program untuk menentukan apakah seseorang sudah boleh menikah atau belum berdasarkan umur dan jenis kelamin dengan if-else
console.log('Program Cek Umur untuk Menikah');
const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukan jenis kelamin anda (L/P): ', (jeniskelamin) => {
    if (jeniskelamin === 'L') {
        console.log('Laki-Laki');
    } else if (jeniskelamin === 'P') {
        console.log('Perempuan');
    } else {
        console.log('Input jenis kelamin tidak valid');
        rl.close();
        return;
    }
    rl.question('Masukan umur anda: ', (umur) => {
        const umurInt = parseInt(umur);
        if (!isNaN(umurInt) && umurInt >= 0 && umurInt <= 120) {
            console.log(`Umur anda: ${umurInt}`);
        } else {
            console.log('Input umur tidak valid');
            rl.close();
            return;
        }

        if (jeniskelamin === 'L' && umurInt >= 21) {
            console.log('Anda sudah boleh menikah');
        } else if (jeniskelamin === 'P' && umurInt >= 19) {
            console.log('Anda sudah boleh menikah');
        } else {
            console.log('Anda belum boleh menikah');
        }
        rl.close();

    });
});
