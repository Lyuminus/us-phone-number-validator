function cipher(s) {
    if (typeof s == 'string') {
        let alphanumericArray = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
            'U', 'V', 'W', 'X', 'Y', 'Z'
        ];
        let t = "";
        let y = 0;
        for (let i = 0; i < s.length; i++) {
            if (alphanumericArray.indexOf(s[i]) > 12) {
                t = t + alphanumericArray[alphanumericArray.indexOf(s[i]) - 13];
            }
            else if (alphanumericArray.indexOf(s[i]) <= 12) {
                y = 12 - alphanumericArray.indexOf(s[i]);
                t = t + alphanumericArray[alphanumericArray.length - y];
            }
        }
    }
    else {
        return "Error";
    }
    return t;
}

// function control(s) {
//     let alphanumericArray = [
//         'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
//         'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
//         'U', 'V', 'W', 'X', 'Y', 'Z'
//     ];
//     let q = "";
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] ) {
//             q += s[i];
//         }
//         else {
//             return "Error";
//         }
//     }
//     return q;
// }


console.log(cipher("RDDF"));


function cipher(s) {
    if (typeof s == 'string') {
        let alphanumericArray = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
            'U', 'V', 'W', 'X', 'Y', 'Z'
        ];
        let t = "";
        let y = 0;
        for (let i = 0; i < s.length; i++) {
            if (alphanumericArray.indexOf(s[i]) == -1) {
                t += s[i];
            }
            else if (alphanumericArray.indexOf(s[i]) > 12) {
                t = t + alphanumericArray[alphanumericArray.indexOf(s[i]) - 13];
            }
            else if (alphanumericArray.indexOf(s[i]) <= 12) {
                y = 13 - alphanumericArray.indexOf(s[i]);
                t = t + alphanumericArray[alphanumericArray.length - y];
            }
        }
console.log(t);
    }
    else {
        return "Error";
    }
    
}