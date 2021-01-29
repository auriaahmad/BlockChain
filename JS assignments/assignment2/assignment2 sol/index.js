// Q1: Write a program to take “gender” as input from the user. If the user is male, give the
// message in the alert message Box.: “Good Morning Sir” , If the user is female, give the
// message in the alert message Box.: Good Morning Ma’am.

var gender = prompt("What is your gender?");
if (gender == 'male'){
    alert("Good Morning Sir");
}else if (gender == 'female'){
    alert("Good Morning Ma'am");
};

// Q2: Write a program to take input on the marks obtained in three subjects & total marks.
// Compute & show the resulting percentage on your page. Take percentage & compute grade as
// per following table:

var obtained_marks = parseInt(prompt("Please enter your total obtained marks in 3 subjects.",0.0));
var total_marks = parseInt(prompt("Please enter the total marks in 3 subjects.",0.0));
var percentage_marks = (obtained_marks/total_marks)*100;

if (percentage_marks >= 80){
    alert("Grade: A-One \n Remarks: Excellent");
}else if ((percentage_marks>= 70) && (percentage_marks<=79)){
    alert("Grade: A \n Remarks: Good");
}else if ((percentage_marks>= 60) && (percentage_marks<=69)){
    alert("Grade: B \n Remarks: You Need to be Improve");
}else if (percentage_marks<=59){
    alert("Grade: Fail \n Remarks: Sorry");
}


// Q3:Write a program that takes temperature as input and shows a message based on following
// criteria:. T > 40 then “It is too hot outside.” b. T > 30 then “The Weather today is Normal.” c. T >
// 20 then “Today’s Weather is cool.” d. T > 10 then “OMG! Today’s weather is so Cool.”

var temperature = parseInt(prompt("Input Temperature:"));

if (temperature > 40){
    alert("It is too hot outside")
}else if (temperature>30 && temperature <= 40){
    alert("The Weather today is Normal");
}else if (temperature>20 && temperature <= 30){
    alert("Today's Weather is cool");
}else if (temperature > 10 && temperature <=20){
    alert("OMG! Today’s weather is so Cool.");
}


// Q4:Write a JavaScript program that accepts two integers and displays the larger. Also show if
// the two integers are equal.

var integer_1 = parseInt(prompt("Enter First Integer."));
var integer_2 = parseInt(prompt("Enter Second Integer."));

if (integer_1 > integer_2){
    alert("larger integer is = " + integer_1);
}else if (integer_1 == integer_2){
    alert("Both integers are equal.");
}else{
    alert("larger integer is = " + integer_2);
}

// Q5: . This if/else statement does not work. Try to fix it:
//corrected code
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}else{
    greeting = "Good evening";
}

// Q6: Declare and Initialize an array and store 
// available education qualifications in Pakistan 
// (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).
// Show the listed qualifications in your browser
//     like:

