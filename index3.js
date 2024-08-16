let isEven = function(number) {
    if (number % 2 == 0) {
        console.log('Yes, even!');
    }
    else {
        console.log('No, odd.');
    }
}


let isInProfit = function(openPrice, currentPrice, pos) {
    if (pos == 'buy') {
        if (currentPrice > openPrice) {
            return 'profit';
        }
        else {
            return 'loss';
        }
    }
    else if (pos == 'sell') {
        if (currentPrice < openPrice) {
            return 'profit';
        }
        else {
            return 'loss';
        }
    }
    else {
        console.log('error');
    }
}



// word, number
// 'hello', 5
// *****hello*****


// let c = "*";
// let wrap = function(a, b) {
//     if (typeof a === 'string' && typeof b === 'number') {
//         if (b>=1) {
//             for (let i = 1; i<=b; i++) {
//                 c = c + "*";
//             }
//             console.log(c + b + c);
//         }
//         else if (b==0) {
//             console.log(a);
//         }
//         else {
//             console.log("error1");
//         }
//     }
//     else {
//         console.log("error2");
//     }
// }

let wrap2 = function(word, number) {
    let stars = '';
    for (let i = 0; i < number; i++) {
        stars += '*';
    }
    return stars + word + stars;
}

// let test = 'hello';
// olleh

let reverse = function(word) {
    word = String(word);
    let a = word.length;
    let b = 1;
    let myword = '';
    for (let i = 1; i<=a; i++) {
        myword += word[word.length - b];
        b=b+1;
    }
    return myword;
}

//     *
//    ***
//   *****
//  *******
// *********
//     *

// let nomber = function(a) {
//     let stars = "";
//     let empty = "";
//     let c = a-1;
//     let d = 1;
//     if (typeof a === 'number') {
//         for (let i = 1; i <= a; i++) {
//             for (let k = 1; k<=c; k++) {
//                 empty += " ";
//             }
//             for (let y = 1; y<=d; y++) {
//                 stars += "*";
//             }
//             console.log (empty + stars);
//             c = c - 1;
//             d = d + 2;
//             empty = "";
//             stars = "";
//         }
//         for (let z = 1; z<=a-1; z++) {
//             empty += " ";
//         }
//         console.log( empty + "*")
//     }
//     else {
//         console.log('error')
//     }
// }


function treee(number) {
    for (let i = 1; i <= number; i += 2) {
        console.log(giveSpace((number - i)/2) + giveStar(i));
    }
}

function giveSpace(n) {
    let em = "";
    for (let i = 0; i < n; i++) {
        em += " ";
    }
    return em;
}

function giveStar(n) {
    let em = "";
    for (let i = 0; i < n; i++) {
        em += "*";
    }
    return em;
}

function giveChar(n, char) {
    let em = "";
    for (let i = 0; i < n; i++) {
        em += char;
    }
    return em;
}

function treee(number) {
    for (let i = 1; i <= number; i += 2) {
        console.log(giveChar((number - i)/2, " ") + giveChar(i, "*"));
    }
}

// 4. Напишите функцию JavaScript, которая возвращает строку, содержащую буквы в алфавитном порядке.
// Пример строки: 'webmaster'
// Ожидаемый вывод: 'abeemrstw'

// Напишите функцию JavaScript для извлечения уникальных символов из строки.
// Пример строки : "thequickbrownfoxjumpsoverthelazydog"
// Ожидаемый вывод : "thequickbrownfxjmpsvlazydg"