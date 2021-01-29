// Q1 : Write a program that converts a string “472”
//  to a number 472. Display
// the values & types in your browser.


function q1()
{
    var string_number = "472";
    var number = parseInt(string_number);
    document.getElementById("q1").innerHTML = "Question 1 result => value : " + number + " & dtype : " + typeof(number);
}

// Q2: Write a program that takes a positive integer from user 
// & display the
// following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

function q2()
{
    var input_number = prompt("enter number : " );
    var display_number = parseInt(input_number);
    var round_off_number = Math.round(display_number);
    var floor_number = Math.floor(display_number);
    var ceil_number = Math.ceil(display_number);   
    document.getElementById("q2").innerHTML = "Question 2 result => input_number : " + input_number + " round_off_number : " + round_off_number + " floor_number : " + floor_number + " ceil_number : " + ceil_number;
}

// Q3: Write a program that simulates a dice using random() method of JS
// Math class. Display the value of dice in your browser.

function q3()
{
    var dice_num = Math.floor(Math.random() * 6) + 1; 
    document.getElementById("q3").innerHTML = "Dice Value : " + dice_num;
}

// Q4: Write a program that round a number to a given decimal place.

function q4()
{
    var input_number = parseInt(prompt("input number."));
    var round_of_digits = parseInt(prompt("decimal place number input."));
    var resultent_num = input_number.toFixed(round_of_digits);
    document.getElementById("q4").innerHTML = "Round of Value : " + resultent_num;
}

// Q5: Write a program to ask the user about his age. Calculate and show
// his birth year in your browser

function q5()
{
    var input_age = parseInt(prompt("enter your age."));
    var current_year = 2021;
    var year_of_birth =  current_year - input_age;
    document.getElementById("q5").innerHTML = "Your birth year is : " + year_of_birth;
}