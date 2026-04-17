//array biasa adalah struktur data yang digunakan untuk menyimpan beberapa nilai dalam satu variabel. Array dapat menyimpan berbagai jenis data, termasuk angka, string, objek, dan bahkan array lainnya.
//array memiliki indeks yang dimulai dari 0, sehingga elemen pertama berada pada indeks 0, elemen kedua pada indeks 1, dan seterusnya.

let fruits = ['apple', 'orange', 'mango', 'grape', 'banana'];
console.log(fruits[0]);

//array multidimensi adalah array yang berisi array lain sebagai elemennya. Array ini dapat digunakan untuk menyimpan data dalam bentuk tabel atau matriks.

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix[0][2]);

//array of objects adalah array yang berisi objek sebagai elemennya. Array ini sering digunakan untuk menyimpan data yang lebih kompleks, seperti data pengguna, produk, atau entitas lainnya.

let users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Doe', age: 35 }
];
console.log(users[1].name);
console.log(users);