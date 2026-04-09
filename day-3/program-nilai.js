//membuat program nilai raport siswa dengan menggunakan if else

console.log('Program Nilai Raport Siswa');

const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukan nilai Matematika: ', (nilaimtk) => {
    const mtk = parseInt(nilaimtk);
    if (!isNaN(mtk) && mtk >= 0 && mtk <= 100) {
        console.log(`Nilai Matematika: ${mtk}`);
    } else {
        console.log('Input nilai Matematika tidak valid');
        rl.close();
        return;
    }
    rl.question('Masukan nilai IPA: ', (nilaiipa) => {
        const ipa = parseInt(nilaiipa);
        if (!isNaN(ipa) && ipa >= 0 && ipa <= 100) {
            console.log(`Nilai IPA: ${ipa}`);
        } else {
            console.log('Input nilai IPA tidak valid');
            rl.close();
            return;
        }

        rl.question('Masukan nilai IPS: ', (nilaiips) => {
            const ips = parseInt(nilaiips);
            if (!isNaN(ips) && ips >= 0 && ips <= 100) {
                console.log(`Nilai IPS: ${ips}`);
            } else {
                console.log('Input nilai IPS tidak valid');
                rl.close();
                return;
            }

            const rataRata = (mtk + ipa + ips) / 3;
            if (rataRata >= 80) {
                console.log(`Anda Lulus dengan nilai rata-rata ${rataRata}`);
            } else {
                console.log(`Maaf Anda Tidak Lulus dengan nilai rata-rata ${rataRata}`);
            }
            rl.close();
        });
    });
});