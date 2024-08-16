function palindrome(s) {
    s = clear(s);
    // console.log(s);
    for (i = 1; i <= Math.floor(s.length/2); i++) {
        if (s[i - 1] != s[s.length - i]) {
            return "false";
        }
    }
    return "true";
}

// 1.
function palindrome(s) {
    s = clear(s);
    let q = reverse(s);
    if ( s == q) {
        return "true";
    }
    else {
        return "false";
    }
}

function clear(s) {
    let alphanumericArray = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    // console.log(alphanumericArray.indexOf(' '));
    let cpy = '';
    for (i in s) {
        if (alphanumericArray.indexOf(s[i]) != -1) {
            cpy += s[i];
        }
    }
    return cpy;
}

function reverse(s) {
    let l = "";
    for (i = 1; i <= s.length; i++) {
        l += s[s.length - i];
    }
    return l;
}


console.log(palindrome('_eye-='));
// hello 12
// hello12

// hello == reverse('hello')  
