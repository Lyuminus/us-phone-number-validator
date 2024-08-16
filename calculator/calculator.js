// js basics
// problems
// 

function check() {
    let n1 = Number(document.getElementById('number1').value);
    let n2 = Number(document.getElementById('number2').value);
    // console.log(n1 + n2);    
    document.getElementById('answer').innerText += " " + String(n1 + n2); 
}

