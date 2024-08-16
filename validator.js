function telephoneCheck(s) {
    let alphanumericArray = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z', '!', '"', '#', '$', '%', '&', "'", '*', 
        ',', '.', '/', ':', ';', '<', '=', '>', '?', '@', 
        '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '+'
    ];
    console.log(s);
    
    
    for ( let i = 0; i < s.length; i++) {
        if (alphanumericArray.indexOf(s[i]) != -1) {
            // return 1;
            return false;
        }
    }
    s = clear1(s);
    let q = clear2(s);
    console.log(q);
    let qer = ["(", ")", "-"];
    let er = 40;

    let count0 = 0;
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == qer[0]) {
            count0 += 1;
        }
    }
    for (let j = 0; j < s.length; j++) {
        if (s[j] == qer[1]) {
            count1 += 1;
        }
    }
    for (let k = 0; k < s.length; k++) {
        if (s[k] == qer[2]) {
            count2 += 1;
        }
    }

    if (q.length != 10 && q.length != 11) {
        // return 2;
        return false;
    }
    else if (q.length == 11) {
        if (s[0] == 1) {
            er = 1;
        }
        else {
            return false;
        }
    }
    else if (q.length == 10) {
        er = 0;
    }
    else {
        return false;
    } 

    if (s.indexOf(qer[0]) != -1 && s.indexOf(qer[1]) != -1) {
        if (count0 == 1 && count1 == 1) {
            if (s.indexOf(qer[0]) == er && s.indexOf(qer[1]) == er + 4) {
                if (s.indexOf(qer[2]) != -1) {
                    if (count2 == 1) {
                        if (s[s.length - 5] == qer[2]) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    else if (s.indexOf(qer[0]) == -1 && s.indexOf(qer[1]) == -1) {
        if (s.indexOf(qer[2]) != -1) {
            if (count2 == 2) {
                if (s[s.length - 5] == qer[2] && s[s.length - 9] == qer[2]) {
                    return true 
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return true;
            // w
            // q
            // a
            // a 
        }
    }
    else {
        return false;
    }
}
function clear1(s) {
    let clr1 = [" "];
    let pa1 = "";
    for (let i = 0; i < s.length; i++) {
        if (clr1.indexOf(s[i]) == -1) {
            pa1 += s[i];
        }
    }
    return pa1;
}
function clear2(s) {
    let clr2 = ["(", ")", "-"];
    let pa2 = "";
    for (let i = 0; i < s.length; i++) {
        if (clr2.indexOf(s[i]) == -1) {
            pa2 += s[i];
        }
    }
    return pa2;
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("1(555)555-5555"));
console.log(telephoneCheck("1 555)555-5555") );
console.log(telephoneCheck("1 555 555 5555"));
console.log(telephoneCheck("1 456 789 4444"));
console.log(telephoneCheck("(6054756961)") );
console.log(telephoneCheck("2 (757) 622-7382") );
console.log(telephoneCheck("0 (757) 622-7382") );
console.log(telephoneCheck("-1 (757) 622-7382") );
console.log(telephoneCheck("2 757 622-7382") );
console.log(telephoneCheck("27576227382") );
console.log(telephoneCheck("(275)76227382") );
console.log(telephoneCheck("2(757)6227382") );
console.log(telephoneCheck("2(757)622-7382"));
console.log(telephoneCheck("555)-555-5555") );
console.log(telephoneCheck("(555-555-5555") );
console.log(telephoneCheck("55 55-55-555-5"));