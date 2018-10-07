const DEFAULT_AGE = 21;// creation a constant for the user's age
var userName = prompt("What is your name ?", "Your name is...");
var userAge = prompt("How old are your ?", DEFAULT_AGE);
var userPay = confirm("You are happy with the salary ?");

/*
output information 
to the console 
*/
console.log(userName);
console.log(userAge);
console.log(userPay);
//output alert message 
if(userPay) {
alert("Yes");
}
else {
alert("No");
}