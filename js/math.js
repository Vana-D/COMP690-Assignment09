//  STEP 1  ----------------------------------------------
function absoluteValues() {
    let number0 = parseFloat(prompt('Enter a number'));
    let absolute = (Math.abs(number0));
    alert(`The absolute value of ${number0} is ` + absolute);
}
absoluteValues();


//  STEP 2  ----------------------------------------------
function upwards() {
    let number1 = parseFloat(prompt('Enter a floating point value (decimal).'));
    let roundedUp = (Math.ceil(number1));
    alert(`The number ${number1} rounded up to to the nearest whole number is ` + roundedUp);
}
upwards();


//  STEP 3  ----------------------------------------------
function downwards() {
    let number2 = parseFloat(prompt('Enter a floating point value (decimal).'));
    let roundedDown = (Math.floor(number2));
    alert(`The number ${number2} rounded down to to the nearest whole number is ` + roundedDown);
}
downwards();


//  STEP 4  ----------------------------------------------
function fiveValues() { 
    let input = parseInt(prompt("Please enter five different numbers separated by commas. \nExample: 1,2,3,4,5"));
    let maxValue = Math.max(input)
    let minValue = Math.min(input)
    console.log(`The largest number is: ${maxValue}`)
    console.log(`The smallest number is: ${minValue}`);
}
fiveValues();


//  STEP 5  ----------------------------------------------
function squareRoot() {
    let number3 = parseInt(prompt('Enter a number'));
    let sq_root = (Math.sqrt(number3));
    alert(`The square root of ${number3} is ` + sq_root);
}
squareRoot();







