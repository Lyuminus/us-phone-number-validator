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


// дается число, определить если это четное или нечетное

let number = 10;
if (number%2==0) {
    console.log("число чётное")
}
else {
    console.log("число нечётное")
}


// let a = 22;
// let b = 5;
// let c = a + b;
// c = c % 24;
// console.log(c)

// let a = 22.3;
// string = text
// a = String(a);
// indexing
// "hello"
//  01234
// console.log(a[1]);
// if (a+b>24) {
    //     c=a+b;
    //     console.log(c-24);
    // }
    // else {
        //     console.log(a+b)
        // }
        
    // b=b%24
// c=Math.floor(b/24)

let a = 5671;
let b = 7251;
let c=0;
let d=0;
a = String(a);
b = String(b);
if (a[0]==b[0]) {
    c=c+1;
}
else {
    c=c+0;
}
if (a[1]==b[1]) {
    c=c+1;
}
else {
    c=c+0;
}
if (a[2]==b[2]) {
    c=c+1;
}
else {
    c=c+0;
}
if (a[3]==b[3]) {
    c=c+1;
}
else {
    c=c+0;
}
console.log (c, "быков")
if (a[0]== b[1]||a[0]== b[2]||a[0]== b[3]) {
    d=d+1;
}
else {
    d=d+0;
}
if (a[1]== b[0]||a[1]== b[2]||a[1]== b[3]) {
    d=d+1;
}
else {
    d=d+0;
}
if (a[2]== b[1]|| a[2]==b[0]|| a[2]==b[3]) {
    d=d+1;
}
else {
    d=d+0;
}
if (a[3]== b[1] || a[3] == b[2]|| a[3] == b[0]) {
    d=d+1;
}
else {
    d=d+0;
}
console.log(d, "коров");