//while loop "lakukan sesuatu selama kondisi terpenuhi"

let i = 1;
while (i <= 10) {
    console.log(`angka ke ${i}`);
    i++;
}

//do-while loop "lakukan sesuatu minimal sekali, lalu ulangi selama kondisi terpenuhi"

let j = 1;
do {
    console.log(`angka ke ${j}`);
    j++;
} while (j <= 10);

//for-of loop "iterasi elemen dalam iterable (array, string, dll)"

const heroes = ['Batman', 'Superman', 'Spiderman', 'Ironman', 'Ultraman'];

for (const hero of heroes) {
    console.log(hero);
}

//for-in loop "iterasi properti dalam objek"

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}


// 