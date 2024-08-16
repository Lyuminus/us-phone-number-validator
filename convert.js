function convert(s) {
    if (typeof s === "number") {
        let q = "";
        while (s > 0) {
            // console.log(s);
            if (s >= 1000) {
                q += "M"
                s = s - 1000;
            }
            else if (s >= 500) {
                q += "D"
                s = s - 500;
            }
            else if (s >= 100) {
                q += "C"
                s = s - 100;
            }
            else if (s >= 50) {
                q += "L"
                s = s - 50;
            }
            else if (s >= 10) {
                q += "X"
                s = s - 10;
            }
            else if (s >= 9) {
                q += "IX"
                s = s - 9;
            }
            else if (s >= 8) {
                q += "VIII"
                s = s - 8;
            }
            else if (s >= 7) {
                q += "VII"
                s = s - 7;
            }
            else if (s >= 6) {
                q += "VI"
                s = s - 6;
            }
            else if (s >= 5) {
                q += "V"
                s = s - 5;
            }
            else if (s >= 4) {
                q += "IV"
                s = s - 4;
            }
            else if (s >= 3) {
                q += "III"
                s = s - 3;
            }
            else if (s >= 2) {
                q += "II"
                s = s - 2;
            }
            else if (s >= 1) {
                q += "I"
                s = s - 1;
            }
        }
        console.log(q)
    }
    else if (typeof s === "string") {
        const romanNumerals = {
            'M': 1000,
            'D': 500,
            'C': 100,
            'L': 50,
            'X': 10,
            'V': 5,
            'I': 1
        };
        let control = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
        for (i in s) {
            if (control.indexOf(s[i]) == -1) {
                return "error";
            }
        }
        let q = 0;
        for (let i = 0; i < s.length; i++) {
            if (romanNumerals[s[i]] >= romanNumerals[s[i+1]]) {
                q += romanNumerals[s[i]];
            }
            else if (romanNumerals[s[i]] < romanNumerals[s[i+1]]) {
                q -= romanNumerals[s[i]];
            }
            else {
                q += romanNumerals[s[i]];
            }
        }
        console.log(q)
    }
}

convert(666)
convert("MMMMXI")

// IC
// C - I

// XI
// 10 I
// 11

// 1051
// M 51
// M L 1
// M L I


/* 
Certainly! Here's a JavaScript object that maps Roman numerals to their integer values. This can be useful if you're looking to convert between Roman numerals and integers or perform other related operations.

```javascript
const romanNumerals = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
};

// Example usage:
console.log(romanNumerals.M); // Output: 1000
console.log(romanNumerals.X); // Output: 10
```

In this object:
- `M` stands for 1000
- `D` stands for 500
- `C` stands for 100
- `L` stands for 50
- `X` stands for 10
- `V` stands for 5
- `I` stands for 1

You can use this object to look up the value of a Roman numeral. If you need a function to convert Roman numerals to integers or vice versa, let me know and I can help with that too!
*/