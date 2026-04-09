//for loop
for (let i = 1; i <= 10; i++) {
    console.log(`angka ke ${i}`);
}

//iterate array
const heroes = ['Batman', 'Superman', 'Spiderman', 'Ironman', 'Ultraman']
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

//hitung mundur
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log('Happy New Year!!!');

//ambil angka genap
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

//berhentikan paksa (break)
for (let i = 1; i <= 1000; i++) {
    if (i % 7 === 0) {
        console.log(`angka pertama yang bisa dibagi 7 adalah: ${i}`);
        break;
    }
}

//continue
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0){
        continue;
    }
    console.log(i);
}

//validasi password
const password = 'password';
let adaAngka = false;

for (let i = 0; i < password.length; i++) {
    if (password[i] >= '0' && password[i] <= '9') {
        adaAngka = true;
        break;
    }
}

if (adaAngka) {
    console.log('Password valid');
} else {
    console.log('Password harus mengandung angka');
}