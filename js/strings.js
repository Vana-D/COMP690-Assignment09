//  STEP 1  ----------------------------------------------
function nameLength() {
    let name = prompt('Please Enter Name');
    name.match(/\w/g)
    let length = name.length
    alert(`Your name is ${length} letters long.`)
}
nameLength();


//  STEP 2  ----------------------------------------------
function numericValue () {
    let firstName = prompt('Please Enter Name');
    firstName.match(/\w/g)
    let length = parseInt(firstName.length) -1;
    
    let findChar = parseInt(prompt(`Please choose a number between 0 and ${length}.`))
    if (findChar === 0 || findChar <= length)  {
        alert(`The character at index ${findChar} is ` + (firstName.charAt(findChar)).toUpperCase())
    } else {
        parseInt(prompt(`Invalid number. Please input a digit between 0 and ${length}.`))
    } 
}
numericValue();


//  STEP 3  ----------------------------------------------
function linkNames() {
    let fname = prompt(`What is your first name?`);
    let lname = prompt(`What is your last name?`);
    alert(`Your name is: ${(fname.concat(lname))}`);
}
linkNames();


//  STEP 4  ----------------------------------------------
function findFox() {
    let firstInstance = `The quick brown fox jumps over the lazy fox`;
    alert(firstInstance.indexOf('fox'));    
}
findFox();

//  STEP 5  ----------------------------------------------
function foxLastIndex() {
    let lastInstance = `The quick brown fox jumps over the lazy fox`;
    alert(lastInstance.lastIndexOf('fox'));
}
foxLastIndex();


//  STEP 6  ----------------------------------------------
function replaceText() {
    let lazyText = `The quick brown fox jumps over the lazy fox`;
    fullName = prompt(`Please enter your full name`);
    alert(lazyText.replace('the lazy fox', fullName));
}   
replaceText();


//  STEP 7  ----------------------------------------------
function findWord() {
    let words = `The quick brown fox jumps over the lazy fox`;
    let wordChoice = prompt(`Choose a word in the following text: \n"${words}"`);
    alert(`The word ${wordChoice} is at position ${words.search(wordChoice)}`);
}
findWord();


//  STEP 8  ----------------------------------------------
function extract() {
    let old_String = `The quick brown fox jumps over the lazy fox`;
    let new_String = (old_String.substring(31, 43))
    alert(new_String.toUpperCase());
}   
extract();


//  STEP 9  ----------------------------------------------
function trimText() {
    let upperCaseText = ` THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          `;
    let trimLowercase = (upperCaseText.trim().toLowerCase());
    alert(trimLowercase);
}
trimText();


//  STEP 10 ----------------------------------------------
function capitalize() {
    let str = 'the quick brown fox jumps over the lazy fox';
    let result = (str.charAt(0).toUpperCase() + str.slice(1));
    alert(result);
}
capitalize();

