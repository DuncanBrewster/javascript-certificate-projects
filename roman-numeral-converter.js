/*
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
    var romanToNum = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  
    var romanStr = "";
  
    for (var key in romanToNum) {
      //console.log("key: ", key)
      // console.log("value: ", romanToNum[key])
      while (num >= romanToNum[key]) {
        romanStr += key;
        num -= romanToNum[key];
      }
    } 
  
    return romanStr;
  }
  
  convertToRoman(36);