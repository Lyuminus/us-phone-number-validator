function c1() {
    let asqer = document.getElementById("answer").innerText;
    let tyuiop = 0;
    let ravno = ["="]
    for (let k = 0; k < asqer.length; k++) {
        if (asqer.indexOf(ravno[0]) != -1) {
            document.getElementById("answer").innerText = " ";
            document.getElementById("bad").innerText = " ";
        }
        else {
            tyuiop += 1;
        }
    }
    if (tyuiop == asqer.length) {
        document.getElementById("answer").innerText += "1";
    }
}
function c2() {
    let asqer = document.getElementById("answer").innerText;
    let tyuiop = 0;
    let ravno = ["="]
    for (let k = 0; k < asqer.length; k++) {
        if (asqer.indexOf(ravno[0]) != -1) {
            document.getElementById("answer").innerText = " ";
            document.getElementById("bad").innerText = " ";
        }
        else {
            tyuiop += 1;
        }
    }
    if (tyuiop == asqer.length) {
        document.getElementById("answer").innerText += "2";
    }
}
function c3() {
    let asqer = document.getElementById("answer").innerText;
    let tyuiop = 0;
    let ravno = ["="]
    for (let k = 0; k < asqer.length; k++) {
        if (asqer.indexOf(ravno[0]) != -1) {
            document.getElementById("answer").innerText = " ";
            document.getElementById("bad").innerText = " ";
        }
        else {
            tyuiop += 1;
        }
    }
    if (tyuiop == asqer.length) {
        document.getElementById("answer").innerText += "3";
    }
}
function c4() {
    let asqer = document.getElementById("answer").innerText;
    let tyuiop = 0;
    let ravno = ["="]
    for (let k = 0; k < asqer.length; k++) {
        if (asqer.indexOf(ravno[0]) != -1) {
            document.getElementById("answer").innerText = " ";
            document.getElementById("bad").innerText = " ";
        }
        else {
            tyuiop += 1;
        }
    }
    if (tyuiop == asqer.length) {
        document.getElementById("answer").innerText += "4";
    }
}
function c5() {
    let asqer = document.getElementById("answer").innerText;
    let tyuiop = 0;
    let ravno = ["="]
    for (let k = 0; k < asqer.length; k++) {
        if (asqer.indexOf(ravno[0]) != -1) {
            document.getElementById("answer").innerText = " ";
            document.getElementById("bad").innerText = " ";
        }
        else {
            tyuiop += 1;
        }
    }
    if (tyuiop == asqer.length) {
        document.getElementById("answer").innerText += "5";
    }
}
function c6() {
    let asqer = document.getElementById("answer").innerText;
    let tyuiop = 0;
    let ravno = ["="]
    for (let k = 0; k < asqer.length; k++) {
        if (asqer.indexOf(ravno[0]) != -1) {
            document.getElementById("answer").innerText = " ";
            document.getElementById("bad").innerText = " ";
        }
        else {
            tyuiop += 1;
        }
    }
    if (tyuiop == asqer.length) {
        document.getElementById("answer").innerText += "6";
    }
}
function c7() {
    let asqer = document.getElementById("answer").innerText;
    let tyuiop = 0;
    let ravno = ["="]
    for (let k = 0; k < asqer.length; k++) {
        if (asqer.indexOf(ravno[0]) != -1) {
            document.getElementById("answer").innerText = " ";
            document.getElementById("bad").innerText = " ";
        }
        else {
            tyuiop += 1;
        }
    }
    if (tyuiop == asqer.length) {
        document.getElementById("answer").innerText += "7";
    }
}
function c8() {
    let asqer = document.getElementById("answer").innerText;
    let tyuiop = 0;
    let ravno = ["="]
    for (let k = 0; k < asqer.length; k++) {
        if (asqer.indexOf(ravno[0]) != -1) {
            document.getElementById("answer").innerText = " ";
            document.getElementById("bad").innerText = " ";
        }
        else {
            tyuiop += 1;
        }
    }
    if (tyuiop == asqer.length) {
        document.getElementById("answer").innerText += "8";
    }
}
function c9() {
    let asqer = document.getElementById("answer").innerText;
    let tyuiop = 0;
    let ravno = ["="]
    for (let k = 0; k < asqer.length; k++) {
        if (asqer.indexOf(ravno[0]) != -1) {
            document.getElementById("answer").innerText = " ";
            document.getElementById("bad").innerText = " ";
        }
        else {
            tyuiop += 1;
        }
    }
    if (tyuiop == asqer.length) {
        document.getElementById("answer").innerText += "9";
    }
}
function c0() {
    let asqer = document.getElementById("answer").innerText;
    let tyuiop = 0;
    let ravno = ["="]
    for (let k = 0; k < asqer.length; k++) {
        if (asqer.indexOf(ravno[0]) != -1) {
            document.getElementById("answer").innerText = " ";
            document.getElementById("bad").innerText = " ";
        }
        else {
            tyuiop += 1;
        }
    }
    if (tyuiop == asqer.length) {
        document.getElementById("answer").innerText += "0";
    }
}
function ca() {
    let asqer = document.getElementById("answer").innerText;
    let tyuiop = 0;
    let ravno = ["="]
    for (let k = 0; k < asqer.length; k++) {
        if (asqer.indexOf(ravno[0]) != -1) {
            document.getElementById("answer").innerText = " ";
            document.getElementById("bad").innerText = " ";
        }
        else {
            tyuiop += 1;
        }
    }
    let reqsa = ["+", "*", "^", "/"]
    let safghgf = 0;
    for (i = 1 ; i<= 4 ; i++) {
        if (0 == asqer.length) {
            console.log(false)
        }
        else {
            safghgf += 1;
        }
    }
    let fghjk = ["-", ".", "+", "*", "^", "/"];
    let kjhgf = 0;
        for (let j = 0; j<6; j++) {
        if (asqer[asqer.length - 1] == fghjk[j]) {
            console.log(false)
        }
        else {
            kjhgf +=1;
        }
    }
    if (safghgf == 4 && kjhgf == 6 && tyuiop == asqer.length) {
        document.getElementById("answer").innerText += "+";
    }
}
function cs() {
    let asqer = document.getElementById("answer").innerText;
    let tyuiop = 0;
    let ravno = ["="]
    for (let k = 0; k < asqer.length; k++) {
        if (asqer.indexOf(ravno[0]) != -1) {
            document.getElementById("answer").innerText = " ";
            document.getElementById("bad").innerText = " ";
        }
        else {
            tyuiop += 1;
        }
    }
    let reqsa = ["+", "*", "^", "/"]
    let safghgf = 0;
    for (i = 1 ; i<= 4 ; i++) {
        if (0 == asqer.length) {
            console.log(false)
        }
        else {
            safghgf += 1;
        }
    }
    let fghjk = ["-", ".", "+", "*", "^", "/"];
    let kjhgf = 0;
        for (let j = 0; j<6; j++) {
        if (asqer[asqer.length - 1] == fghjk[j]) {
            console.log(false)
        }
        else {
            kjhgf +=1;
        }
    }
    if (safghgf == 4 && kjhgf == 6 && tyuiop == asqer.length) {
        document.getElementById("answer").innerText += "-";
    }
}
function cm() {
    let asqer = document.getElementById("answer").innerText;
    let tyuiop = 0;
    let ravno = ["="]
    for (let k = 0; k < asqer.length; k++) {
        if (asqer.indexOf(ravno[0]) != -1) {
            document.getElementById("answer").innerText = " ";
            document.getElementById("bad").innerText = " ";
        }
        else {
            tyuiop += 1;
        }
    }
    let reqsa = ["+", "*", "^", "/"]
    let safghgf = 0;
    for (i = 1 ; i<= 4 ; i++) {
        if (0 == asqer.length) {
            console.log(false)
        }
        else {
            safghgf += 1;
        }
    }
    let fghjk = ["-", ".", "+", "*", "^", "/"];
    let kjhgf = 0;
        for (let j = 0; j<6; j++) {
        if (asqer[asqer.length - 1] == fghjk[j]) {
            console.log(false)
        }
        else {
            kjhgf +=1;
        }
    }
    if (safghgf == 4 && kjhgf == 6 && tyuiop == asqer.length) {
        document.getElementById("answer").innerText += "*";
    }
}
function cr() {
    let asqer = document.getElementById("answer").innerText;
    let tyuiop = 0;
    let ravno = ["="]
    for (let k = 0; k < asqer.length; k++) {
        if (asqer.indexOf(ravno[0]) != -1) {
            document.getElementById("answer").innerText = " ";
            document.getElementById("bad").innerText = " ";
        }
        else {
            tyuiop += 1;
        }
    }
    if (0 == asqer.length) {
        document.getElementById("answer").innerText += "0.";
    }
    else {
        let fghjk = ["-", ".", "+", "*", "^", "/"];
        let kjhgf = 0;
            for (let j = 0; j<6; j++) {
            if (asqer[asqer.length - 1] == fghjk[j]) {
                console.log(false)
            }
            else {
                kjhgf +=1;
            }
        }
        if (kjhgf == 6 && tyuiop == asqer.length) {
            document.getElementById("answer").innerText += ".";
        }
    }
}
function ce() {
    let asqer = document.getElementById("answer").innerText;
    let tyuiop = 0;
    let ravno = ["="]
    for (let k = 0; k < asqer.length; k++) {
        if (asqer.indexOf(ravno[0]) != -1) {
            document.getElementById("answer").innerText = " ";
            document.getElementById("bad").innerText = " ";
        }
        else {
            tyuiop += 1;
        }
    }
    let reqsa = ["+", "*", "^", "/"]
    let safghgf = 0;
    for (i = 1 ; i<= 4 ; i++) {
        if (0 == asqer.length) {
            console.log(false)
        }
        else {
            safghgf += 1;
        }
    }
    let fghjk = ["-", ".", "+", "*", "^", "/"];
    let kjhgf = 0;
        for (let j = 0; j<6; j++) {
        if (asqer[asqer.length - 1] == fghjk[j]) {
            console.log(false)
        }
        else {
            kjhgf +=1;
        }
    }
    if (safghgf == 4 && kjhgf == 6 && tyuiop == asqer.length) {
        document.getElementById("answer").innerText += "^";
    }
}
function cd() {
    let asqer = document.getElementById("answer").innerText;
    let tyuiop = 0;
    let ravno = ["="]
    for (let k = 0; k < asqer.length; k++) {
        if (asqer.indexOf(ravno[0]) != -1) {
            document.getElementById("answer").innerText = " ";
            document.getElementById("bad").innerText = " ";
        }
        else {
            tyuiop += 1;
        }
    }
    let reqsa = ["+", "*", "^", "/"]
    let safghgf = 0;
    for (i = 1 ; i<= 4 ; i++) {
        if (0 == asqer.length) {
            console.log(false)
        }
        else {
            safghgf += 1;
        }
    }
    let fghjk = ["-", ".", "+", "*", "^", "/"];
    let kjhgf = 0;
        for (let j = 0; j<6; j++) {
        if (asqer[asqer.length - 1] == fghjk[j]) {
            console.log(false)
        }
        else {
            kjhgf +=1;
        }
    }
    if (safghgf == 4 && kjhgf == 6 && tyuiop == asqer.length) {
        document.getElementById("answer").innerText += "/";
    }
}
function cRl() {
    let asqer = document.getElementById("answer").innerText;
    let tyuiop = 0;
    let ravno = ["="]
    for (let k = 0; k < asqer.length; k++) {
        if (asqer.indexOf(ravno[0]) != -1) {
            document.getElementById("answer").innerText = " ";
            document.getElementById("bad").innerText = " ";
        }
        else {
            tyuiop += 1;
        }
    }
    let reqsa = ["+", "*", "^", "/"]
    let safghgf = 0;
    for (i = 1 ; i<= 4 ; i++) {
        if (0 == asqer.length) {
            console.log(false)
        }
        else {
            safghgf += 1;
        }
    }
    if (safghgf == 4 && tyuiop == asqer.length) {
        document.getElementById("answer").innerText += "(";
    }
}
function crL() {
    let asqer = document.getElementById("answer").innerText;
    let tyuiop = 0;
    let ravno = ["="]
    for (let k = 0; k < asqer.length; k++) {
        if (asqer.indexOf(ravno[0]) != -1) {
            document.getElementById("answer").innerText = " ";
            document.getElementById("bad").innerText = " ";
        }
        else {
            tyuiop += 1;
        }
    }
    let reqsa = ["+", "*", "^", "/"]
    let safghgf = 0;
    for (i = 1 ; i<= 4 ; i++) {
        if (0 == asqer.length) {
            console.log(false)
        }
        else {
            safghgf += 1;
        }
    }
    if (safghgf == 4 && tyuiop == asqer.length) {
        document.getElementById("answer").innerText += ")";
    }
}
function cl() {
    document.getElementById("answer").innerText = " ";
    document.getElementById("bad").innerText = " ";
}
function cb() {
    let bckspc = document.getElementById("answer").innerText;
    bckspc = String(bckspc);
    bckspc = bckspc.slice(0, bckspc.length - 1);
    document.getElementById("bad").innerText = " ";
    document.getElementById("answer").innerText = bckspc;

}


function ceq() {
    let asqer = document.getElementById("answer").innerText;
    for (let i = 0; i < asqer.length; i++) {
        //Не доделано
    }
    let asreq = eval(asqer)
    document.getElementById("answer").innerText = " ";
    document.getElementById("bad").innerText = " ";
    document.getElementById("bad").innerText += asqer;
    document.getElementById("answer").innerText += "=";
    document.getElementById("answer").innerText += asreq;
}
