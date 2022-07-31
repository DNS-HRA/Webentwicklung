function calculateSum(){
    const x = parseInt(document.getElementById("number1").value);
    const y = parseInt(document.getElementById("number2").value);
    const sum = document.getElementById("Ergebnis");
    console.log(x + y);
    sum.value = x + y;
}