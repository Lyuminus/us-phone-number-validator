function c1() {
    let n1 = Number(document.getElementById('number1').value);
    let n2 = Number(document.getElementById('number2').value);  
    document.getElementById('answer').innerText += String(n1 + n2) + ";"; 
}

function c2() {
    let n1 = Number(document.getElementById('number1').value);
    let n2 = Number(document.getElementById('number2').value);  
    document.getElementById('answer').innerText += String(n1 - n2) + ";"; 
}
function c3() {
    let n1 = Number(document.getElementById('number1').value);
    let n2 = Number(document.getElementById('number2').value);  
    document.getElementById('answer').innerText += String(n1 * n2) + ";"; 
}
function c4() {
    let n1 = Number(document.getElementById('number1').value);
    let n2 = Number(document.getElementById('number2').value);  
    document.getElementById('answer').innerText += String(n1 / n2) + ";"; 
}
function c5() {
    document.getElementById("answer").innerText = " ";
}
