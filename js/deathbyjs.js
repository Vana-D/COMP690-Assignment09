//  STEP 1  ----------------------------------------------
// FUNCTION TO SORT A STRING
function sortStr(str) {
  // SPLIT STRING INTO ARRAY BY CHARACTER, THEN SORT AND JOIN
  let sortedStr = str.split('').sort().join('');
  return sortedStr;
}
  
console.log(sortStr('webmaster'));


//  STEP 2  ----------------------------------------------
// FUNCTION TO CONVERT STRING TO UPPER CASE
function convertUpper(str) {
  // DECLARE EMPTY ARRAY TO STORE STRING WITH FIRST CHAR AS UPPERCASE
  let array = str.split(' ');
  let newArr = [];
  // ITERATE THROUGH ARRAY AND CONVERT FIRST CHAR TO UPPERCASE
  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
  }
  return newArr.join(' ');
}
  
console.log(convertUpper('the quick brown fox'));



//  STEP 3  ----------------------------------------------
// FUNCTION TO COUNT VOWELS IN STRING
function cntVowels(str) {
  // MATCH ON VOWELS AND COUNT USING LENGTH
  const cnt = str.match(/[aeiou]/gi).length;
  return cnt;
}
  
console.log(cntVowels('the quick brown fox'));
  

//  STEP 4  ----------------------------------------------
// FUNCTION TO GENERATE RANDOM PASSWORD WITH N' CHARACTERS
function generateStrPassword(length) {
  // DEFINE CHARACTER
  let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // DEFINE VARIABLES
  let pwLen = chars.length;
  let password = '';
  // ITERATE THROUGH THE PASSWORD LENGTH AND CHOOSE RANDOM CHARACTER
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * pwLen));
  }
  return password;
}
  
console.log(generateStrPassword(8));


//  STEP 5  ----------------------------------------------
// FUNCTION TO PASS AN ARRAY OF COUNTRIES AND RETURN LONGEST ELEMENT
function longestCountryName(arr) {
  console.log(arr);
  let longestCountry = arr[0];
  for (let el of arr) {
    if (el.length > longestCountry.length) {
      longestCountry = el;
    }
  }
  return longestCountry;
}
  
console.log(longestCountryName(['Australia', 'Germany', 'United States of America']));