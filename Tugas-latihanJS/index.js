/*
Kresna Wijaya (1808561085)
I Made Wasanta Bhaskara (1808561088)
Made Rusdinda Hartani (1808561093)
*/

/* Add Length 
https://www.codewars.com/kata/559d2284b5bb6799e9000047
1. Description:
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

addLength('apple ban') => ["apple 5", "ban 3"]
addLength('you will win') => ["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
*/

function addLength(str) {
  return str.split(' ').map(word => `${word} ${word.length}`);
}

console.log(addLength('apple ban'))
console.log(addLength('you will win'))

/* Arguments to Binary addition
https://www.codewars.com/kata/57642a90dee2da8dd3000161
2. Description:
Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

If your language can handle float binaries assume the array won't contain float or doubles.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'

NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
This is a modification on the Kata: Array2Binary addition hope you like it
*/

function arr2bin(arr){
  return arr
    .reduce(
      (total, value) => (typeof value === 'number' ? total + value : total),
      0
    )
    .toString(2)
}

console.log(arr2bin([1,2]))
console.log(arr2bin([1,2,3,4,5]))
console.log(arr2bin([null]))

/* Basic Mathematical Operations
https://www.codewars.com/kata/57356c55867b9b7a60000bd7
3. Description:
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples:

basicOp('+', 4, 7)         // Output: 11
basicOp('-', 15, 18)       // Output: -3
basicOp('*', 5, 5)         // Output: 25
basicOp('/', 49, 7)        // Output: 7
*/

function basicOp(o, a, b) {
  return eval(a+o+b);
}

console.log(basicOp('+', 4, 7))
console.log(basicOp('-', 15, 18))
console.log(basicOp('*', 5, 5))
console.log(basicOp('/', 49, 7))

/* Beginner Series #1 School Paperwork
https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd
4. Description:
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need.

Example:
paperwork(5, 5) == 25
Note! if n or m < 0 return 0! Waiting for translations and Feedback! Thanks!
*/

function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0
}

console.log(paperwork(5,5))

/* Calculate BMI
https://www.codewars.com/kata/57a429e253ba3381850000fb
5. Description:
Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";
                                    
console.log(bmi(80, 1.80))

/* Century From Year
https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
6. Description:
Introduction
The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.

Input , Output Examples ::
centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)
Hope you enjoy it .. Awaiting for Best Practice Codes

Enjoy Learning !!!
*/

const century = year => Math.ceil(year/100)

console.log(century(1705))
console.log(century(1900))
console.log(century(1601))
console.log(century(2000))

/* Check the exam
https://www.codewars.com/kata/5a3dd29055519e23ec000074
7. Description:
The first input array contains the correct answers to an exam, like ["a", "a", "b", "d"]. The second one is "answers" array and contains student's answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer(empty string).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
*/

const checkExam = (answers, responses) => {
  const score = responses.reduce((total, response, index) => {
    if (!response) return total;
    if (response === answers[index]) return total + 4;
    if (response !== answers[index]) return total - 1;

    return total;
  }, 0);

  return score > 0 ? score : 0;
};

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]))
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]))
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]))

/* Convert a Number to a String!
https://www.codewars.com/kata/5265326f5fda8eb1160004c8
8. We need a function that can transform a number into a string.

What ways of achieving this do you know?

Examples:
numberToString(123); // returns '123';`   
numberToString(999); // returns '999';`
*/

function numberToString(num) {
  return num.toString();
}

console.log(numberToString(67))

/* Days in the year
https://www.codewars.com/kata/56d6c333c9ae3fc32800070f
9. Description:
A variation of determining leap years, assuming only integers are used and years can be negative and positive.

Write a function which will return the days in the year and the year entered in a string. For example 2000, entered as an integer, will return as a string 2000 has 366 days

There are a few assumptions we will accept the year 0, even though there is no year 0 in the Gregorian Calendar.

Also the basic rule for validating a leap year are as follows

Most years that can be divided evenly by 4 are leap years.

Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400.

So the years 0, -64 and 2016 will return 366 days. Whilst 1974, -10 and 666 will return 365 days.
*/

const yearDays = year =>
  `${year} has ${
    (!(year % 100) && year % 400) || year % 4 ? '365' : '366'
  } days`
  
  console.log(yearDays(0))
  console.log(yearDays(-64))
  console.log(yearDays(2016))
  console.log(yearDays(1974))
  console.log(yearDays(-10))
  console.log(yearDays(666))
  console.log(yearDays(1857))

/* simple calculator
https://www.codewars.com/kata/5810085c533d69f4980001cf
10. Description:
You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument will be numbers.
The third argument will represent a sign indicating the operation to perform on these two numbers.

Example:
calculator(1,2,"+"); //=> result will be 3
if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

Example:
calculator(1,2,"&"); //=> result will be "unknown value"
calculator(1,"k","*"); //=> result will be "unknown value"
Good luck!
*/

function calculator(a,b,sign){
  try {
     return eval(`${a} ${sign} ${b}`)
   } catch (e) {
     return 'unknown value'
   }
 }
 
 console.log(calculator(1,2,"+"))
 console.log(calculator(1,2,"-"))
 console.log(calculator(3,5,"*"))
 console.log(calculator(6,2,"/"))
 console.log(calculator(6,2,"$"))
 console.log(calculator(6,"h","*"))    