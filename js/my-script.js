var btnElement = document.getElementById('btn');
btnElement.onclick = function () {
    var firstNumber = document.getElementById('startingNumber').value;
    var lastNumber = document.getElementById('endingNumber').value;
    var result = ' ';
    for ( var i = firstNumber; i <= lastNumber; i++){
         result += i;
    }
    document.getElementById('result').value = result;

};

function myFunction() {
    document.getElementById("myForm").reset();
}