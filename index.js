console.log("Hello world!");

// +, -, *, /
console.log(10/2);
console.log(10*10);
// %
console.log(20 % 2);
// **
console.log(20 ** 3);

// console.log("a" * 2);

console.log("a" + "a");

// data types = типы данных
// text ""
// number 123
// boolean
console.log(true);
console.log(false);
// object

// variable
// var name = 'Aliaskar'; // old
console.log(name);
let name = 'Aliaskar'; // new

// const
const name2 = 'Aliaskar';


// and, or, >, <, ==, ===, !=, !==, >=, <=

console.log(10 > 20);
console.log(20 < 30);
console.log(20 < 20);
console.log(20 <= 20);
// console.log(20 = 20);
console.log(20 == 20);
console.log(200 != 20);

console.log(20 === 20);
console.log("20" == 20);
console.log("20" === 20); // false

// === проверяет если ЗНАЧЕНИЕ и ТИП ДАННЫХ одинаковые
// == проверяет если ТОЛЬКО ЗНАЧЕНИЯ одинаковы

// !== проверяет если ЗНАЧЕНИЕ и ТИП ДАННЫХ разные
// != проверяет если ТОЛЬКО ЗНАЧЕНИЕ разные

// ! = not = не

// and = && обе должны быть true
// or = || хотя бы одна должна быть true

let age = 19;
if (age > 18) {
    console.log('Можно купить');
}
else if (age > 16 && age <= 18) {
    console.log('ограничено');
}
else {
    console.log('кто ты');
}
if (a*6+b-c-c**2 == 9) {console.log("верно")}
else {console.log("не верно")}