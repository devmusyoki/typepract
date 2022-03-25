"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'Lewis';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorcode: code };
}
generateError('An error occured!', 500);
