// Задание №1 (Fill)

function fill(a, b) {
    if (typeof a === 'number' && typeof b === 'string') {
        let s = [];
        for (let i = 0; i < a; i++) {
            s.push(b);
        }
        console.log(s)
    }
    else {
        console.log("error")
    }
}

// fill(5, "a")
// Array (5) ["a", "a", "a", "a", "a"]


// Задание №2 (reverse)

let b = [];
function reverse(a) {
    for (i = 1; i <= a.length; i++) {
        b.push(a[a.length - i]);
    }
    console.log(a);
    console.log(b);
}

//reverse([1,2,3,4,5,6,7,8,9,0])
// Array (10) [1,2,3,4,5,6,7,8,9,0]
// Array (10) [0,9,8,7,6,5,4,3,2,1]