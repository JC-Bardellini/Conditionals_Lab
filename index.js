// IF Statements Conditionals 

// 1. Check if we have more than 20 students, 
// if yes console log "classroom too small" 
// else console log "classroom size acceptable"

// first we must figure out the known variables/values and condition we need to use
// if numberOfStudents is 17/(unknown), and we know how many seats are available
// we need create an IF STATEMENT to check if we may begin class
// if (condition) is TRUE then the "classroom size too small", if FALSE, "classroom size is acceptable"

let numberOfStudents = 17; // unknown value
let beginClass;

if (numberOfStudents >= 20) {
    beginClass = "classroom too small"
} else {
    beginClass = "Classroom size acceptable"
}
// ternary operator 
// let beginClass = numberOfStudents >= 20 ? "classroom size acceptable" : "classroom too small";

console.log(beginClass);

// 2. Check if this person’s number of houses is greater than 2 
// if true console.log(“you need to sell more houses”)
// If 2 or less houses - log “seems reasonable”

// create an if statement to figure out how many houses they need to sale to achieve there goal
// if (condition) = TRUE then "you need to sale more", if FALSE, then "seems reasonable"
// condition = if amount is greater than 2, we need to sale more, if not we achieved our goal

let numberOfHouses = 7; // unknown value
let amountNotSold; 

if (numberOfHouses > 2) {
    amountNotSold = "you need to sale more houses"
} else {
    amountNotSold = "seems reasonable"
}
console.log(amountNotSold);

// 3. Check if the bill is higher than 15 if yes “we should split the bill” 
// If not higher than 15 “I’ll get the bill this time”

// We need to create an IF statement to check if the condition is true or false
// instead of creating a if statement, i did an ternary operator, to check this condition
// If bill is higher than 15 (true), we split the bill, else bill is lower than 15 (false) i will pay the bill

let bill = 20;
let splitBill = bill >= 15 ? "We should split the bill" : "I'll get the bill this time";

console.log(splitBill);

// 4.(OPTIONAL) Write an if/else statement for the following requirements
// If students get 55 or lower: console log "Not to good"
// If students get 60 or lower: console log "ehhhh"
// If students get 70 or lower: console log "Keep trying"
// If students get 80 or lower: console log "nice!"
// If students get 90 or lower: console log "Doing good!"
// else console log "over 90! great!"

// Create an if/else if/ else statement to check if the conditions are true
// if the "grade or number is" is less than or equal to a certain number you will get an output
// therefore we must set a variable to an unknown value which test this theory out
// we will begin by creating an if / else if statement with the information we know and then plug in random numbers 
// after we plug in random numbers, this we show us the grade the student got 

const gradeOfStudent = Math.floor((Math.random() * 100)) + 50; // unknown value
let studentScore;

if (gradeOfStudent <= 55) {
    studentScore = "not to good";
} else if (gradeOfStudent <= 60) {
    studentScore = "ehhhh";
} else if (gradeOfStudent <= 70) {
    studentScore = "keep trying";
} else if (gradeOfStudent <= 80) {
    studentScore = "nice!";
} else if (gradeOfStudent <= 90) {
    studentScore = "doing good!";
} else {
    studentScore = "over 90! Great!";
}

console.log(studentScore);

// 6. age check - check if they are old enough to enter a party
// first define the required age to that you need to be to enter the party
// figure out a condition such is age >= 21 to may enter, else you need to be older
// create an if statement or ternary operator to test out this condition 

let age = Math.floor((Math.random() * 50)); // unknown value from 0-49
let checkAge = age >= 21 ? "you may enter the party" : "wait till you are 21";

console.log(checkAge);

// 7. coffee statement - create an if statement to see if you would like to drink coffee in the morning 
// based on your answer, print one message for yes and another for no

let enoughTime = false
let drinkCoffee = age == true ? "you have enough time to drink coffee" : "you don't have enough time to drink coffee";

console.log(drinkCoffee);

// 8. check what the person can drink depending on their age
// if bellow 10 they drink milk
// 10 - 15, they can drink soda
// above 15 they can drink mocktails
// above 21 they can drink alcohol

let canDrink;
if (age <= 10 ) {
    canDrink = "can drink milk my age is " + age;
} else if (age <=15) {
    canDrink = "can drink sodas my age is " + age;
} else if (age < 21) {
    canDrink = "can drink mocktails my age is " + age;
} else {
    canDrink = "can drink alcohol";
}

console.log(canDrink);

// extra problems 



// Number Comparison: Write a function that takes two numbers as arguments and returns the larger number. 
// Use an if statement to determine which number is greater.

// first we must define our function, then we must define to variables with unknown values to test this theory
// then we need to create an if statement or use the ternary operator to check this
// if numOne > numTwo = return "numOne is bigger" else return numTwo is bigger 
// a externally that we face is when they are both the same value, therefore we need to think of a way to fix the externally
// we can do an else statement that tells us "the values are the same"

function numberComparison () {
    let numOne = Math.floor((Math.random() * 100));
    let numTwo = Math.floor((Math.random() * 100));
    let number;

    if (numOne > numTwo) {
        number = "Number 1 is bigger and its value to " + numOne;
    } else if ( numOne < numTwo) {
        number = "number Two is bigger and it's value of "+ numTwo;
    } else {
        number = "The Values Are The Same!";
    }
    return number;
}

console.log(numberComparison());

// Leap Year Checker: Write a function that takes a year as an argument
// returns true if it's a leap year, otherwise, return false. 
// A leap year is divisible by 4 but not divisible by 100 unless it's also divisible by 400.

