//  STEP 1  ----------------------------------------------
function absoluteValue() {
    let number0 = parseFloat(prompt('Enter a number'));
    let absolute = (Math.abs(number0));
    alert(`The absolute value of ${number0} is ` + absolute);
}
absoluteValue();


//  STEP 2  ----------------------------------------------
function roundUp() {
    let number1 = parseFloat(prompt('Enter a floating point value (decimal).'));
    let roundedUp = (Math.ceil(number1));
    alert(`The number ${number1} rounded up to to the nearest whole number is ` + roundedUp);
}
roundUp();


//  STEP 3  ----------------------------------------------
function roundDown() {
    let number2 = parseFloat(prompt('Enter a floating point value (decimal).'));
    let roundedDown = (Math.floor(number2));
    alert(`The number ${number2} rounded down to to the nearest whole number is ` + roundedDown);
}
roundDown();


//  STEP 4  ----------------------------------------------
function fiveValues() { 
    let numbers = (prompt("Please enter five different numbers separated by commas. \nExample: 1,2,3,4,5"));
    console.log(numbers)
    let maxValue = Math.max(numbers);
    let minValue = Math.min(numbers);
    console.log(`The largest number is: ${maxValue}`)
    console.log(`The smallest number is: ${minValue}`)
}
fiveValues();


//  STEP 5  ----------------------------------------------
function squareRoot() {
    let number3 = parseInt(prompt('Enter a number'));
    let sq_root = (Math.sqrt(number3));
    alert(`The square root of ${number3} is ` + sq_root);
}
squareRoot();







