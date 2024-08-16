let apple = {'color': 'red', 'weight': '200gr', 'garder': 'ya'};

console.log(apple['color']);
console.log(apple.color);

apple.color = 'yellow';
apple.weight = '100gr';

apple.quantity = 200;
apple['quantity'] = 200; // добавить новое 



// loop, цыкл

for (let i = 0; i < 10; i = i + 1) {
    console.log(i);
}

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

for (let i = 2; i <= 20; i = i + 2) {
    console.log(i);
}

// 200, 3% foo 5% bee
for (let i = 1; 200>=i; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log (i, "foo, bee")
    }
    else if (i % 3 == 0) {
        console.log (i, "foo")
    }
    else if (i % 5 == 0) {
        console.log (i, "bee")
    }
}

// let i = 1;
// let a=1;
// for (i; i <= 5; i++) {
//     a= a * i;
// }
// console.log (String(i-1) + "!", "=", a)

// let a = 0;
// let i = 1;
// let b = 1;
// for (i; i <= 5; i= i+1) {
//     a=a+b;
//     b=b+1;
//     console.log (String(i), "+");
// }
// console.log ("=", a)

let a = 0;
let n = 5;
for (let i = 2; i <= n; i = i+2) {
    if (n % i == 0) {
        a = a + 1;
    }
}
console.log(n)
console.log(a)

