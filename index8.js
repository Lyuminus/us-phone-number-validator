// 1. Дан массив чисел, надо найти сумму всех чисел в массиве.

function summ(a) {
    let c = 0
    for (i = 0; i < a.length; i++) {
        c = c + a[0 + i]
    }
    console.log(a);
    console.log('Сумма равна - ', c);
}

//summ([1,2,3,4,5,6,7,8,9,10])
// Array (10) [1,2,3,4,5,6,7,8,9,10]
// Сумма равна - 55



// 2. Дан массив чисел, надо найти максимальную и минимальную числа из массива.

function maxmin(a) {
    let c = 0;
    let d = 0;
    for (i = 0; i < a.length; i++) {
        if (a[0+i] > a[1+i]) {
            c = a[0 + i];
        }
        if (a[0+i] < a[1+i]) {
            d = a[0 + i];
        }
    }
    console.log(a);
    console.log('Максимальное число - ', d);
    console.log('Минимальное число - ', c);
}

function maxmin(a) {
    let c = 0;
    let d = 0;
    for (i = 0; i < a.length; i++) {
        c = Math.max(a) ;
        d = Math.min(a) ;
        console.log('Максимальное число - ', d);
        console.log('Минимальное число - ', c);
    }
    console.log(a);
    console.log('Максимальное число - ', d);
    console.log('Минимальное число - ', c);
}

function maxmin(a) {
    
}

// Не доделано

// maxmin([1,555,3,9,76,12,34,103,111,0,14,1111])
// Array (12) [1,555,3,9,76,12,34,103,111,0,14,1111]
// Максимальное число - 14
// Минимальное число - 111

// maxmin([1,2,3,4,5,6,7,8,9,10])
// Array (10) [1,2,3,4,5,6,7,8,9,10]
// Максимальное число - 9
// Минимальное число - 0


// function max(arr) {
//     let biggest = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > biggest) {
//             biggest = arr[i];
//         }
//     }
//     return biggest;
// }
// max([1,2,3,4,5,6,7,8,9,10]);