const userInput = document.getElementById("userInput"); 
var expression = ''; /* to be user input's concatenations */

function press(num)
{
    expression += num; 
    userInput.value = expression; 
}

function equal()
{
    userInput.value = eval(expression); // solves the expression //
    expression = ''; // to erase the expression for the next calculation //
}

function erase()
{
    expression = ''; 
    userInput.value = expression; 
}