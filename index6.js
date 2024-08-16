// определяет пол человека смотря на фамилия полное имя
// приветствует чела по анг

// let name = 'Zokir';
// let surname = 'Ergashev';
// good morning, Mister Zokir

// name = 'Katya';
// surname = 'Alekseeva';

// let name_sername = function (a, b) {
//     if (b[b.lenght - 1] == "a") {
//         console.log("Good morning, Miss", a);
//     }
//     else {
//         console.log ("Good morning, Mister", a);
//     }
// }

// hello
// Hello

let z = "1abcdefghijklmnopqrstuvwxyz";
let x = "1ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let a = '';
let word = function(drow) {
    for (let i = 1; i<=26; i++) {
        if (drow[0] == z[i]) {
            a = x[i];
        }
    }
    for (let j = 1; j < drow.length; j++) {
        a = a + drow[j];
    }
    console.log(a);
}


function upper(word) {
    let letter = z.indexOf(word[0]);
    return x[letter];
}

// r - 50000
// y - 20000
// p - 10000
// k - 5000
// n - 2000
// s - 1000
// q - 500
// v - 200
// e - 100
// h - 50 
// o - 10
// w - 5
// z - 2
// a - 1

function buy(received, gave) {
    let r = 0;
    let y = 0;
    let p = 0;
    let k = 0;
    let n = 0;
    let s = 0;
    let q = 0;
    let v = 0;
    let e = 0;
    let h = 0;
    let o = 0;
    let w = 0;
    let z = 0;
    let a = 0;   
    let aq = received - gave;
    if (aq>0) {
        for (i = 1; i <= 100; i++) {
            if (aq >=50000) {
                aq= aq - 50000;
                r = r + 1;
            }
            else if (aq >= 20000) {
                aq = aq - 20000;
                y += 1;
            }
            else if (aq >= 10000) {
                aq = aq - 10000;
                p += 1;
            }
            else if (aq >= 5000) {
                aq = aq - 5000;
                k += 1;
            }
            else if (aq >= 2000) {
                aq = aq - 2000;
                n += 1;
            }
            else if (aq >= 1000) {
                aq = aq - 1000;
                s += 1;
            }
            else if (aq >= 500) {
                aq = aq - 500;
                q += 1;
            }
            else if (aq >= 200) {
                aq = aq - 200;
                v += 1;
            }
            else if (aq >= 100) {
                aq = aq - 100;
                e += 1;
            }
            else if (aq >= 50) {
                aq = aq - 50;
                h += 1;
            }
            else if (aq >= 10) {
                aq = aq - 10;
                o += 1;
            }
            else if (aq >= 5) {
                aq = aq - 5;
                w += 1;
            }
            else if (aq >= 2) {
                aq = aq - 2;
                z += 1;
            }
            else if (aq >= 1) {
                aq = aq - 1;
                a += 1;
            }
        }
        console.log(r + ' to 50000   ',y + ' to 20000   ',p + ' to 10000   ',k + ' to 5000   ',n + ' to 2000   ',s + ' tо 1000   ',q + ' to 500   ',v + ' tо 200   ',e + ' tо 100   ',h + ' tо 50   ',o + ' tо 10   ',w + ' tо 5   ',z + ' tо 2   ',a + ' tо 1   ')
    }
    else {
        console.log("You don't have enough.")
        console.log(aq )
    }
}

// r,y,p,k,n,s,q,v,e,h,o,w,z,a
