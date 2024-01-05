function aFunction() {
    var afterClick = 'I hate math!';
    document.getElementById('buttonText').innerHTML = afterClick;
}

function subtract() {
    var subtraction = 5 - 2;
    document.getElementById('math').innerHTML = '5 - 2 = ' + subtraction;
}

function multiply() {
    var mult = 2 * 2;
    document.getElementById('theMath').innerHTML = '2 * 2 = ' + mult;
}

function divide() {
    var div = 2 / 2;
    document.getElementById('divMath').innerHTML = '2 / 2 = ' + div;
}

function addition() {
    var add = 2 + 2;
    document.getElementById('addMath').innerHTML = '2 + 2 = ' + add;
}

function plusOne() {
    var addOne = 2;
    addOne++
    document.getElementById('oneMath').innerHTML = '2 + one more = ' + addOne;
}

function lessOne() {
    var less = 2;
    less--
    document.getElementById('lessMath').innerHTML = 'One less than 2 = ' + less;
}

function randomNumber() {
    window.alert(Math.random() * 10);
}
