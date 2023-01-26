//roman to integer
//Given a roman numeral, convert it to an integer.
//Input is guaranteed to be within the range from 1 to 3999.
//I = 1
//V = 5
//X = 10
//L = 50
//C = 100

//D = 500
//M = 1000
//Example 1:
//Input: "III"
//Output: 3
//Example 2:
//Input: "IV"


//Output: 4
//Example 3:
//Input: "IX"
//Output: 9
//Example 4:
//Input: "LVIII"
//Output: 58
//Explanation: L = 50, V= 5, III = 3.
//Example 5:
//Input: "MCMXCIV"
//Output: 1994
//Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
function romanToInt(s) {
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let sum = 0;
    for(let i = 0; i < s.length; i++) {
        if(roman[s[i]] < roman[s[i+1]]) {
            sum -= roman[s[i]];
        } else {
            sum += roman[s[i]];
        }
    }
    return sum;
}

                                          // Another way
//map method
//map acts kile object and it has key value pair
var romanTOInt = function(s) {
    const myMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0;
    for(let i=0; i< s.length; i++) {
        const curr = myMap[s[i]]     //pointer
        const next = myMap [s[i+1]]

        if(curr < next) {
            result += next - curr;
            i++;
        } else {
            result += curr;
        }
    }
    return result;
}