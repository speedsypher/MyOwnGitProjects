function calcu() {
 let a = parseInt( document.querySelector('#firstNumber').value);
 let b = parseInt( document.querySelector('#secondNumber').value);
 let op = document.querySelector('#operator').value;
 let calculate;

 if (op == "add") {
    calculate = a+b;
 }
 else if (op == 'min') {
     calculate = a-b;
 }
 else if (op == "div") {
     calculate = a/b;
 }
 else if (op == "mul") {
     calculate = a*b;
 }

 document.querySelector("#answer").innerHTML= calculate;

}      
 