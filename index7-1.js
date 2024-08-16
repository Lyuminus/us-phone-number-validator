function nomberN(n) {
    let a = 1;
    for (i = 1; i <= Math.floor(n ** 0.5) + 1; i++) {
        if (n%i == 0) {
            a = a+1;
        }
    }
    if (a == 2) {
        console.log("Число " + n + " - простое число")
    }
    else {
        console.log("Число " + n + " - не является простым числом")
    }
}

// algorithm complexity 
// O = N


function nomberLogx(n) {
    let a = 1;
    for (i = 2; i <= Math.floor(n ** 0.5) + 1; i++) {
        if (n%i == 0) {
            return ("Число " + n + " - не является простым числом");
        }
    }
    return ("Число " + n + " - простое число");
}

// O logn


// 
let a = [1, 2, 3, 4, 5, 6];
console.log(a[0])





function number(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    for (i = 0; i < n; i++) {
        for (let j = 0; j < n; i++) {
            
        }
    }
}
function number(n) {
    let a = 0;
    for (let i = 1; i <= n; i++) {
        if (n%i == 0) {
            a = a+1;
        }
    }
    return a;
}

function doors(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (number(i) % 2 != 0) {
            arr.push(i);
        }
    }
    console.log(arr);
}


function fill(a, b) {
    let s = [];
    for (let i = 1 )
}