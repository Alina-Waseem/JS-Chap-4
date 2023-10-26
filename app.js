console.log("EXERCISE 4.1");

// Step 1: Create a variable with a Boolean value.
let myVariable = true;

// Step 2: Output the value of the variable to the console.
console.log(myVariable);

// Step 3: Check whether the variable is true and output a message if it is.
if (myVariable) {
    console.log("The variable is true");
}

// Step 4: Add another if statement with a ! in front of the variable to check if the condition is not true.
if (!myVariable){
    console.log("The variable is true");
} 
else {
    console.log("The variable is not true")
};

// Step 5: Change the variable to the opposite to see how the result changes.
myVariable = !myVariable;
console.log(myVariable);

console.log("EXERCISE 4.2");

// Step 1: Create a prompt to ask the user's age
let userAge = prompt("Please enter your age:");

// Step 2: Convert the response from the prompt to a number
userAge = Number(userAge);

// Step 3: Declare a message variable that will hold the console message for the user
let message;

// Step 4: If the input age is equal to or greater than 21, set the message variable accordingly
if (userAge >= 21) {
    message = "You are allowed to enter the venue and purchase alcohol.";
}

// Step 5: If the input age is equal to or greater than 19 but less than 21, set the message variable accordingly
else if (userAge >= 19) {
    message = "You are allowed to enter the venue but you cannot purchase alcohol.";
}

// Step 6: Provide a default else statement to set the message variable to deny entry if none of the above conditions are true
else {
    message = "You are not allowed to enter the venue.";
}

// Step 7: Output the response message variable to the console
console.log(message);

console.log("EXERCISE 4.3");

// Step 1: Create a Boolean value for an ID variable
let ID = true;

// Step 2: Using a ternary operator, create a message variable that will check whether their ID is valid and either allow a person into a venue or not
let message1 = ID ? "You are allowed to enter the venue" : "You are not allowed";

// Step 3: Output the response to the console
console.log(message1);

console.log("EXERCISE 4.4");

let randomNumber = Math.floor(Math.random() * 6);

let userQuestion = prompt("Enter your question: ");

let response;

switch(randomNumber){
    case 0:
        response = "Yes! ";
        break;
     case 1:
        response = "Not Sure!";
        break;
    case 2:
        response = "No!";
        break;
    case 3:
        response = "Definitely Yes!";
        break;
    case 4:
        response = "Definitely No!";
        break;
    case 5:
        response = "Try again later!";
        break;
    default:
        response = "Invalid response";
        break;
}

// Step 4: Create a variable to hold the final response sentence
let finalResponse = `You asked: ${userQuestion}\nMagic 8 Ball says: ${response}`;

// Step 5: Output the user's original question and the randomly selected case response to the console
console.log(finalResponse);


console.log("EXERCISE 4.5");

// Step 1: Create a variable called prize and use a prompt to ask the user to set the value by selecting a number between 0 and 10
let prize = prompt("Please select a number between 0 and 10 to choose your prize:");

// Step 2: Convert the prompt response to a number data type
prize = Number(prize);

// Step 3: Create a variable for the output message containing the value "My Selection: "
let outputMessage = "My Selection: ";

// Step 4: Using the switch statement, provide a response back regarding a prize that is awarded depending on what number is selected
switch(prize){
    case 0:
        outputMessage +="No prize for 0, better luck next time!";
        break;

    case 1:
        outputMessage +="Congrats! You won free ticket";
        break;
    
    case 2:
        outputMessage +="Congrats! You won a house";
        break;
    
    case 3:
    case 4:
        outputMessage +="Congrats! You won a new car";
        break;
    
    case 5:
    case 6:
    case 7:
        outputMessage +="Congrats! You won a gift card";
        break;
    
    default:
        outputMessage +="Sorry, your selection does not correspond to any prize.";
        break;
    
}

// Step 5: Output the message back to the user by concatenating your prize variable strings and the output message string
console.log(outputMessage);

console.log("CHAPTER PROJECTS");

console.log("Evaluating a number game");

let dynamicNumber = 75;

let userNumber = prompt("Please enter a number: ");

userNumber = Number(userNumber);

if ( userNumber > dynamicNumber){
    console.log("The number you enter is greater than dynamic number");
}
else if (userNumber == dynamicNumber){
    console.log("The number you enter is equal to dynamic number");
}
else{
    console.log("The number you enter is less than dynamic number");
}

console.log("Friend checker game");

let friendName = prompt("Enter your name: ");

switch(friendName){
    case "zulaikha":
        console.log("You are a friend, Zulaikha!");
        break;
    case "tooba":
        console.log("You are a friend, Tooba!");
        break;
    case "yumna":
        console.log("You are a friend, Yumna!");
        break;
    default:
        console.log("Sorry! I don't know you.");
        break;

}

console.log("Rock Paper Scissors game");

const choices = ["rock","paper","scissors"];

let playerSelector = Math.floor(Math.random() * 3);
let computerSelector = Math.floor(Math.random() * 3);

let message2 = `player chooses ${choices[playerSelector]} . computer chooses ${choices[computerSelector]}`;

if (playerSelector == computerSelector){
    message2 += " It's a tie!";
}

else {
    if (
        (playerSelector === 0 && computerSelector === 2) ||
        (playerSelector === 1 && computerSelector === 0) ||
        (playerSelector === 2 && computerSelector === 1) 
    )
    {
        message2 +=" Player wins!"
    }
    else {
        message2 +=" Computer wins!"
    }
}

console.log(message2);